import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useCallback, useEffect } from 'react';
import { AppStackNavigationType } from '../navigation/routes.types';
import { ROUTES } from '../navigation/routes';
import { observer } from 'mobx-react-lite';
import { worksStore } from '../store/works.store';
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  FlatList,
} from 'react-native';
import WorksCard from '../components/WorksCard';
import { WorkItem } from '../types/work.types';

type IWorksListProps = NativeStackScreenProps<
  AppStackNavigationType,
  typeof ROUTES.WORKS_LIST
>;

const WorksList: React.FC<IWorksListProps> = observer(({ navigation }) => {
  useEffect(() => {
    worksStore.fetchShifts();
  }, []);

  const goToItem = useCallback(
    (item: WorkItem) => {
      navigation.navigate(ROUTES.WORKS_ITEM, {
        item,
      });
    },
    [navigation],
  );

  if (worksStore.isLoading) {
    return (
      <View style={styles.messageCenter}>
        <Text>Загружаем смены...</Text>
        <ActivityIndicator />
      </View>
    );
  }

  if (worksStore.error) {
    return (
      <View style={styles.messageCenter}>
        <Text>{worksStore.error}</Text>
      </View>
    );
  }

  if (worksStore.items.length === 0) {
    return (
      <View style={styles.messageCenter}>
        <Text>Смен в вашем регионе не найдено</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={worksStore.items}
        renderItem={({ item }) => (
          <WorksCard item={item} handlePress={goToItem} />
        )}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8,
  },
  list: {
    paddingTop: 16,
  },
  messageCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default WorksList;
