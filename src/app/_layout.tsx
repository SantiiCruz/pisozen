import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <BottomSheetModalProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false, headerShadowVisible: false, }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </BottomSheetModalProvider>
  );
}
