// store.ts
import { makeAutoObservable, runInAction } from 'mobx';
import { Coords } from '../types/work.types';
import { PermStatus } from '../types/permissions.types';
import { Platform } from 'react-native';
import { check, PERMISSIONS, request, RESULTS } from 'react-native-permissions';
import Geolocation, {
  GeoPosition,
  GeoError,
} from 'react-native-geolocation-service';

class LocationStore {
  status: PermStatus = 'idle';
  coords: Coords | null = null;
  error: string | null = null;
  isLoading: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  get hasLocation() {
    return !!this.coords;
  }

  requestLocation = async () => {
    if (this.isLoading) return;

    runInAction(() => {
      this.isLoading = true;
      this.error = null;
    });

    try {
      const locationPerm =
        Platform.OS === 'ios'
          ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
          : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;

      const locationPermStatus = await check(locationPerm);

      let granted = locationPermStatus === RESULTS.GRANTED;
      if (!granted) {
        const requestPerm = await request(locationPerm);
        granted = requestPerm === RESULTS.GRANTED;
      }
      if (!granted) {
        runInAction(() => {
          this.status = 'denied';
          this.isLoading = false;
          this.error = 'Доступ к геолокации не предоставлен';
        });
        return;
      }

      Geolocation.getCurrentPosition(
        (pos: GeoPosition) => {
          runInAction(() => {
            this.coords = {
              latitude: pos.coords.latitude,
              longitude: pos.coords.longitude,
            };
            this.status = 'granted';
            this.isLoading = false;
          });
        },
        (e: GeoError) => {
          runInAction(() => {
            this.status = 'error';
            this.error = e.message || 'Не удалось получить координаты';
            this.isLoading = false;
          });
        },
        {
          enableHighAccuracy: true,
          timeout: 12000,
          maximumAge: 0,
        },
      );
    } catch (error: any) {
      runInAction(() => {
        this.status = 'error';
        this.error = 'Ошибка в получении геолокации';
        this.isLoading = false;
      });
    }
  };
}

export const locationStore = new LocationStore();
