import React from "react";
import { Image, Text, View } from "react-native";
import { styles } from "./styles";

interface CarData {
  brand: string;
  name: string;
  rent: {
    period: string;
    price: number;
  };
  thumbnail: string;
}

interface Props {
  data: CarData;
}

export function Car({ data }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.details}>
        <Text style={styles.brand}>{data.brand}</Text>
        <Text style={styles.name}>{data.name}</Text>

        <View style={styles.about}>
          <View style={styles.rent}>
            <Text style={styles.price}>{`R$ ${data.rent.price}`}</Text>
          </View>
        </View>
      </View>

      <Image
        source={{ uri: data.thumbnail }}
        resizeMode="contain"
        style={styles.carImage}
      />
    </View>
  );
}
