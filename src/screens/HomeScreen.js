import React from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import Header from "../components/Header";
import CharacterCard from "../components/CharacterCard";
import { useCharacters } from "../hooks/useCharacters";
import { theme } from "../styles/theme";

export default function HomeScreen() {
  const { characters, loading, error, search, setSearch, setPage, reload } =
    useCharacters();

  return (
    <View style={styles.container}>
      <Header search={search} setSearch={setSearch} />

      {loading && characters.length === 0 && (
        <ActivityIndicator size="large" color={theme.colors.rickBlue} />
      )}

      {error && (
        <View style={{ alignItems: "center", marginTop: 20 }}>
          <Text style={{ color: "red" }}>{error}</Text>

          <TouchableOpacity style={styles.reloadBtn} onPress={reload}>
            <Text style={styles.reloadText}>Tentar novamente</Text>
          </TouchableOpacity>
        </View>
      )}

      <FlatList
        data={characters}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <CharacterCard item={item} />}
        onEndReached={() => setPage((prev) => prev + 1)}
        onEndReachedThreshold={0.3}
        contentContainerStyle={{ padding: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  reloadBtn: {
    backgroundColor: theme.colors.rickBlue,
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  reloadText: {
    color: "#000",
    fontWeight: "700",
  },
});
