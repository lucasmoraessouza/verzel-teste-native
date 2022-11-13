import {
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
  Image,
  TouchableOpacity,
  Text,
} from "react-native";
import { styles } from "./styles";
import { Button } from "../Button";
import { theme } from "../../styles/theme";
import { CarDTO } from "../../dtos/CarDTO";
import { MaterialIcons } from "@expo/vector-icons";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import { Camera } from "expo-camera";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

interface PropsType {
  textButton: string;
  onPress: () => void;
  data?: CarDTO;
  setData: (data: any) => void;
}

type Nav = {
  navigate: (value: string) => void;
};

export function FormCar({ textButton, onPress, data, setData }: PropsType) {
  const { navigate } = useNavigation<Nav>();

  async function handlePickerCall() {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);

      if (status !== "granted") {
        alert("Precisamos da sua permissão para alterar sua foto");
        return;
      }
    }

    const image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    if (image.cancelled) return;

    setData({ ...data, preview: image });
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/background.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.containerKeyboard}
        >
          <View style={styles.content}>
            <View style={styles.containerImage}>
              <Image
                style={styles.avatar}
                source={
                  data?.preview
                    ? {
                        uri: `${data.preview?.uri}`,
                      }
                    : data?.image
                    ? {
                        uri: `http://192.168.0.68:3333/files/${data.image}`,
                      }
                    : require("../../assets/ghost.png")
                }
                resizeMode="cover"
              />
              <TouchableOpacity
                style={styles.buttonUpload}
                onPress={handlePickerCall}
              >
                <MaterialIcons name="edit" size={30} color="white" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholderTextColor={theme.colors.label}
              placeholder="Modelo"
              value={data?.model}
              onChangeText={(value) => setData({ ...data, model: value })}
            />
            <TextInput
              style={styles.input}
              placeholderTextColor={theme.colors.label}
              placeholder="Marca"
              value={data?.brand}
              onChangeText={(value) => setData({ ...data, brand: value })}
            />
            <TextInput
              style={styles.input}
              placeholderTextColor={theme.colors.label}
              keyboardType="numeric"
              placeholder="Ano"
              value={data?.year?.toString()}
              onChangeText={(value) => setData({ ...data, year: value })}
            />
            <TextInput
              style={styles.input}
              keyboardType="numbers-and-punctuation"
              placeholderTextColor={theme.colors.label}
              placeholder="Preco"
              value={String(data?.value)}
              onChangeText={(value) => setData({ ...data, value: value })}
            />
          </View>
          <View style={styles.containerButton}>
            <Button text={textButton} onPress={onPress} />
            <TouchableOpacity
              style={styles.buttonBack}
              onPress={() => navigate("Home")}
            >
              <Text style={styles.textButton}>Voltar</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
}
