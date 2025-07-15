import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Image } from 'expo-image';
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

// Define game data interface
interface Game {
  id: string;
  name: string;
  genre: string[];
  thumbnail: any; // Using require() for local images
}

// Sample recently played games data
const RECENTLY_PLAYED_GAMES: Game[] = [
  {
    id: '2',
    name: 'Hide & Seek: Cat Escape!',
    genre: ['Action', 'Arcade'],
    thumbnail: require('~/assets/images/games/hide-and-seek-thumbnail.webp'),
  },
  {
    id: '1',
    name: 'Hamster Jump: Cake Tower',
    genre: ['Casual', 'Arcade'],
    thumbnail: require('~/assets/images/games/hamster-jump-thumbnail.webp'),
  },
  {
    id: '7',
    name: 'Dream Home',
    genre: ['Action', 'Arcade'],
    thumbnail: require('~/assets/images/games/no-thumbnail.webp'),
  },
  {
    id: '8',
    name: 'Squiddy Game',
    genre: ['Action', 'Arcade'],
    thumbnail: require('~/assets/images/games/no-thumbnail.webp'),
  },
];

// Game card component
const GameCard = ({ game, width }: { game: Game; width: number }) => {
  return (
    <View style={[styles.gameCard, { width }]}>
      <Image source={game.thumbnail} style={styles.thumbnail} contentFit="cover" />
      <View style={styles.gameInfo}>
        <Text style={styles.gameName}>{game.name}</Text>
        <Text style={styles.gameGenre}>{game.genre.join(' · ')}</Text>
      </View>
    </View>
  );
};

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
  gameCard: {
    flex: 1,
    backgroundColor: '#121212',
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  thumbnail: {
    width: '100%',
    aspectRatio: 2 / 3,
    backgroundColor: '#333333',
  },
  gameInfo: {
    padding: 12,
  },
  gameName: {
    fontSize: 14,
    fontWeight: 'medium',
    color: '#F5F5F5',
    marginBottom: 4,
  },
  gameGenre: {
    fontSize: 10,
    color: '#7C7E81',
  },
});
