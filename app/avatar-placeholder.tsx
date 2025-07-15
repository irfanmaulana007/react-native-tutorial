import FontAwesome from '@expo/vector-icons/FontAwesome';
import { StyleSheet, View } from 'react-native';

export default function AvatarPlaceholder() {
  return (
    <View style={styles.container}>
      <FontAwesome name="user" size={24} color="#FFFFFF" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 34,
    height: 34,
    borderRadius: 40,
    backgroundColor: '#333333',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
