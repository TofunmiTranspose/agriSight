import { Camera } from "lucide-react";
import { motion } from "framer-motion";

const HomeUpload = ({ navigate }: { navigate: (page: string) => void }) => {
  const brandGreen = "#1FAB89";

  const handleAnalyzeClick = () => {
    navigate("result");
  };

  return (
    <div className="relative flex flex-col items-center text-center p-6">
      {/* Floating Glow Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#1FAB89]/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-[#064E3B]/20 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-[#064E3B] flex items-center justify-center">
          AGRISIGHT <span className="text-[#1FAB89] ml-2">🌿</span>
        </h1>
        <p className="text-gray-500 italic mt-1">See. Diagnose. Grow.</p>
      </motion.header>

      {/* Upload Box (Animated Card) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 120, delay: 0.1 }}
        whileHover={{ scale: 1.02 }}
        className="w-full p-12 border-2 border-dashed border-[#1FAB89]/50 rounded-2xl bg-white/60 backdrop-blur-lg relative overflow-hidden shadow-lg transition-all"
      >
        {/* Subtle glow animation */}
        <motion.div
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute inset-0 bg-gradient-to-br from-[#1FAB89]/10 to-transparent rounded-2xl"
        />

        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Camera className="w-16 h-16 mx-auto text-[#1FAB89] mb-4 drop-shadow-lg" />
        </motion.div>

        <p className="text-lg font-semibold text-gray-700 mb-6">
          Upload Your Crop Image
        </p>
        <p className="text-sm text-gray-400 mb-8">
          Drag & drop or select from camera/gallery
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleAnalyzeClick}
          className="w-full py-3 px-6 text-white font-bold rounded-full shadow-lg transition-all"
          style={{
            background: `linear-gradient(to right, ${brandGreen}, #064E3B)`,
            boxShadow: `0 6px 20px -5px ${brandGreen}99`,
          }}
        >
          🔍 Analyze Crop
        </motion.button>
      </motion.div>

      {/* Tip */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-6 text-sm text-gray-500 flex items-center"
      >
        💡 Tip: Take a clear photo of the leaf or fruit for accurate results.
      </motion.p>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-10 pt-4 border-t border-gray-100"
      >
        <div className="text-sm text-gray-400">
          Languages:
          <span className="text-[#1FAB89] font-bold ml-2">EN</span> |
          <span className="ml-1 hover:text-[#1FAB89] cursor-pointer">SW</span> |
          <span className="ml-1 hover:text-[#1FAB89] cursor-pointer">YO</span>
        </div>
      </motion.footer>
    </div>
  );
};

export default HomeUpload;
