import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { theme } from "../styles/theme";

export default function Header({ search, setSearch }) {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Rick and Morty</Text>
      <Text style={styles.subtitle}>Saiba tudo em um só lugar.</Text>

      <TextInput
        style={styles.input}
        placeholder="Buscar personagem..."
        placeholderTextColor={theme.colors.gray}
        value={search}
        onChangeText={setSearch}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 22,
    backgroundColor: theme.colors.background,
  },
  logo: {
    color: theme.colors.rickBlue,
    fontSize: 34,
    fontWeight: "900",
  },
  subtitle: {
    color: theme.colors.textWhite,
    fontSize: 18,
    marginTop: 4,
  },
  input: {
    marginTop: 20,
    backgroundColor: "#141414",
    padding: 14,
    borderRadius: 10,
    color: theme.colors.textWhite,
  },
});
