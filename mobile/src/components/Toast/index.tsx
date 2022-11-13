import Toast from "react-native-toast-message";

type ToastProps = {
  type: string;
  title: string;
  text?: string;
};

export const showToast = ({ type, title, text }: ToastProps) => {
  Toast.show({
    type,
    text1: title,
    text2: text ? text : "",
  });
};
