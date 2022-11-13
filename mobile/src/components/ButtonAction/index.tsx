import { TouchableOpacity, Text, ActivityIndicator } from "react-native";
import { theme } from "../../styles/theme";
import { styles } from "./styles";

interface ButtonProps {
  text: string;
  onPress?(): void;
  isLoading?: boolean;
  disabled?: boolean;
  isDelete?: boolean;
}

export function ButtonAction({
  text,
  onPress,
  isLoading = false,
  disabled,
  isDelete,
}: ButtonProps) {
  const opacity = disabled ? 0.5 : 1;
  const backgroundColor = isDelete ? theme.colors.red : theme.colors.light_blue;
  const borderTopRightRadius = isDelete ? 10 : 0;
  const borderBottomRightRadius = isDelete ? 10 : 0;
  const borderTopLeftRadius = isDelete ? 0 : 10;
  const borderBottomLeftRadius = isDelete ? 0 : 10;
  return (
    <>
      <TouchableOpacity
        style={[
          styles.button,
          { opacity },
          { backgroundColor },
          { borderTopRightRadius },
          { borderBottomRightRadius },
          { borderTopLeftRadius },
          { borderBottomLeftRadius },
        ]}
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
