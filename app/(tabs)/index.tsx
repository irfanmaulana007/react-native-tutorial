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
import GameCard from '~/components/GameCard';
import { GAMES } from '~/constants/MockData';

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
          <Image
            source={require('~/assets/images/instant-play.webp')}
            style={styles.headerImage}
            contentFit="contain"
          />
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
});
