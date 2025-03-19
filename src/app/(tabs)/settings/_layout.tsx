import { Stack } from "expo-router";
import { colors } from "@/src/styles/colors";

export default function OptionsLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
        },
        headerTintColor: colors.text,
        headerTitleAlign: "center",
        headerBackTitle: "Atrás", // Texto del botón de regreso
        headerShadowVisible: false,

      }}
    >
      <Stack.Screen name="index" options={{ title: "Configuración", headerShown: false }} />
      <Stack.Screen name="edit-name" options={{ title: "Datos" }} />
      <Stack.Screen name="language" options={{ title: "Idioma" }} />
      <Stack.Screen name="appearance" options={{ title: "Apariencia" }} />
    </Stack>
  );
}
