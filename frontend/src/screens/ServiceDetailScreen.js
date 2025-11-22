import React, { useMemo } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import colors from '../utils/colors';
import SERVICES from '../data/services';

export default function ServiceDetailScreen({ route }) {
  const { serviceId } = route.params || {};

  const service = useMemo(
    () => SERVICES.find((s) => s.id === serviceId) || null,
    [serviceId]
  );

  if (!service) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>Service not found.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>{service.name}</Text>
      {service.frequencyLabel ? (
        <Text style={styles.frequency}>{service.frequencyLabel}</Text>
      ) : null}
      <Text style={styles.category}>{service.category}</Text>

      <View style={styles.block}>
        <Text style={styles.blockTitle}>Purpose</Text>
        <Text style={styles.blockText}>{service.purpose}</Text>
      </View>

      <View style={styles.block}>
        <Text style={styles.blockTitle}>How it works</Text>
        <Text style={styles.blockText}>• Identify issues and potential risks.</Text>
        <Text style={styles.blockText}>• Conduct assessment or inspection.</Text>
        <Text style={styles.blockText}>• Recommend repairs or improvements.</Text>
        <Text style={styles.blockText}>• Schedule next check to maintain home health.</Text>
      </View>

      <View style={styles.block}>
        <Text style={styles.blockTitle}>Schedule</Text>
        {service.frequencyPerYear ? (
          <Text style={styles.blockText}>
            This service is planned approximately {service.frequencyPerYear} times per year as part of your
            annual home care plan.
          </Text>
        ) : (
          <Text style={styles.blockText}>
            This service is available on demand. You can request it anytime from the app.
          </Text>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: 16,
    paddingBottom: 24,
  },
  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
  },
  errorText: {
    color: colors.error,
    fontWeight: '600',
  },
  title: {
    fontSize: 18,
    fontWeight: '800',
    color: colors.textDark,
    marginBottom: 4,
  },
  frequency: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.accent,
    marginBottom: 4,
  },
  category: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.primary,
    marginBottom: 12,
  },
  block: {
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
  blockTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.textDark,
    marginBottom: 6,
  },
  blockText: {
    fontSize: 12,
    color: colors.textLight,
    marginBottom: 2,
  },
});
