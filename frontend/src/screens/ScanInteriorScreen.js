import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../utils/colors';

export default function ScanInteriorScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scan Interior Design</Text>
      <Text style={styles.subtitle}>
        This feature lets you scan your room anytime and get layout and style suggestions.
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Availability</Text>
        <Text style={styles.cardText}>• You can run this scan anytime from within the app.</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>How it helps</Text>
        <Text style={styles.cardText}>• Visual check of furniture placement.</Text>
        <Text style={styles.cardText}>• Suggestions for improving space and lighting.</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Start a mock scan</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '800',
    color: colors.textDark,
    marginBottom: 4,
  },
  subtitle: {
    color: colors.textLight,
    marginBottom: 16,
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
  button: {
    marginTop: 12,
    backgroundColor: colors.accent,
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.textDark,
  },
});
