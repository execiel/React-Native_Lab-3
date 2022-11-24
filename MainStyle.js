import { StyleSheet } from "react-native";

const colors = {
  bg: "#303E40",
  bgAlt: "#242F30",
  fg: "#fafafa",
  buttonBg: "#9BE0CA",
  buttonFg: "#000000",
};

const mainStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: colors.fg,
    fontSize: 16,
  },
  header: {
    color: colors.fg,
    fontWeight: "bold",
    fontSize: 20,
  },
  placesNav: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export { mainStyle, colors };
