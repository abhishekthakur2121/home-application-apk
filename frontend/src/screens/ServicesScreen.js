import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import colors from '../utils/colors';
import SERVICES from '../data/services';

export default function ServicesScreen({ navigation }) {
  const handlePressService = (service) => {
    navigation.navigate('ServiceDetail', { serviceId: service.id });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => handlePressService(item)}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>{item.name}</Text>
        {item.frequencyLabel ? (
          <Text style={styles.badge}>{item.frequencyLabel}</Text>
        ) : null}
      </View>
      <Text style={styles.cardCategory}>{item.category}</Text>
      <Text style={styles.cardPurpose}>{item.purpose}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Explore Home Buddy services and their schedules.</Text>
      <FlatList
        data={SERVICES}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 16,
  },
  subtitle: {
    color: colors.textLight,
    marginBottom: 12,
  },
  listContent: {
    paddingBottom: 24,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.textDark,
    flex: 1,
    marginRight: 8,
  },
  badge: {
    backgroundColor: colors.accent,
    color: colors.textDark,
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 4,
    fontSize: 11,
    fontWeight: '700',
  },
  cardCategory: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.primary,
    marginBottom: 4,
  },
  cardPurpose: {
    fontSize: 12,
    color: colors.textLight,
  },
});
