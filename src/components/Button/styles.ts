import { StyleSheet } from "react-native";
import { theme } from "../../styles/theme";

export const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.secondary,
    width: "100%",
    height: 55,
    borderRadius: 15,
    paddingVertical: 15,
    marginTop: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: theme.colors.white,
    fontSize: 20,
    fontFamily: theme.fonts.medium,
  },
});
