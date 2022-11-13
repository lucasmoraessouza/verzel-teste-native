import { NavigationContainer } from "@react-navigation/native";
import { useEffect } from "react";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_900Black,
} from "@expo-google-fonts/montserrat";
import * as SplashScreen from "expo-splash-screen";
import Routes from "./src/routes";
import Toast from "react-native-toast-message";
import { AuthProvider } from "./src/context/auth";

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_900Black,
  });

  useEffect(() => {
    async function loadFonts() {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    }
    loadFonts();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
        <Toast />
      </AuthProvider>
    </NavigationContainer>
  );
}
