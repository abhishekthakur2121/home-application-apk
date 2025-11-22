import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../utils/colors';

export default function SupportScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.headerBlock}>
        <Text style={styles.badge}>PRIORITY</Text>
        <Text style={styles.title}>24/7 Home Support</Text>
        <Text style={styles.subtitle}>
          Instant help for urgent plumbing, electrical, and safety issues.
        </Text>
      </View>

      <View style={styles.cardPrimary}>
        <Text style={styles.cardLabel}>Call us</Text>
        <Text style={styles.cardPhone}>82195 06413</Text>
        <Text style={styles.cardHint}>Dedicated support line for Home-Buddy members.</Text>
      </View>

      <View style={styles.row}>
        <View style={styles.cardSecondary}>
          <Text style={styles.cardTitle}>Response time</Text>
          <Text style={styles.cardText}>• Immediate triage for critical issues.</Text>
          <Text style={styles.cardText}>• Technician visit scheduled within service hours.</Text>
        </View>

        <View style={styles.cardSecondary}>
          <Text style={styles.cardTitle}>Contact options</Text>
          <Text style={styles.cardText}>• Phone support 24/7.</Text>
          <Text style={styles.cardText}>• Chat and tickets in the full product experience.</Text>
        </View>
      </View>

      <View style={styles.footerBanner}>
        <Text style={styles.footerTitle}>Always-on protection</Text>
        <Text style={styles.footerText}>
          Save this number and reach us any time your home needs urgent attention.
        </Text>
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
    backgroundColor: colors.primary,
    borderRadius: 18,
    padding: 18,
    marginBottom: 18,
  },
  cardLabel: {
    color: colors.white,
    fontSize: 12,
    letterSpacing: 1,
    opacity: 0.85,
    marginBottom: 4,
  },
  cardPhone: {
    color: colors.white,
    fontSize: 22,
    fontWeight: '800',
    marginBottom: 6,
  },
  cardHint: {
    color: colors.white,
    opacity: 0.9,
    fontSize: 13,
  },
  row: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 18,
  },
  cardSecondary: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 14,
    padding: 14,
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
  footerBanner: {
    backgroundColor: colors.white,
    borderRadius: 14,
    padding: 14,
  },
  footerTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.textDark,
    marginBottom: 4,
  },
  footerText: {
    fontSize: 12,
    color: colors.textLight,
  },
});
