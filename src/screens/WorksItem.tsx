import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text } from 'react-native';
import { AppStackNavigationType } from '../navigation/routes.types';
import { ROUTES } from '../navigation/routes';

type IWorksItemProps = NativeStackScreenProps<
  AppStackNavigationType,
  typeof ROUTES.WORKS_ITEM
>;

const WorksItem: React.FC<IWorksItemProps> = ({}) => {
  return (
    <View>
      <Text>WorksItem</Text>
    </View>
  );
};

export default WorksItem;
