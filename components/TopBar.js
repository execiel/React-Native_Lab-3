import { StyleSheet, View, Image } from "react-native";
import React from "react";
import { colors, mainStyle } from "../MainStyle";
import { Label } from "./CustomText";

export function TopBar() {
  return (
    <View
      style={{
        ...mainStyle.innerContainer,
        flex: 1,
        paddingTop: 30,
      }}
    >
      <View style={styles.barContainer}>
        <Image
          source={require("../assets/house.png")}
          style={{ width: 50, height: 50 }}
        />
        <Label
          text="SmartHome"
          type="header"
          style={{ marginLeft: 20, color: colors.buttonBg }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  barContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});
