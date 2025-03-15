import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function EditNameScreen() {
  const [name, setName] = useState("Peter Parker");
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Ingresa tu nuevo nombre:</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />
      <Button title="Guardar" onPress={() => router.back()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  label: { fontSize: 18, marginBottom: 10 },
  input: { borderWidth: 1, padding: 10, borderRadius: 5, marginBottom: 20 },
});