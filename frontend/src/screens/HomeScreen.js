import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import colors from '../utils/colors';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../features/userSlice';

export default function HomeScreen({ navigation }) {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigation.replace('Login');
  };

  const handleExploreServices = () => {
    navigation.navigate('Services');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>HB</Text>
        </View>
        <View style={styles.headerTextWrap}>
          <Text style={styles.welcome}>Welcome back</Text>
          <Text style={styles.tagline}>Make your home tasks effortless</Text>
        </View>
        <TouchableOpacity style={styles.headerLogoutBtn} onPress={handleLogout}>
          <Text style={styles.headerLogoutText}>Logout</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Search */}
        <View style={styles.searchBar}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            placeholder="Search services, tasks..."
            placeholderTextColor={colors.textLight}
            style={styles.searchInput}
          />
        </View>

        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.quickActions}>
          <TouchableOpacity style={styles.actionChip}>
            <Text style={styles.actionChipIcon}>➕</Text>
            <Text style={styles.actionChipText}>New Task</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionChip}>
            <Text style={styles.actionChipIcon}>📅</Text>
            <Text style={styles.actionChipText}>Schedule</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionChip}>
            <Text style={styles.actionChipIcon}>🧾</Text>
            <Text style={styles.actionChipText}>Bills</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionChip}>
            <Text style={styles.actionChipIcon}>⭐</Text>
            <Text style={styles.actionChipText}>Favorites</Text>
          </TouchableOpacity>
        </View>

        {/* Stats */}
        <View style={styles.statsRow}>
          <View style={[styles.statCard, { backgroundColor: '#E9F5FF' }]}> 
            <Text style={styles.statLabel}>Active Tasks</Text>
            <Text style={styles.statValue}>04</Text>
          </View>
          <View style={[styles.statCard, { backgroundColor: '#F3F9EE' }]}> 
            <Text style={styles.statLabel}>Bookings</Text>
            <Text style={styles.statValue}>02</Text>
          </View>
          <View style={[styles.statCard, { backgroundColor: '#FFF5EA' }]}> 
            <Text style={styles.statLabel}>Offers</Text>
            <Text style={styles.statValue}>03</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Services</Text>
        <View style={styles.cardsRow}>
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Services')}>
            <View style={[styles.iconWrap, { backgroundColor: '#E9F5FF' }]}>
              <Text style={styles.cardIcon}>🧹</Text>
            </View>
            <Text style={styles.cardTitle}>Services</Text>
            <Text style={styles.cardDesc}>View all maintenance tasks</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('HomeHealthReport')}>
            <View style={[styles.iconWrap, { backgroundColor: '#F3F9EE' }]}>
              <Text style={styles.cardIcon}>🔧</Text>
            </View>
            <Text style={styles.cardTitle}>Home Health</Text>
            <Text style={styles.cardDesc}>Quarterly home reports</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cardsRow}>
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ScanInterior')}>
            <View style={[styles.iconWrap, { backgroundColor: '#FFF5EA' }]}>
              <Text style={styles.cardIcon}>🛒</Text>
            </View>
            <Text style={styles.cardTitle}>Scan Interior</Text>
            <Text style={styles.cardDesc}>Design suggestions</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Support')}>
            <View style={[styles.iconWrap, { backgroundColor: '#F2F0FF' }]}>
              <Text style={styles.cardIcon}>📦</Text>
            </View>
            <Text style={styles.cardTitle}>24/7 Support</Text>
            <Text style={styles.cardDesc}>Get help anytime</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.banner}>
          <View style={styles.bannerBadge}>
            <Text style={styles.bannerBadgeText}>NEW</Text>
          </View>
          <Text style={styles.bannerTitle}>Home-Buddy Plus</Text>
          <Text style={styles.bannerSubtitle}>Priority support, exclusive deals and more</Text>
          <TouchableOpacity style={styles.bannerCta}>
            <Text style={styles.bannerCtaText}>Upgrade now</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.primaryCta} onPress={handleExploreServices}>
          <Text style={styles.primaryCtaText}>Explore services</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    backgroundColor: colors.primary,
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 26,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    fontWeight: '800',
    fontSize: 18,
    color: colors.primary,
  },
  welcome: {
    fontSize: 24,
    fontWeight: '800',
    color: colors.white,
    marginBottom: 2,
  },
  tagline: {
    color: colors.white,
    opacity: 0.9,
  },
  headerTextWrap: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 22,
  },
  headerLogoutBtn: {
    backgroundColor: colors.white,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
  },
  headerLogoutText: {
    color: colors.primary,
    fontWeight: '700',
  },
  sectionTitle: {
    color: colors.textDark,
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 14,
  },
  quickActions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 20,
  },
  actionChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 999,
    paddingVertical: 10,
    paddingHorizontal: 14,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },
  actionChipIcon: {
    fontSize: 14,
    marginRight: 6,
  },
  actionChipText: {
    color: colors.textDark,
    fontWeight: '700',
  },
  cardsRow: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 16,
  },
  card: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 18,
    padding: 18,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
  },
  cardIcon: {
    fontSize: 30,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: '800',
    color: colors.textDark,
    marginBottom: 6,
  },
  cardDesc: {
    color: colors.textLight,
    fontSize: 13,
  },
  banner: {
    backgroundColor: colors.primary,
    borderRadius: 20,
    padding: 20,
    marginTop: 4,
    marginBottom: 16,
    overflow: 'hidden',
  },
  bannerBadge: {
    alignSelf: 'flex-start',
    backgroundColor: colors.accent,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
    marginBottom: 10,
  },
  bannerBadgeText: {
    color: colors.textDark,
    fontWeight: '800',
    fontSize: 12,
  },
  bannerTitle: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 4,
  },
  bannerSubtitle: {
    color: colors.white,
    opacity: 0.9,
    marginBottom: 12,
  },
  bannerCta: {
    alignSelf: 'flex-start',
    backgroundColor: colors.white,
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 10,
  },
  bannerCtaText: {
    color: colors.primary,
    fontWeight: '800',
  },
  primaryCta: {
    backgroundColor: colors.accent,
    paddingVertical: 15,
    borderRadius: 14,
    alignItems: 'center',
    marginTop: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  primaryCtaText: {
    color: colors.textDark,
    fontWeight: '800',
    fontSize: 16,
  },
  logoutBtn: {
    backgroundColor: colors.error,
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 14,
  },
  logoutText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
});
