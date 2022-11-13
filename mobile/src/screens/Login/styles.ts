import { StyleSheet } from "react-native";
import { theme } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
  },
  containerKeyboard: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  content: {
    height: "55%",
    alignContent: "center",
    alignItems: "center",
  },
  containerImage: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
  logo: {
    width: 260,
    height: 290,
  },
  form: {
    height: "30%",
    justifyContent: "flex-start",
    alignContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  input: {
    width: "100%",
    borderColor: theme.colors.white,
    borderBottomWidth: 1,
    height: 50,
    marginBottom: 12,
    fontSize: 16,
    color: theme.colors.white,
  },
  containerButton: {
    height: "15%",
    paddingHorizontal: 30,
    marginBottom: 30,
  },
  buttonBack: {
    alignItems: "center",
    marginTop: 20,
  },
  textButton: {
    color: theme.colors.white,
    fontSize: 20,
  },
});
