import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { mainStyle } from "./MainStyle";
import { TopBar } from "./components/TopBar";
import { Places } from "./components/Places";
import Devices from "./components/DeviceList";

export default function App() {
  return (
    <View style={mainStyle.container}>
      <TopBar />
      <Places />
      <Devices />
      <StatusBar style="light" />
    </View>
  );
}
