import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../utils/colors';

export default function HomeHealthReportScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.headerBlock}>
        <Text style={styles.badge}>INSIGHTS</Text>
        <Text style={styles.title}>Home Health Report</Text>
        <Text style={styles.subtitle}>Quarterly overview of your home's condition.</Text>
      </View>

      <View style={styles.cardPrimary}>
        <Text style={styles.cardTitle}>Schedule</Text>
        <Text style={styles.cardText}>• 4 reports per year (one every quarter).</Text>
        <Text style={styles.cardText}>• Each report highlights structure, safety, and aesthetics.</Text>
      </View>

      <View style={styles.cardSecondary}>
        <Text style={styles.cardTitle}>What you get</Text>
        <Text style={styles.cardText}>• Overall health summary.</Text>
        <Text style={styles.cardText}>• Areas that need attention.</Text>
        <Text style={styles.cardText}>• Recommended repairs and next steps.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
  },
  headerBlock: {
    marginBottom: 20,
  },
  badge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
    backgroundColor: colors.accent,
    color: colors.textDark,
    fontSize: 11,
    fontWeight: '700',
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: colors.textDark,
    marginBottom: 6,
  },
  subtitle: {
    color: colors.textLight,
    fontSize: 14,
  },
  cardPrimary: {
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: 16,
    marginBottom: 14,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },
  cardSecondary: {
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.textDark,
    marginBottom: 6,
  },
  cardText: {
    fontSize: 12,
    color: colors.textLight,
    marginBottom: 2,
  },
});
