import { View, Switch, StyleSheet } from "react-native";
import React, { useState } from "react";
import { colors } from "../MainStyle";
import { Label } from "./CustomText";

export function Device({ name, changeTotal }) {
  const [isActive, setActive] = useState(false);

  const toggleActive = () => {
    isActive ? changeTotal(-1) : changeTotal(1);
    setActive(!isActive);
  };

  return (
    <View style={styles.container}>
      <View
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <View
          style={{
            ...styles.indicator,
            backgroundColor: isActive ? "#8fee8f" : "#ff6f6f",
          }}
        ></View>
        <Label text={name} />
      </View>
      <Switch
        trackColor={colors.bg}
        thumbColor={isActive ? colors.buttonBg : colors.text}
        ios_backgroundColor={colors.bgAlt}
        onValueChange={toggleActive}
        value={isActive}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  indicator: {
    width: 15,
    height: 15,
    borderRadius: 15,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
    width: "100%",
    padding: 20,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: colors.bgAlt,
  },
});
