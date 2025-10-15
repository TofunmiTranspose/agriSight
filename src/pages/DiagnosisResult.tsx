import { useState, useEffect } from "react";
import {
  ArrowLeft,
  CheckCircle,
  Save,
  Repeat,
  RefreshCcw,
  Activity,
} from "lucide-react";
import { motion } from "framer-motion";
import type { pageType } from "../App";

const DiagnosisResult = ({
  navigate,
  image,
}: {
  navigate: (page: pageType) => void;
  image: File | null;
}) => {
  const [loading, setLoading] = useState(true);
  const brandGreen = "#1FAB89";

  const result = {
    disease: "Cassava Mosaic Virus",
    severity: "Moderate",
    confidence: 87, // new confidence score
    remedies: [
      "Remove infected leaves immediately and destroy them.",
      "Apply organic neem oil weekly to affected plants.",
      "Ensure 2m spacing between cassava plants for better air flow.",
    ],
    time: "3:27 PM",
    imageUrl: image ? URL.createObjectURL(image) : "https://placehold.co/100",
  };

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col items-center justify-center h-80 text-center relative"
      >
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-10 left-10 w-56 h-56 bg-[#1FAB89]/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-56 h-56 bg-[#064E3B]/20 rounded-full blur-3xl"></div>
        </div>

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <RefreshCcw className="w-10 h-10 text-[#1FAB89] mb-4" />
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl font-semibold text-[#064E3B]"
        >
          Inspecting your crop... 🌱
        </motion.p>
        <p className="text-sm text-gray-500 mt-1">
          Analyzing over 50 common crop diseases
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative p-4"
    >
      {/* Glow background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-16 left-16 w-72 h-72 bg-[#1FAB89]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-[#064E3B]/20 rounded-full blur-3xl"></div>
      </div>

      {/* Back Button */}
      <button
        onClick={() => navigate("home")}
        className="flex items-center text-gray-500 hover:text-[#064E3B] mb-6 transition"
      >
        <ArrowLeft className="w-5 h-5 mr-1" /> Back
      </button>

      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-2xl font-bold text-[#064E3B] mb-6"
      >
        AI Diagnosis Result
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative"
        >
          <img
            src={result.imageUrl}
            alt="Uploaded Crop"
            className="w-full rounded-xl shadow-lg aspect-video object-cover border border-[#1FAB89]/20"
          />
          <div className="absolute top-3 left-3 bg-white/80 px-3 py-1 rounded-full text-xs font-semibold text-[#064E3B] shadow-sm">
            📷 Uploaded Image
          </div>
        </motion.div>

        {/* Right: Result */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white/70 backdrop-blur-md p-5 rounded-xl border border-[#1FAB89]/20 shadow-md hover:shadow-lg transition"
        >
          {/* Diagnosis Summary */}
          <div className="flex items-center mb-4">
            <CheckCircle className="w-6 h-6 text-[#1FAB89] mr-2" />
            <h3 className="text-lg font-semibold text-[#064E3B]">
              Diagnosis Summary
            </h3>
          </div>

          <div className="bg-[#1FAB89]/10 p-4 rounded-lg mb-4 border-l-4 border-[#1FAB89]">
            <p className="font-bold text-lg text-[#064E3B]">{result.disease}</p>
            <div className="flex justify-between items-center mt-2">
              <p
                className={`text-sm font-medium ${
                  result.severity === "Moderate"
                    ? "text-orange-500"
                    : "text-gray-600"
                }`}
              >
                📊 Severity: {result.severity}
              </p>
              <div className="flex items-center text-sm text-gray-600">
                <Activity className="w-4 h-4 mr-1 text-[#1FAB89]" />
                Confidence:{" "}
                <span className="ml-1 font-semibold text-[#064E3B]">
                  {result.confidence}%
                </span>
              </div>
            </div>

            {/* Confidence Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${result.confidence}%` }}
                transition={{ duration: 1 }}
                className="h-2 rounded-full"
                style={{
                  background: `linear-gradient(to right, ${brandGreen}, #064E3B)`,
                }}
              ></motion.div>
            </div>
          </div>

          {/* Remedies */}
          <h4 className="font-semibold text-gray-700 mb-2 mt-4 flex items-center">
            💡 Recommended Actions
          </h4>
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
            {result.remedies.map((tip, i) => (
              <li key={i}>{tip}</li>
            ))}
          </ul>

          <p className="text-xs text-gray-400 mt-4">
            🕓 Time Analyzed: {result.time}
          </p>
        </motion.div>
      </div>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="flex justify-end mt-8 space-x-4"
      >
        <button className="flex text-sm sm:text-base items-center py-2 px-4 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-100 transition shadow-sm">
          <Save className="w-5 h-5 mr-2" /> Save Result
        </button>
        <button
          onClick={() => navigate("home")}
          className="flex items-center text-sm sm:text-base py-2 px-6 text-white font-bold rounded-full transition duration-300 shadow-lg hover:shadow-xl"
          style={{
            background: `linear-gradient(to right, ${brandGreen}, #064E3B)`,
            boxShadow: `0 4px 12px -3px ${brandGreen}88`,
          }}
        >
          <Repeat className="w-5 h-5 mr-2" /> Analyze Another Photo
        </button>
      </motion.div>
    </motion.div>
  );
};

export default DiagnosisResult;
