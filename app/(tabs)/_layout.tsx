import React, { useRef, useMemo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import BottomSheet from '@gorhom/bottom-sheet';

export default function TabLayout() {
  const bottomSheetRef = useRef(null);

  // Bottom Sheet snap points
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  // Function to open the Bottom Sheet
  const openBottomSheet = () => {
    bottomSheetRef.current?.expand();
  };

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: '#ffd33d',
          headerStyle: { backgroundColor: '#25292e' },
          headerShadowVisible: false,
          headerTintColor: '#fff',
          tabBarStyle: { backgroundColor: '#25292e' },
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
              <TouchableOpacity onPress={openBottomSheet}>
                <Text style={{ fontSize: 20, color: '#fff' }}>Home ▼</Text>
              </TouchableOpacity>
            ),
          }}
        />
        <Tabs.Screen
          name="about"
          options={{
            title: 'About',
            tabBarIcon: ({ color, focused }) => (
              <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24} />
            ),
          }}
        />
        <Tabs.Screen
          name="calendar"
          options={{
            title: 'Calendar',
            tabBarIcon: ({ color, focused }) => (
              <Ionicons name={focused ? 'settings-sharp' : 'settings-outline'} color={color} size={24} />
            ),
          }}
        />
      </Tabs>

      {/* Bottom Sheet placed at the root level */}
      <BottomSheet
        ref={bottomSheetRef}
        index={-1} // Initially hidden
        snapPoints={snapPoints}
        enablePanDownToClose={true}
      >
        <View style={{ padding: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Options</Text>
          <TouchableOpacity onPress={() => console.log('Option 1')}>
            <Text style={{ paddingVertical: 10 }}>Option 1</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('Option 2')}>
            <Text style={{ paddingVertical: 10 }}>Option 2</Text>
          </TouchableOpacity>
        </View>
      </BottomSheet>
    </>
  );
}
