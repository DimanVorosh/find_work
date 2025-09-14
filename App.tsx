import { NavigationContainer } from '@react-navigation/native';
import AppStackNavigator from './src/navigation/AppStack';

const App = () => {
  return (
    <NavigationContainer>
      <AppStackNavigator />
    </NavigationContainer>
  );
};

export default App;
