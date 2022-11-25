import { View } from "react-native";
import React, { useState } from "react";
import { mainStyle } from "../MainStyle";
import { Device } from "./Device";
import { Label } from "./CustomText";

export default function DeviceList() {
  const [totalActive, setTotalActive] = useState(0);

  const changeTotal = (value) => {
    setTotalActive(totalActive + value);
  };

  const devices = ["Living Room Lamp", "Wifi Router", "Television"];

  return (
    <View
      style={{
        ...mainStyle.innerContainer,
        flex: 5,
      }}
    >
      <Label text="Devices" type="header" />
      {devices.map((name, key) => {
        return <Device name={name} key={key} changeTotal={changeTotal} />;
      })}
      <Label text={`Currently active devices: ${totalActive}`} />
    </View>
  );
}
