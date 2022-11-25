import { StyleSheet } from "react-native";

const colors = {
  bg: "#263238",
  bgAlt: "#262938",
  fg: "#fafafa",
  buttonBg: "#86CFFC",
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
    margin: 5,
  },
  header: {
    color: colors.fg,
    fontWeight: "bold",
    fontSize: 22,
    marginTop: 15,
    marginBottom: 15,
  },
  innerContainer: {
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    paddingLeft: 25,
    paddingRight: 25,
  },
});

export { mainStyle, colors };
