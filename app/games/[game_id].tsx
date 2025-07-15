import { Stack, router, useLocalSearchParams } from 'expo-router';
import { useCallback, useMemo } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import GamePlayer from '~/components/GamePlayer';
import { GAMES } from '~/constants/MockData';

export default function GameDetailScreen() {
  const { game_id } = useLocalSearchParams();

  const game = useMemo(() => {
    const findGame = GAMES.find(game => game.id === game_id);
    if (!findGame) return null;
    const decodedPlayUrl = decodeURIComponent(findGame.playUrl);
    return {
      ...findGame,
      playUrl: decodedPlayUrl,
    };
  }, [game_id]);

  const handleGoBack = useCallback(() => {
    router.back();
  }, []);

  if (!game) return null;
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#000000" />

        {/* Game WebView */}
        <GamePlayer playUrl={game.playUrl} thumbnail={game.thumbnailUrl} />

        {/* Floating back button */}
        <TouchableOpacity style={styles.backButton} onPress={handleGoBack} activeOpacity={0.8}>
          <FontAwesome name="arrow-left" size={14} color="#FFFFFF" />
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 0,
    width: 32,
    height: 32,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
});
