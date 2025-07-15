import { Image } from 'expo-image';
import { router } from 'expo-router';
import { useCallback } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Game } from '~/types/models/game';

interface GameCardProps {
  game: Game;
  width: number;
}
export default function GameCard({ game, width }: GameCardProps) {
  const handlePress = useCallback(() => {
    // Navigate to game player with the H5 game URL
    router.push(`/games/${game.id}`);
  }, [game.id]);

  return (
    <TouchableOpacity
      style={[styles.gameCard, { width }]}
      onPress={handlePress}
      activeOpacity={0.7}>
      <Image source={game.thumbnailUrl} style={styles.thumbnail} contentFit="cover" />
      <View style={styles.gameInfo}>
        <Text style={styles.gameName}>{game.name}</Text>
        <Text style={styles.gameGenre}>{game.genre.join(' · ')}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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
