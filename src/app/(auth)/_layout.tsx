import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function Layout() {
  return (
    <>
      <StatusBar style='dark' />
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false}} />
        <Stack.Screen name="login" options={{ headerShown: false}} />
        <Stack.Screen name="register" options={{ headerShown: false}} />
        <Stack.Screen name="userEdit" options={{ headerShown: false}} />
      </Stack>
    </>
  );
}
