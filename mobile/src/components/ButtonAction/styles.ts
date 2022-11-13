import { StyleSheet } from "react-native";
import { theme } from "../../styles/theme";

export const styles = StyleSheet.create({
  button: {
    height: 125,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  buttonText: {
    color: theme.colors.white,
    fontSize: 20,
    fontFamily: theme.fonts.medium,
  },
});
