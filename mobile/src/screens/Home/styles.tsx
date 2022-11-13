import { StyleSheet } from "react-native";
import { theme } from "../../styles/theme";

// export const CarList = styled(FlatList).attrs({
//   contentContainerStyle: {
//     padding: 24,
//   },
//   showsVerticalScrollIndicator: false,
// })`
//   font-size: 15px;
//   font-family: Inter_400Regular;
//   color: #7a7a80;
// `;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  containerLoading: {
    flex: 1,
    width: "100%",
    height: 250,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  header: {
    width: "100%",
    height: 90,
    backgroundColor: theme.colors.white,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 32,
  },
  image: {
    marginVertical: 10,
    width: 110,
    height: 100,
  },
  totalCars: {
    fontSize: 15,
    fontFamily: "Inter_400Regular",
    color: theme.colors.label,
  },
  content: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  listEmptyText: {
    color: "#000",
    fontSize: 14,
    textAlign: "center",
  },
  addMore: {
    width: 60,
    height: 60,
    backgroundColor: theme.colors.secondary,
    position: "absolute",
    borderRadius: 50,
    bottom: 20,
    right: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});
