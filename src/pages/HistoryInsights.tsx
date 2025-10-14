import { Plus, MessageSquare, Clock } from "lucide-react";
import { motion } from "framer-motion";

const mockHistory = [
  {
    id: 1,
    name: "Healthy Maize",
    icon: "✅",
    color: "text-green-600",
    date: "Oct 12, 2025",
    imageUrl: "https://via.placeholder.com/50/e0ffe0?text=M",
  },
  {
    id: 2,
    name: "Cassava Blight",
    icon: "⚠",
    color: "text-orange-500",
    date: "Oct 10, 2025",
    imageUrl: "https://via.placeholder.com/50/ffe0e0?text=C",
  },
  {
    id: 3,
    name: "Pepper Leaf Spot",
    icon: "🔥",
    color: "text-red-600",
    date: "Oct 8, 2025",
    imageUrl: "https://via.placeholder.com/50/fff5e0?text=P",
  },
];

const mockTips = [
  "🌱 Neem oil can reduce fungal spread by 40%. It’s affordable and eco-friendly!",
  "💧 Water consistently during dry spells to prevent leaf curl and dehydration.",
  "🌾 Rotate your crops every season to reduce soil-borne disease persistence.",
];

const HistoryInsights = ({
  navigate,
}: {
  navigate: (page: string) => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative p-4"
    >
      {/* Soft background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-14 left-10 w-64 h-64 bg-[#1FAB89]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#064E3B]/10 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-[#064E3B]">
          Your Previous Analyses
        </h1>
        <div className="text-sm text-gray-400 flex items-center gap-1">
          <Clock className="w-4 h-4" /> Recent Reports
        </div>
      </header>

      {/* History Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10"
      >
        {mockHistory.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-white/60 backdrop-blur-md border border-[#1FAB89]/20 rounded-xl p-4 shadow-sm hover:shadow-lg cursor-pointer transition"
          >
            <div className="flex flex-col items-center">
              <div
                className="w-14 h-14 rounded-full mb-3 shadow-inner border border-[#1FAB89]/10"
                style={{
                  backgroundImage: `url(${item.imageUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <p className="text-sm font-medium text-center text-gray-700">
                {item.name}
              </p>
              <span className={`text-sm mt-1 font-bold ${item.color}`}>
                {item.icon}
              </span>
              <p className="text-xs text-gray-400 mt-1">{item.date}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Tips & Insights Section */}
      <h2 className="text-xl font-bold text-[#064E3B] mb-4 flex items-center">
        <MessageSquare className="w-5 h-5 mr-2 text-[#1FAB89]" /> Tips &
        Insights
      </h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="space-y-4"
      >
        {mockTips.map((tip, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.01 }}
            className="bg-gradient-to-r from-green-50 to-white p-4 rounded-lg border-l-4 border-[#1FAB89] flex items-start shadow-sm"
          >
            <MessageSquare className="w-5 h-5 text-[#1FAB89] mr-3 mt-1 flex-shrink-0" />
            <p className="text-sm text-gray-700 leading-snug">{tip}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Footer */}
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-10 text-center border-t pt-6 border-gray-100"
      >
        <button
          onClick={() => navigate("home")}
          className="w-1/2 py-3 px-6 text-white font-bold rounded-full transition duration-300 shadow-lg flex items-center justify-center mx-auto"
          style={{
            background: "linear-gradient(to right, #1FAB89, #064E3B)",
            boxShadow: "0 4px 12px -3px #1FAB8966",
          }}
        >
          <Plus className="w-5 h-5 mr-2" /> New Diagnosis
        </button>
        <p className="text-sm text-gray-500 mt-4 italic">
          💬 Connect WhatsApp for instant AI feedback (Coming soon)
        </p>
      </motion.div>
    </motion.div>
  );
};

export default HistoryInsights;
