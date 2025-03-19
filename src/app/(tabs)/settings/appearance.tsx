import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { colors } from "@/src/styles/colors";
import { globalStyles } from "@/src/styles/globalStyles";

export default function AppearanceScreen() {
  const [theme, setTheme] = useState("light");
  const router = useRouter();

  return (
    <View style={globalStyles.container}>
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
  title: {
    fontSize: 18,
    marginBottom: 20,
    color: colors.text,
  },
  option: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  selected: {
    backgroundColor: colors.border
  },
  optionText: {
    fontSize: 18,
    color: colors.text
  },
  saveButton: {
    marginTop: 20,
    backgroundColor: colors.secondary,
    padding: 15,
    borderRadius: 5
  },
  saveText: {
    color: colors.text,
    textAlign: "center",
    fontSize: 18
  },
});
