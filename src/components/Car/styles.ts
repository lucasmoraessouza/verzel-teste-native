import { StyleSheet } from "react-native";
import { theme } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 125,
    backgroundColor: theme.colors.primary,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 14,
    paddingVertical: 14,
    marginBottom: 16,
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
    width: 180,
    height: 130,
  },
});
