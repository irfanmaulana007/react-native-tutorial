import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useCallback, useMemo } from 'react';
import {
  Dimensions,
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { router } from 'expo-router';
import AvatarPlaceholder from '~/app/avatar-placeholder';
import GameCard from '~/components/GameCard';
import { GAMES } from '~/constants/MockData';

// Sample recently played games data
const RECENTLY_PLAYED_GAMES = [...GAMES].sort(() => Math.random() - 0.5).slice(0, 4);

export default function ProfileHubScreen() {
  const { width } = Dimensions.get('window');

  // Navigate to settings page
  const navigateToSettings = useCallback(() => {
    router.push('/settings');
  }, []);

  // Calculate number of columns and item width based on screen size
  const numColumns = 2;
  const gap = 16;
  const padding = 16;
  const itemWidth = useMemo(() => {
    return (width - padding * 2 - gap * (numColumns - 1)) / numColumns;
  }, [width]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />

      <ScrollView style={styles.scrollView}>
        {/* Profile header */}
        <View style={styles.profileHeaderContainer}>
          <View style={styles.profileLeftSection}>
            <AvatarPlaceholder />
            <View style={styles.profileInfo}>
              <Text style={styles.userName}>John Doe</Text>
              <Text style={styles.userId}>ID: 12345678</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.settingsButton} onPress={navigateToSettings}>
            <FontAwesome name="gear" size={22} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        {/* Recently played section */}
        <View style={styles.recentlyPlayedContainer}>
          <Text style={styles.sectionTitle}>Recently Played</Text>

          <FlatList
            data={RECENTLY_PLAYED_GAMES}
            renderItem={({ item }) => <GameCard game={item} width={itemWidth} />}
            keyExtractor={item => item.id}
            numColumns={numColumns}
            columnWrapperStyle={{ gap }}
            contentContainerStyle={{ gap }}
            scrollEnabled={false}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000000',
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#000000',
  },
  settingsButton: {
    padding: 8,
  },
  profileHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  profileLeftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#333333',
  },
  profileInfo: {
    marginLeft: 16,
  },
  userName: {
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 4,
  },
  userId: {
    fontSize: 10,
    color: '#F5F5F5',
  },
  recentlyPlayedContainer: {
    backgroundColor: '#121212',
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 16,
  },
});
