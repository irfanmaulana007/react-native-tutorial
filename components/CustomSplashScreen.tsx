import React, { useEffect } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import { useColorScheme } from '~/hooks/useColorScheme';

interface CustomSplashScreenProps {
  onAnimationComplete?: () => void;
}

export function CustomSplashScreen({ onAnimationComplete }: CustomSplashScreenProps) {
  const colorScheme = useColorScheme();
  const opacity = useSharedValue(0);
  const scale = useSharedValue(0.8);
  const textOpacity = useSharedValue(0);

  // Animation sequence
  useEffect(() => {
    // Logo animation
    opacity.value = withTiming(1, { duration: 800, easing: Easing.out(Easing.ease) });

    scale.value = withSequence(
      withTiming(1.1, { duration: 800, easing: Easing.out(Easing.ease) }),
      withTiming(1, { duration: 300, easing: Easing.inOut(Easing.ease) }),
    );

    // Text animation
    textOpacity.value = withDelay(
      400,
      withTiming(1, { duration: 800, easing: Easing.out(Easing.ease) }),
    );

    // Set a timeout to ensure the animation completes and transitions to the main app
    const timer = setTimeout(() => {
      if (onAnimationComplete) {
        onAnimationComplete();
      }
    }, 2000); // 2 seconds total for the animation sequence

    return () => clearTimeout(timer);
  }, [opacity, scale, textOpacity, onAnimationComplete]);

  const logoAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [{ scale: scale.value }],
    };
  });

  const textAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: textOpacity.value,
    };
  });

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: colorScheme === 'dark' ? '#121212' : '#121212' },
      ]}>
      <Animated.View style={logoAnimatedStyle}>
        <Image
          source={require('../assets/images/logo.webp')}
          style={styles.logo}
          resizeMode="contain"
        />
      </Animated.View>
      <Animated.Text
        style={[
          styles.title,
          textAnimatedStyle,
          { color: colorScheme === 'dark' ? '#FFFFFF' : '#FFFFFF' },
        ]}>
        Noctua Games
      </Animated.Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    fontFamily: 'SpaceMono',
  },
});
