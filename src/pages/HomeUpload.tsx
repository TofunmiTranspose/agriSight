import { Camera } from "lucide-react";
import { motion } from "framer-motion";
import {
  useState,
  type ChangeEvent,
  type Dispatch,
  type SetStateAction,
  useEffect,
} from "react";
import type { pageType } from "../App";

interface HomeUploadProps {
  navigate: (page: pageType) => void;
  imageState: {
    image: File | null;
    setImage: Dispatch<SetStateAction<File | null>>;
  };
}

const HomeUpload = ({ navigate, imageState }: HomeUploadProps) => {
  const { image, setImage } = imageState;
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const brandGreen = "#1FAB89";

  // Generate preview URL when image changes
  useEffect(() => {
    if (image) {
      const objectUrl = URL.createObjectURL(image);
      setPreviewUrl(objectUrl);
      return () => URL.revokeObjectURL(objectUrl);
    } else {
      setPreviewUrl(null);
    }
  }, [image]);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setImage(file);
  };

  const handleAnalyzeClick = () => {
    if (!image) {
      alert("Please upload an image first 🌿");
      return;
    }
    navigate("result");
  };

  return (
    <div className="relative flex flex-col items-center text-center p-2 sm:p-6">
      {/* Floating Glow Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#1FAB89]/30 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-[#064E3B]/20 rounded-full blur-3xl" />
      </div>

      {/* Upload Box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 12 }}
        whileHover={{ scale: 1.02 }}
        className="relative w-full p-12 border-2 border-dashed border-[#1FAB89]/50 rounded-2xl bg-white/70 backdrop-blur-lg shadow-xl transition-all overflow-hidden"
      >
        {/* Image Preview (now always on top of glow) */}
        {previewUrl && (
          <motion.img
            key="preview"
            src={previewUrl}
            alt="Uploaded preview"
            className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-40 z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
          />
        )}

        {/* Subtle Glow Overlay (kept behind text now) */}
        <motion.div
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute inset-0 bg-gradient-to-br from-[#1FAB89]/10 to-transparent rounded-2xl pointer-events-none z-0"
        />

        {/* Upload Label (kept above all visual layers) */}
        <label
          htmlFor="upload"
          className="block cursor-pointer relative z-10 select-none"
        >
          <input
            id="upload"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />

          {!previewUrl && (
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Camera className="w-16 h-16 mx-auto text-[#1FAB89] mb-4 drop-shadow-lg" />
            </motion.div>
          )}

          <p className="text-lg font-semibold text-gray-700 mb-2">
            {previewUrl ? "Change Image" : "Upload Your Crop Image"}
          </p>
          <p className="text-sm text-gray-400 mb-8">
            Drag & drop or choose from camera/gallery
          </p>
        </label>

        {/* Analyze Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleAnalyzeClick}
          className="relative z-10 text-sm sm:text-base w-full p-2 sm:px-6 text-white font-bold rounded-full shadow-lg transition-all"
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
        className="mt-6 text-sm text-gray-500 flex items-center gap-2"
      >
        💡
        <span>
          Take a clear photo of the <strong>leaf or fruit</strong> for accurate
          results.
        </span>
      </motion.p>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-10 pt-4 border-t border-gray-100 w-full text-center"
      >
        <div className="text-sm text-gray-400">
          Languages:
          <span className="text-[#1FAB89] font-semibold ml-2 cursor-default">
            EN
          </span>
          <span className="ml-2 hover:text-[#1FAB89] cursor-pointer">SW</span>
          <span className="ml-2 hover:text-[#1FAB89] cursor-pointer">YO</span>
        </div>
      </motion.footer>
    </div>
  );
};

export default HomeUpload;
