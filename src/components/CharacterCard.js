import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { theme } from "../styles/theme";

export default function CharacterCard({ item }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />

      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.text}>Status: {item.status}</Text>
        <Text style={styles.text}>Espécie: {item.species}</Text>
        <Text style={styles.id}>ID #{item.id}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.cardBg,
    borderRadius: 14,
    marginBottom: 18,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#1f1f1f",
  },
  image: {
    width: "100%",
    height: 200,
  },
  info: {
    padding: 14,
  },
  name: {
    color: theme.colors.rickBlue,
    fontSize: 20,
    fontWeight: "700",
  },
  text: {
    color: theme.colors.textWhite,
    marginTop: 4,
  },
  id: {
    color: theme.colors.toxicGreen,
    marginTop: 6,
  },
});
