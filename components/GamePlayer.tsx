import { Image } from 'expo-image';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import WebView from 'react-native-webview';

interface GamePlayerProps {
  playUrl: string;
  thumbnail: string;
}
export default function GamePlayer({ playUrl, thumbnail }: GamePlayerProps) {
  const renderLoading = () => (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color="#FFFFFF" />
      <Image source={thumbnail} style={styles.thumbnailOverlay} contentFit="cover" />
      <Image source={thumbnail} style={styles.thumbnail} contentFit="contain" />
    </View>
  );

  // Inject JavaScript to disable zooming and scrolling
  const injectedJavaScript = `
    // Disable zooming
    const meta = document.createElement('meta');
    meta.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0');
    meta.setAttribute('name', 'viewport');
    document.getElementsByTagName('head')[0].appendChild(meta);
    
    // Disable scrolling
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
    document.body.style.height = '100%';
    
    true;
  `;

  return (
    <WebView
      source={{ uri: playUrl }}
      style={styles.webview}
      javaScriptEnabled={true}
      domStorageEnabled={true}
      startInLoadingState={true}
      allowsFullscreenVideo={true}
      renderLoading={renderLoading}
      injectedJavaScript={injectedJavaScript}
      scalesPageToFit={false}
    />
  );
}

const styles = StyleSheet.create({
  webview: {
    flex: 1,
    backgroundColor: '#000000',
  },
  loadingContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
  },
  thumbnailOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.2,
    filter: 'blur(2px)',
  },
  thumbnail: {
    width: '100%',
    aspectRatio: 2 / 3,
    backgroundColor: '#333333',
  },
});
