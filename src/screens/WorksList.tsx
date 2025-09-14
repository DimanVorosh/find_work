import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { AppStackNavigationType } from '../navigation/routes.types';
import { ROUTES } from '../navigation/routes';
import { SafeAreaView } from 'react-native-safe-area-context';
import { observer } from 'mobx-react-lite';

type IWorksListProps = NativeStackScreenProps<
  AppStackNavigationType,
  typeof ROUTES.WORKS_LIST
>;

const WorksList: React.FC<IWorksListProps> = observer(({}) => {
  return <SafeAreaView></SafeAreaView>;
});

export default WorksList;
