import { StyleSheet } from "react-native";
import { theme } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    height: 125,
    width: "100%",
    backgroundColor: theme.colors.primary,
    marginBottom: 16,
    borderRadius: 10,
  },
  image: {
    height: 125,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 14,
    paddingVertical: 14,
    borderRadius: 10,
  },
  details: {
    marginLeft: 10,
  },
  brand: {
    color: theme.colors.white,
    fontSize: 15,
    textTransform: "uppercase",
  },
  name: {
    color: theme.colors.white,
    fontSize: 30,
  },
  about: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
  },
  rent: {
    marginRight: 24,
  },
  period: {
    color: theme.colors.white,
    fontSize: 15,
    textTransform: "uppercase",
  },
  price: {
    color: theme.colors.red,
    fontSize: 25,
  },
  type: {
    marginTop: 16,
  },
  carImage: {
    width: "100%",
    height: "100%",
    maxWidth: 180,
    maxHeight: 130,
  },
});
