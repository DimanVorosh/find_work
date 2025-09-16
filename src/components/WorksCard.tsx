import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { WorkItem } from '../types/work.types';

interface IWorksCardProps {
  item: WorkItem;
  handlePress: (item: WorkItem) => void;
}

const WorksCard: React.FC<IWorksCardProps> = ({ item, handlePress }) => {
  const { logo, companyName, address, priceWorker, workTypes } = item;

  const onPress = () => {
    handlePress(item);
  };

  return (
    <Pressable style={styles.cardContainer} onPress={onPress}>
      <View style={styles.cardContentTop}>
        <View style={styles.shadow}>
          <Image style={styles.logo} source={{ uri: logo }} />
        </View>
        <View style={styles.cardInfo}>
          <Text style={styles.companyName} numberOfLines={1}>
            {companyName}
          </Text>
          <Text style={styles.text}>Оплата: {priceWorker}₽</Text>
          <Text numberOfLines={2} style={[styles.text]}>
            Профессия: {workTypes.length > 0 ? workTypes[0].name : 'Не указана'}
          </Text>
        </View>
      </View>
      <Text numberOfLines={2} style={styles.addressContainer}>
        <Text style={styles.addressTitle}>Адрес: </Text>
        <Text style={styles.addressText}>{address}</Text>
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    marginBottom: 16,
    borderRadius: 8,
    padding: 16,
    backgroundColor: 'white',
  },
  logo: {
    width: 70,
    height: 70,
    borderRadius: 8,
    resizeMode: 'contain',
  },
  cardContentTop: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
  },
  companyName: {
    fontSize: 18,
    fontWeight: '600',
  },
  cardInfo: {
    flex: 1,
    marginLeft: 16,
  },
  addressContainer: {
    marginTop: 16,
  },
  addressTitle: {
    fontSize: 14,
    fontWeight: '600',
  },
  addressText: {
    fontSize: 14,
    fontWeight: '500',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
});

export default React.memo(WorksCard);
