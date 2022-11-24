import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { mainStyle } from "./MainStyle";
import { PlacesButton } from "./components/PlacesButton";
import { Label } from "./components/CustomText";

export default function App() {
  return (
    <View style={mainStyle.container}>
      <View style="placesNav">
        <Label text="Rooms" type="header" />
        <View style={{ display: "flex", flexDirection: "row" }}>
          <PlacesButton
            name="Living Room"
            source={require("./assets/living-room.png")}
          />
          <PlacesButton name="Bedroom" source={require("./assets/bed.png")} />
          <PlacesButton
            name="Kitchen"
            source={require("./assets/kitchen.png")}
          />
        </View>
      </View>

      <StatusBar style="light" />
    </View>
  );
}
