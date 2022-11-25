import { StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import React from "react";
import { colors } from "../MainStyle";

export function PlacesButton({ name, source }) {
  return (
    <TouchableOpacity style={styles.button}>
      <Image source={source} style={styles.image} />
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.buttonBg,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    width: 95,
    height: 95,
    padding: 10,
    borderRadius: 10,
  },
  image: {
    width: 70,
    height: 70,
  },
  text: {
    color: colors.buttonFg,
    fontSize: 12,
    includeFontPadding: false,
  },
});
