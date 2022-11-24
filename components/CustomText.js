import { Text } from "react-native";
import React from "react";
import { mainStyle } from "../MainStyle";

export function Label({ text, type, style }) {
  if (type == "header")
    return <Text style={{ ...mainStyle.header, ...style }}>{text}</Text>;
  else return <Text style={{ ...mainStyle.text, ...style }}>{text}</Text>;
}
