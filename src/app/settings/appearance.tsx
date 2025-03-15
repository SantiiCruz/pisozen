import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function AppearanceScreen() {
  const [theme, setTheme] = useState("light");
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecciona un tema:</Text>
      <TouchableOpacity style={[styles.option, theme === "light" && styles.selected]} onPress={() => setTheme("light")}>
        <Text style={styles.optionText}>Claro</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.option, theme === "dark" && styles.selected]} onPress={() => setTheme("dark")}>
        <Text style={styles.optionText}>Oscuro</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.saveButton} onPress={() => router.back()}>
        <Text style={styles.saveText}>Guardar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 20 },
  option: { padding: 15, borderBottomWidth: 1, borderBottomColor: "#ddd" },
  selected: { backgroundColor: "#eee" },
  optionText: { fontSize: 18 },
  saveButton: { marginTop: 20, backgroundColor: "#007AFF", padding: 15, borderRadius: 5 },
  saveText: { color: "white", textAlign: "center", fontSize: 18 },
});
