import { TouchableOpacity, Text, ActivityIndicator } from "react-native";
import { theme } from "../../styles/theme";
import { styles } from "./styles";

interface ButtonProps {
  text: string;
  onPress?(): void;
  isLoading?: boolean;
  disabled?: boolean;
}

export function Button({
  text,
  onPress,
  isLoading = false,
  disabled,
}: ButtonProps) {
  const opacity = disabled ? 0.5 : 1;

  return (
    <>
      <TouchableOpacity
        style={[styles.button, { opacity }]}
        disabled={isLoading || disabled}
        onPress={onPress}
      >
        {isLoading ? (
          <ActivityIndicator color={theme.colors.white} />
        ) : (
          <Text style={styles.buttonText}>{text}</Text>
        )}
      </TouchableOpacity>
    </>
  );
}
