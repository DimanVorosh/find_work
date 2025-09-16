import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { AppStackNavigationType } from '../navigation/routes.types';
import { ROUTES } from '../navigation/routes';

type IWorksItemProps = NativeStackScreenProps<
  AppStackNavigationType,
  typeof ROUTES.WORKS_ITEM
>;

const WorksItem: React.FC<IWorksItemProps> = ({ route }) => {
  const {
    companyName,
    customerRating,
    customerFeedbacksCount,
    currentWorkers,
    planWorkers,
    priceWorker,
    address,
    workTypes,
    logo,
    dateStartByCity,
    timeStartByCity,
    timeEndByCity,
  } = route.params.item;

  return (
    <View style={styles.container}>
      <View style={styles.topContent}>
        <Image style={styles.logo} source={{ uri: logo }} />
        <Text style={styles.companyName}>{companyName}</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.workName}>
          Профессия: {workTypes.length > 0 ? workTypes[0].name : 'Не указана'}
        </Text>
        <Text style={styles.text}>Оплата: {priceWorker}₽</Text>
        <Text style={styles.text}>
          Рейтинг: ★{customerRating ?? '-'} / {customerFeedbacksCount}
        </Text>
        <Text style={styles.text}>Дата начала работы: {dateStartByCity}</Text>
        <Text style={styles.text}>
          График: c {timeStartByCity} до {timeEndByCity}
        </Text>
        <Text style={styles.text}>
          Работники: {currentWorkers} / {planWorkers} чел.
        </Text>
        <Text style={styles.text}>Адрес: {address}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  topContent: {
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 8,
    resizeMode: 'contain',
    marginBottom: 8,
  },
  companyName: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
  },
  workName: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 24,
  },
  content: {
    marginTop: 16,
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
  },
});

export default WorksItem;
