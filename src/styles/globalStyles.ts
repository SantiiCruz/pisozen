// src/styles/globalStyles.ts
import { StyleSheet } from "react-native";
import { colors } from "./colors"; // Importamos los colores globales

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 16,
    color: colors.text,
  },
  text: {
    color: colors.text,
    fontSize: 18,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: colors.primary,
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: colors.buttonText,
    fontSize: 16,
    fontWeight: "bold",
  },

  // Estilos para el header
  header: {
    height: 150,
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
  
});
