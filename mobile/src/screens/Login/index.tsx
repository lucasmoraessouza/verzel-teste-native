import {
  View,
  TextInput,
  Image,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
  TouchableOpacity,
  Text,
} from "react-native";
import { styles } from "./styles";
import { Button } from "../../components/Button";
import { theme } from "../../styles/theme";
import { useState } from "react";
import { api } from "../../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { showToast } from "../../components/Toast";
import { useNavigation } from "@react-navigation/native";
import { useAuth, SignedProps } from "../../context/auth";

type Nav = {
  navigate: (value: string) => void;
};

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { signed, setSigned } = useAuth() as SignedProps;
  const { navigate } = useNavigation<Nav>();

  async function handleSubmit() {
    try {
      const res = await api.post("/login", {
        username,
        password,
      });

      if (res.data.error === false) {
        showToast({
          type: "success",
          title: "Login successful!",
          text: "Now you can create, edit and delete cars! ",
        });
        setTimeout(() => {
          setSigned(true);
          AsyncStorage.setItem("token", res.data.token);
          navigate("Home");
        }, 500);
      }
    } catch (err: any) {
      showToast({
        type: "error",
        title: "Error!",
        text: err?.data?.message,
      });
    }
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
                source={require("../../assets/ferrari.png")}
                style={styles.logo}
              />
            </View>
          </View>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholderTextColor={theme.colors.label}
              placeholder="Usuario"
              value={username}
              onChangeText={(value) => setUsername(value)}
            />
            <TextInput
              style={styles.input}
              placeholderTextColor={theme.colors.label}
              placeholder="Senha"
              secureTextEntry={true}
              value={password}
              onChangeText={(value) => setPassword(value)}
            />
          </View>
          <View style={styles.containerButton}>
            <Button text="Entrar" onPress={handleSubmit} />
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
