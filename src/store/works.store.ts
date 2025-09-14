import { makeAutoObservable, runInAction } from 'mobx';
import { locationStore } from './location.store';
import { worksApi } from '../api/work';

type LocationStoreType = typeof locationStore;

export class WorksStore {
  items: any[] = [];
  error: string | null = null;
  isLoading: boolean = false;

  constructor(private location: LocationStoreType) {
    makeAutoObservable(this);
  }

  async fetchShifts() {
    if (this.isLoading) return;

    if (!this.location.coords) {
      this.error = 'Нет координат';
      return;
    }

    runInAction(() => {
      this.isLoading = true;
      this.error = null;
    });

    try {
      const res = await worksApi.getWorks(this.location.coords);

      runInAction(() => {
        this.items = res.data?.data ?? [];
        this.isLoading = false;
      });
    } catch (e: any) {
      runInAction(() => {
        this.isLoading = false;
        this.error = e?.message ?? 'Не удалось получить список смен';
      });
    }
  }
}

export const worksStore = new WorksStore(locationStore);
