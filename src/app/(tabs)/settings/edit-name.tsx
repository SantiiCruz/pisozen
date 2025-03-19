import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { colors } from "@/src/styles/colors";
import { globalStyles } from "@/src/styles/globalStyles";


export default function EditNameScreen() {
  const [name, setName] = useState("Peter Parker");
  const router = useRouter();

  return (
    <View style={globalStyles.container}>
      <Text style={styles.label}>Ingresa tu nuevo nombre:</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />
      <TouchableOpacity style={styles.saveButton} onPress={() => router.back()} >
        <Text style={styles.saveText}>Guardar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 18,
    marginBottom: 20,
    color: colors.text,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: colors.border,
    marginBottom: 10,
    color: colors.text,
  },
  saveButton: {
    marginTop: 10,
    backgroundColor: colors.secondary,
    padding: 10,
    borderRadius: 5
  },
  saveText: {
    color: colors.text,
    textAlign: "center",
    fontSize: 18
  },
});