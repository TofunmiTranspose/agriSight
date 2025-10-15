import { useAgriSightModel } from "./useAgriSightModel";
import { analyzeCloud } from "../api/analyseCloud";

export function useSmartAI() {
  const { predictLocal } = useAgriSightModel();

  const analyzeSmart = async (image: any, base64Image: any) => {
    const hasInternet = navigator.onLine;
    console.log("Internet status:", hasInternet);

    if (hasInternet) {
      const result = await analyzeCloud(base64Image);
      if (result) return { source: "cloud", ...result };
    }

    const localResult = await predictLocal(image);
    return {
      source: "local",
      label: localResult?.className,
      score: localResult?.probability,
    };
  };

  return { analyzeSmart };
}
