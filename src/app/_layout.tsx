import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import {Lexend_400Regular, Lexend_500Medium, Lexend_600SemiBold, Lexend_700Bold, useFonts} from '@expo-google-fonts/lexend';
import { StatusBar } from 'expo-status-bar';
import { AuthProvider } from '../contexts/auth/authContext';
import { AnimalProvider } from '../contexts/animal/animalContext';
import CombinedProviders from '../contexts/combinedProviders';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '/onboarding/onboarding',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  let [fontsLoaded, fontError] = useFonts({
    Lexend_400Regular,
    Lexend_500Medium,
    Lexend_600SemiBold,
    Lexend_700Bold
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (fontError) throw fontError;
  }, [fontError]);

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <CombinedProviders>
      <StatusBar style='dark' />
      <Stack>
        <Stack.Screen name="onboarding/index" options={{ headerShown: false}} />
        <Stack.Screen name="(auth)" options={{ headerShown: false}} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="petDetails/[id]" options={{ headerShown: false }} />
        <Stack.Screen name="chat/[id]" options={{ headerShown: false }} />
        <Stack.Screen name="addPet/addPetForm" options={{ headerShown: false }} />
      </Stack>
    </CombinedProviders>
  );
}
