export async function analyzeCloud(base64Image: any) {
  const HF_API_URL =
    "https://api-inference.huggingface.co/models/sayakpaul/Plant-Disease-Classification";
  const HF_TOKEN = import.meta.env.VITE_HF_TOKEN; // keep secret in .env

  try {
    const res = await fetch(HF_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${HF_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ inputs: base64Image }),
    });

    const result = await res.json();
    return result[0]; // label & score
  } catch (error) {
    console.error("Cloud analysis failed:", error);
    return null;
  }
}
