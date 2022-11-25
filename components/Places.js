import { View, StyleSheet } from "react-native";
import React from "react";
import { Label } from "./CustomText";
import { PlacesButton } from "./PlacesButton";
import { mainStyle } from "../MainStyle";

export function Places() {
  return (
    <View style={{ ...mainStyle.innerContainer, flex: 2 }}>
      <Label text="Rooms" type="header" />
      <View style={styles.buttonContainer}>
        <PlacesButton
          name="Living Room"
          source={require("../assets/living-room.png")}
        />
        <PlacesButton name="Bedroom" source={require("../assets/bed.png")} />
        <PlacesButton
          name="Kitchen"
          source={require("../assets/kitchen.png")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
