import { useState } from "react";
import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { colors } from "@/src/styles/colors";
import { globalStyles } from "@/src/styles/globalStyles";

const languages = [
  { code: "es", name: "Español" },
  { code: "en", name: "English" },
  { code: "fr", name: "Français" },
];

export default function LanguageScreen() {
  const [selectedLang, setSelectedLang] = useState("es");
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecciona un idioma:</Text>
      {languages.map((lang) => (
        <TouchableOpacity
          key={lang.code}
          style={[styles.option, selectedLang === lang.code && styles.selected]}
          onPress={() => setSelectedLang(lang.code)}
        >
          <Text style={styles.optionText}>{lang.name}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity style={styles.saveButton} onPress={() => router.back()}>
        <Text style={styles.saveText}>Guardar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: colors.background },
  title: {
    fontSize: 18,
    marginBottom: 20,
    color: colors.text
  },
  option: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    color: colors.text
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
