import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HomeUpload from "./pages/HomeUpload";
import DiagnosisResult from "./pages/DiagnosisResult";
import HistoryInsights from "./pages/HistoryInsights";
import { FaHome, FaHistory } from "react-icons/fa";
export type pageType = "home" | "result" | "history";

const App = () => {
  const [page, setPage] = useState<pageType>("home");
  const [image, setImage] = useState<File | null>(null);

  const navigate = (newPage: pageType) => setPage(newPage);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex flex-col items-center justify-center p-4">
      {/* Header */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="mb-6 text-center"
      >
        <h1 className="text-3xl font-bold text-green-700 tracking-tight">
          AgriSight 🌿
        </h1>
        <p className="text-gray-500 text-sm">
          AI-powered crop diagnosis & insights for farmers
        </p>
      </motion.header>

      {/* Main Card */}
      <motion.div
        layout
        className="w-full max-w-2xl bg-white shadow-2xl rounded-2xl p-6 border border-green-100"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120 }}
      >
        <AnimatePresence mode="wait">
          {page === "home" && (
            <HomeUpload
              imageState={{ image, setImage }}
              navigate={navigate}
              key="home"
            />
          )}
          {page === "result" && (
            <DiagnosisResult image={image} navigate={navigate} key="result" />
          )}
          {page === "history" && (
            <HistoryInsights navigate={navigate} key="history" />
          )}
        </AnimatePresence>
      </motion.div>

      {/* Footer Navigation */}
      <motion.nav
        className="mt-6 flex space-x-6 bg-white shadow-md px-6 py-3 rounded-full border border-green-100"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <button
          onClick={() => navigate("home")}
          className={`flex items-center gap-2 transition-all ${
            page === "home"
              ? "text-green-600 font-semibold"
              : "text-gray-500 hover:text-green-600"
          }`}
        >
          <FaHome />
          Home
        </button>
        <button
          onClick={() => navigate("history")}
          className={`flex items-center gap-2 transition-all ${
            page === "history"
              ? "text-green-600 font-semibold"
              : "text-gray-500 hover:text-green-600"
          }`}
        >
          <FaHistory />
          History
        </button>
      </motion.nav>

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-green-100 rounded-full blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      </div>
    </div>
  );
};

export default App;
