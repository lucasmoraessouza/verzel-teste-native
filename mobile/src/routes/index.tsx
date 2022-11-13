import { NavigationContainer } from "@react-navigation/native";
import { useAuth, SignedProps } from "../context/auth";

import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

export default function Routes() {
  const { signed } = useAuth() as SignedProps;

  return <>{signed === true ? <AppRoutes /> : <AuthRoutes />}</>;
}
