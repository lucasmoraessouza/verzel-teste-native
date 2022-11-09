import {
  View,
  TextInput,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { styles } from "./styles";
import { Button } from "../../components/Button";
import { theme } from "../../styles/theme";
import * as Animatable from "react-native-animatable";

export function Login() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.content}>
        <Animatable.View animation="flipInY" style={styles.containerImage}>
          <Image
            source={require("../../assets/verzel-squareLogo-1664239370313.png")}
            style={styles.logo}
          />
        </Animatable.View>
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholderTextColor={theme.colors.label}
          placeholder="Usuario"
        />
        <TextInput
          style={styles.input}
          placeholderTextColor={theme.colors.label}
          placeholder="Senha"
          secureTextEntry={true}
        />
      </View>
      <View style={styles.containerButton}>
        <Button text="Entrar" />
      </View>
    </KeyboardAvoidingView>
  );
}
