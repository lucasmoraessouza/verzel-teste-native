import { StyleSheet } from "react-native";
import { theme } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  content: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
  },
  containerImage: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
  },
  logo: {
    width: 250,
    height: 200,
  },
  form: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  input: {
    width: "100%",
    backgroundColor: theme.colors.white,
    color: theme.colors.label,
    borderWidth: 2,
    borderColor: theme.colors.label,
    borderRadius: 5,
    height: 50,
    fontFamily: theme.fonts.regular,
    fontSize: 15,
    paddingHorizontal: 20,
    marginTop: 30,
  },
  containerButton: {
    paddingHorizontal: 30,
    marginBottom: 30,
  },
});
