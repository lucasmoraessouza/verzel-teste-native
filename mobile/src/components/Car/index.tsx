import React from "react";
import {
  Image,
  ImageBackground,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import { CarDTO } from "../../dtos/CarDTO";
import { ButtonAction } from "../ButtonAction";
import { styles } from "./styles";

interface Props {
  data: CarDTO;
}

export function Car({ data }: Props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/background4.png")}
        resizeMode="cover"
        style={styles.image}
        imageStyle={{ borderRadius: 10 }}
      >
        <View style={styles.details}>
          <Text style={styles.brand}>{data.brand}</Text>
          <Text style={styles.name}>{data.model}</Text>

          <View style={styles.about}>
            <View style={styles.rent}>
              <Text style={styles.price}>
                {data.value.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </Text>
            </View>
          </View>
        </View>

        <Image
          source={
            data.image
              ? {
                  uri: `http://192.168.0.68:3333/files/${data.image}`,
                }
              : require("../../assets/ghost.png")
          }
          resizeMode="cover"
          style={styles.carImage}
        />
      </ImageBackground>
    </View>
  );
}
