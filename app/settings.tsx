import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Stack, router } from 'expo-router';
import { useCallback } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Settings menu item interface
interface MenuItem {
  id: string;
  title: string;
  value?: string;
  onPress: () => void;
}

// Settings menu item component
const SettingsMenuItem = ({ item }: { item: MenuItem }) => {
  return (
    <TouchableOpacity style={styles.menuItem} onPress={item.onPress}>
      <Text style={styles.menuItemTitle}>{item.title}</Text>
      {item.value ? (
        <View style={styles.menuItemValueContainer}>
          <Text style={styles.menuItemValue}>{item.value}</Text>
          <FontAwesome name="chevron-right" size={14} color="#7C7E81" />
        </View>
      ) : (
        <FontAwesome name="chevron-right" size={14} color="#7C7E81" />
      )}
    </TouchableOpacity>
  );
};

export default function SettingsScreen() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <SettingsContent />
    </>
  );
}

function SettingsContent() {
  // Go back to previous screen
  const goBack = useCallback(() => {
    router.back();
  }, []);
  
  // Settings menu items
  const menuItems: MenuItem[] = [
    { id: 'country', title: 'Country', value: 'Indonesia', onPress: () => {} },
    { id: 'language', title: 'Language', value: 'English', onPress: () => {} },
    { id: 'customer-service', title: 'Customer Service', onPress: () => {} },
    { id: 'reset-account', title: 'Reset Account', onPress: () => {} },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />
      
      {/* Header with back button */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={goBack}>
          <FontAwesome name="arrow-left" size={20} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Account Settings</Text>
        <View style={{ width: 40 }} />
      </View>
      
      {/* Settings items */}
      <View style={styles.settingsContainer}>
        {menuItems.map(item => (
          <SettingsMenuItem key={item.id} item={item} />
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000000',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#1F1F1F',
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  settingsContainer: {
    flex: 1,
    padding: 16,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#333333',
  },
  menuItemTitle: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  menuItemValueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  menuItemValue: {
    fontSize: 14,
    color: '#A1A1AA',
  },
});
