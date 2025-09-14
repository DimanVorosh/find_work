import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppStackNavigationType } from './routes.types';
import { ROUTES } from './routes';
import WorksList from '../screens/WorksList';
import WorksItem from '../screens/WorksItem';

const Stack = createNativeStackNavigator<AppStackNavigationType>();

const AppStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={ROUTES.WORKS_LIST}
    >
      <Stack.Screen name={ROUTES.WORKS_LIST} component={WorksList} />
      <Stack.Screen name={ROUTES.WORKS_ITEM} component={WorksItem} />
    </Stack.Navigator>
  );
};

export default AppStackNavigator;
