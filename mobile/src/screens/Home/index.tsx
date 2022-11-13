import {
  Image,
  StatusBar,
  View,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  Text,
} from "react-native";
import { useEffect, useState } from "react";
import { showToast } from "../../components/Toast";
import { Car } from "../../components/Car";
import { styles } from "./styles";
import { api } from "../../services/api";
import { CarDTO } from "../../dtos/CarDTO";
import { useNavigation } from "@react-navigation/native";
import {
  Swipeable,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import { ButtonAction } from "../../components/ButtonAction";
import { useIsFocused } from "@react-navigation/native";
import { useAuth, SignedProps } from "../../context/auth";
type Nav = {
  navigate: (value: string, data?: any) => void;
};

export function Home() {
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);
  const { signed, setSigned } = useAuth() as SignedProps;
  const navigation = useNavigation<Nav>();
  const isFocused = useIsFocused();

  async function fetchCars() {
    try {
      setLoading(true);
      const res = await api.get("/cars");
      setCars(res.data.cars);
    } catch (err: any) {
      showToast({
        type: "error",
        title: "Error!",
        text: err?.data?.message,
      });
    } finally {
      setLoading(false);
    }
  }

  function rightActions(id: string) {
    return (
      <ButtonAction
        text="Excluir"
        disabled={!signed}
        isDelete={true}
        onPress={() => deleteCar(id)}
      />
    );
  }

  function leftActions(item: CarDTO) {
    return (
      <ButtonAction
        text="Editar"
        disabled={!signed}
        isDelete={false}
        onPress={() => navigation.navigate("EditCar", { item })}
      />
    );
  }

  async function deleteCar(id: string) {
    try {
      const res = await api.delete(`/car/${id}`);
      if (res.data.error === false) {
        fetchCars();
      }
    } catch (err: any) {
      setLoading(false);
      showToast({
        type: "error",
        title: "Error!",
        text: err?.data?.message,
      });
    }
  }

  async function verifyToken() {
    if (signed) {
      navigation.navigate("CreateCar");
    } else {
      navigation.navigate("Login");
    }
  }

  useEffect(() => {
    if (isFocused) {
      fetchCars();
    }
  }, [isFocused]);

  return (
    <>
      <View style={styles.container}>
        {loading === true ? (
          <View style={styles.containerLoading}>
            <ActivityIndicator color="#000" />
          </View>
        ) : (
          <>
            <StatusBar
              barStyle="dark-content"
              backgroundColor="transparent"
              translucent
            />

            <FlatList<CarDTO>
              data={cars}
              keyExtractor={(item) => item._id}
              contentContainerStyle={{ paddingVertical: 30 }}
              ListEmptyComponent={() => (
                <>
                  <Text style={styles.listEmptyText}>
                    There is no car registered.
                  </Text>
                  {!signed && (
                    <Text style={styles.listEmptyText}>
                      Log in to register a car!
                    </Text>
                  )}
                </>
              )}
              renderItem={({ item }) => (
                <GestureHandlerRootView>
                  <Swipeable
                    renderRightActions={() => rightActions(item._id)}
                    renderLeftActions={() => leftActions(item)}
                  >
                    <Car data={item} />
                  </Swipeable>
                </GestureHandlerRootView>
              )}
              style={styles.content}
              showsVerticalScrollIndicator={false}
            />
            <TouchableOpacity style={styles.addMore} onPress={verifyToken}>
              <Image source={require("../../assets/car-plus.png")} />
            </TouchableOpacity>
          </>
        )}
      </View>
    </>
  );
}
