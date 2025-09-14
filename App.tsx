import { NavigationContainer } from '@react-navigation/native';
import AppStackNavigator from './src/navigation/AppStack';
import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { locationStore } from './src/store/location.store';
import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { openSettings } from 'react-native-permissions';

const App = observer(() => {
  useEffect(() => {
    locationStore.requestLocation();
  }, []);

  const goToSettings = () => {
    openSettings();
  };

  if (locationStore.isLoading) {
    return (
      <View style={styles.messageCenter}>
        <Text>Определяем локацию…</Text>
        <ActivityIndicator />
      </View>
    );
  }

  if (locationStore.status === 'denied' || locationStore.status === 'error') {
    return (
      <View style={styles.messageCenter}>
        <Text>{locationStore.error}</Text>
        <Button title="Перейти в настройки" onPress={goToSettings} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <AppStackNavigator />
    </NavigationContainer>
  );
});

const styles = StyleSheet.create({
  messageCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
