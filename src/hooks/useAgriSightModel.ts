import * as tmImage from "@teachablemachine/image";
import { useEffect, useState } from "react";

const MODEL_URL = "/model/";

export function useAgriSightModel() {
  const [model, setModel] = useState<tmImage.CustomMobileNet | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        const loaded = await tmImage.load(
          MODEL_URL + "model.json",
          MODEL_URL + "metadata.json"
        );
        setModel(loaded);
      } catch (err) {
        console.error("Failed to load local model:", err);
      }
    };
    load();
  }, []);

  const predictLocal = async (image: any) => {
    if (!model) return null;
    const predictions = await model.predict(image);
    return predictions.sort((a, b) => b.probability - a.probability)[0];
  };

  return { model, predictLocal };
}
