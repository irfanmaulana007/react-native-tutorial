import { Image } from 'expo-image';
import { useMemo } from 'react';
import {
  Dimensions,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

// Define game data interface
interface Game {
  id: string;
  name: string;
  genre: string[];
  thumbnail: any; // Using require() for local images
}

// Sample game data
const GAMES: Game[] = [
  {
    id: '1',
    name: 'Hamster Jump: Cake Tower',
    genre: ['Casual', 'Arcade'],
    thumbnail: require('~/assets/images/games/hamster-jump-thumbnail.webp'),
  },
  {
    id: '2',
    name: 'Hide & Seek: Cat Escape!',
    genre: ['Action', 'Arcade'],
    thumbnail: require('~/assets/images/games/hide-and-seek-thumbnail.webp'),
  },
  {
    id: '3',
    name: 'Sortify',
    genre: ['Action', 'Arcade'],
    thumbnail: require('~/assets/images/games/no-thumbnail.webp'),
  },
  {
    id: '4',
    name: 'Cisini Stories',
    genre: ['Action', 'Arcade'],
    thumbnail: require('~/assets/images/games/no-thumbnail.webp'),
  },
  {
    id: '5',
    name: 'Citampi Stories',
    genre: ['Action', 'Arcade'],
    thumbnail: require('~/assets/images/games/no-thumbnail.webp'),
  },
  {
    id: '6',
    name: 'Laundry Simulator',
    genre: ['Action', 'Arcade'],
    thumbnail: require('~/assets/images/games/no-thumbnail.webp'),
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

export default function GameBrowsePage() {
  const { width } = Dimensions.get('window');

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
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={require('~/assets/images/instant-play.webp')} style={styles.headerImage} contentFit="contain" />
          <Text style={styles.description}>All for free, no install required.</Text>
        </View>

        <FlatList
          data={GAMES}
          renderItem={({ item }) => <GameCard game={item} width={itemWidth} />}
          keyExtractor={item => item.id}
          numColumns={numColumns}
          columnWrapperStyle={{ gap }}
          contentContainerStyle={{ gap }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000000',
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#000000',
  },
  header: {
    flexDirection: 'column',
    gap: 8,
    paddingBottom: 24,
  },
  headerImage: {
    height: 32,
    width: 130,
  },
  description: {
    fontSize: 14,
    color: '#A1A1AA',
    lineHeight: 20,
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
