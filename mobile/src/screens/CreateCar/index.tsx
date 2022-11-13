import { useState } from "react";
import { FormCar } from "../../components/FormCar";
import { showToast } from "../../components/Toast";
import { api } from "../../services/api";
import { useNavigation } from "@react-navigation/native";
import { CarDTO } from "../../dtos/CarDTO";

type Nav = {
  navigate: (value: string) => void;
};

export function CreateCar() {
  const { navigate } = useNavigation<Nav>();
  const [data, setData] = useState<CarDTO>({
    model: "",
    brand: "",
    year: "",
    value: "",
  });

  async function handleSubmit() {
    try {
      const res = await api.post("/car", {
        brand: data.brand,
        model: data.model,
        year: data.year,
        value: data.value,
      });
      if (res.data.error === false) {
        if (data.preview.uri) {
          const formData = new FormData();
          const file = {
            uri: data?.preview?.uri,
            name: data?.preview?.fileName,
            type: data?.preview?.type,
          } as any;

          formData.append("file", file, data.preview.fileName);

          const resImage = await api.put(
            `/upload/${res.data.car._id}`,
            formData
          );
        }
        showToast({
          type: "success",
          title: "Successful!",
          text: res.data.message,
        });
        setTimeout(() => {
          navigate("Home");
        }, 1000);
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
    <>
      <FormCar
        textButton="Criar"
        onPress={handleSubmit}
        data={data}
        setData={setData}
      />
    </>
  );
}
