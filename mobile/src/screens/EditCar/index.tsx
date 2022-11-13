import { useRoute } from "@react-navigation/native";
import { useState } from "react";
import { FormCar } from "../../components/FormCar";
import { CarDTO } from "../../dtos/CarDTO";
import { api } from "../../services/api";
import { useNavigation } from "@react-navigation/native";
import { showToast } from "../../components/Toast";

type ParamsProps = {
  item: CarDTO;
};

type Nav = {
  navigate: (value: string) => void;
};

export function EditCar() {
  const route = useRoute();
  const { navigate } = useNavigation<Nav>();
  const { item } = route.params as ParamsProps;
  const [data, setData] = useState<CarDTO>({
    model: item?.model,
    brand: item?.brand,
    year: item?.year,
    value: item?.value,
    image: item?.image,
  });

  async function handleUpdate() {
    try {
      const res = await api.put(`/car/${item?._id}`, {
        brand: data?.brand,
        model: data?.model,
        year: data?.year,
        value: data?.value,
      });

      if (res.data.error === false) {
        if (data?.preview?.uri) {
          const formData = new FormData();
          const file = {
            uri: data?.preview?.uri,
            name: data?.preview?.fileName,
            type: data?.preview?.type,
          } as any;

          formData.append("file", file, data.preview.fileName);

          await api.put(`/upload/${res.data.car._id}`, formData);
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
      console.log("catch", err);
      showToast({
        type: "error",
        title: "Error!",
        text: err?.data?.message,
      });
    }
  }

  return (
    <FormCar
      textButton="Editar"
      onPress={handleUpdate}
      data={data}
      setData={setData}
    />
  );
}
