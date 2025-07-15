import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '~/components/HapticTab';
import TabBarBackground from '~/components/ui/TabBarBackground';
import { Colors } from '~/constants/Colors';
import { useColorScheme } from '~/hooks/useColorScheme';

import Icon from 'react-native-vector-icons/FontAwesome';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].background,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            backgroundColor: '#000',
          },
          default: {
            borderTopWidth: 0,
            backgroundColor: '#1F2327',
          },
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Play Now',
          tabBarIcon: ({ color }) => <Icon size={28} name="gamepad" color={color} />,
        }}
      />
      <Tabs.Screen
        name="hub"
        options={{
          title: 'Hub',
          tabBarIcon: ({ color }) => <Icon size={28} name="user-circle" color={color} />,
        }}
      />
    </Tabs>
  );
}
