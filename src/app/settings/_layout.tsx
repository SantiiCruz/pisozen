import { Stack } from "expo-router";

export default function OptionsLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Configuración" }} />
      <Stack.Screen name="edit-name" options={{ title: "Editar Nombre" }} />
      <Stack.Screen name="language" options={{ title: "Idioma" }} />
      <Stack.Screen name="appearance" options={{ title: "Apariencia" }} />
    </Stack>
  );
}
