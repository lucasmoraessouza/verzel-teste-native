import {
  Image,
  StatusBar,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useEffect, useState } from "react";
import { Car } from "../../components/Car";
import { styles } from "./styles";
import { api } from "../../services/api";
import { CarDTO } from "../../dtos/CarDTO";
import { useNavigation } from "@react-navigation/native";

type Nav = {
  navigate: (value: string) => void;
};

export function Home() {
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);
  const { navigate } = useNavigation<Nav>();

  useEffect(() => {
    async function fetchCars() {
      try {
        const res = await api.get("/cars");
        setCars(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchCars();
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <View style={styles.header}>
        <Image
          source={require("../../assets/verzel-squareLogo-1664239370313.png")}
          style={styles.image}
        />
      </View>
      <FlatList<CarDTO>
        data={cars}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Car data={item} />}
        style={styles.content}
        showsVerticalScrollIndicator={false}
      />
      <TouchableOpacity
        style={styles.addMore}
        onPress={() => navigate("Login")}
      >
        <Image source={require("../../assets/car-plus.png")} />
      </TouchableOpacity>
    </View>
  );
}
