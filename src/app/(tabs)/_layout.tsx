import React, { useRef, useState, useCallback } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import HomeBottomSheet from '@/src/components/HomeBottomSheet';
import { colors } from '@/src/styles/colors';

export default function TabLayout() {
  const sheetRef = useRef(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleSheetChanges = useCallback((index: any) => {
    sheetRef.current?.snapToIndex(index);
    setIsSheetOpen(true);
  }, []);

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: colors.secondary,
          tabBarInactiveTintColor: colors.border,
          headerStyle: { backgroundColor: '#1e1e1e' },
          headerShadowVisible: false,
          headerTintColor: '#fff',
          tabBarStyle: { backgroundColor: colors.background },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color, focused }) => (
              <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
            ),
            headerTitle: () => (
              <TouchableOpacity onPress={() => handleSheetChanges(0)}>
                <Text style={{ fontSize: 20, color: '#fff' }}>Home</Text>
              </TouchableOpacity>
            ),
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name="history"
          options={{
            title: 'Historial',
            tabBarIcon: ({ color, focused }) => (
              <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24} />
            ),
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: 'Ajustes',
            tabBarIcon: ({ color, focused }) => (
              <Ionicons name={focused ? 'settings-sharp' : 'settings-outline'} color={color} size={24} />
            ),
            headerShown: false,
          }}
        />
      </Tabs>

      {/* Bottom Sheet solo para Home */}
      <HomeBottomSheet sheetRef={sheetRef} isSheetOpen={isSheetOpen} setIsSheetOpen={setIsSheetOpen} />
    </>
  );
}
