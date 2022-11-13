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
    height: "30%",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  containerImage: {
    width: "100%",
    height: "100%",
    maxWidth: 150,
    maxHeight: 150,
    borderRadius: 100,
    backgroundColor: theme.colors.white,
    alignItems: "center",
  },
  logo: {
    width: 270,
    height: 300,
  },
  form: {
    backgroundColor: "#0A0B0F",
    height: "55%",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 30,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    zIndex: -1,
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
    width: "100%",
    height: "15%",
    justifyContent: "flex-start",
    backgroundColor: "#0A0B0F",
    paddingHorizontal: 30,
  },
  avatar: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
  },
  buttonUpload: {
    width: 50,
    height: 50,
    backgroundColor: theme.colors.secondary,
    borderRadius: 25,
    alignSelf: "flex-end",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: -10,
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
