import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text } from 'react-native';
import { AppStackNavigationType } from '../navigation/routes.types';
import { ROUTES } from '../navigation/routes';
import { SafeAreaView } from 'react-native-safe-area-context';

type IWorksListProps = NativeStackScreenProps<
  AppStackNavigationType,
  typeof ROUTES.WORKS_LIST
>;

const WorksList: React.FC<IWorksListProps> = ({}) => {
  return (
    <SafeAreaView>
      <Text>WorksList</Text>
    </SafeAreaView>
  );
};

export default WorksList;
