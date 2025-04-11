import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import './global.css'
import React from 'react';

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'PlusJakartaSnas-Bold': require('../assets/fonts/PlusJakartaSans-Bold.ttf'),
    'PlusJakartaSnas-Medium': require('../assets/fonts/PlusJakartaSans-Medium.ttf'),
    'PlusJakartaSnas-SemiBold': require('../assets/fonts/PlusJakartaSans-SemiBold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name='(onboarding)' options={{ headerShown: false }} />
      <Stack.Screen name='(auth)' options={{ headerShown: false }} />
      <Stack.Screen name='(root)' options={{ headerShown: false }} />
    </Stack>
  );
}
