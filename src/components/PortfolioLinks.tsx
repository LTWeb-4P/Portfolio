import { motion } from "motion/react";
import { ExternalLink, Briefcase } from "lucide-react";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import khuongImg from "../assets/khuong.png";
import tanImg from "../assets/tan.png";
import tuanImg from "../assets/tuan.png";
import kienImg from "../assets/kien.png";

const portfolioLinks = [
  {
    id: 1,
    title: "Nhật Khương",
    url: "https://nguyenkhuong138.github.io/portfolio/",
    image: khuongImg,
    gradient: "from-purple-500 to-pink-500",
    hoverGradient: "from-purple-600 to-pink-600",
  },
  {
    id: 2,
    title: "Thanh Tân",
    url: "https://portfolio-brown-theta-68.vercel.app/",
    image: tanImg,
    gradient: "from-blue-500 to-cyan-500",
    hoverGradient: "from-blue-600 to-cyan-600",
  },
  {
    id: 3,
    title: "Đình Tuấn",
    url: "https://dinhtuandev.github.io/Portfolio/",
    image: tuanImg,
    gradient: "from-orange-500 to-red-500",
    hoverGradient: "from-orange-600 to-red-600",
  },
  {
    id: 4,
    title: "Đình Kiên",
    url: "https://ddkien05-ui.github.io/kienduong.github.io/",
    image: kienImg,
    gradient: "from-green-500 to-emerald-500",
    hoverGradient: "from-green-600 to-emerald-600",
  },
];

export function PortfolioLinks() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-8">
      <div className="w-full max-w-6xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block mb-6"
          >
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center mx-auto shadow-2xl">
              <Briefcase className="w-12 h-12 text-white" />
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-white mb-4"
          >
            Ours Portfolio
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-purple-200 max-w-2xl mx-auto"
          >
            Welcome to group 4. 
          </motion.p>
        </motion.div>

        {/* Portfolio Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioLinks.map((link, index) => (
            <PortfolioCard key={link.id} link={link} index={index} />
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mt-12"
        >
          
        </motion.div>
      </div>
    </div>
  );
}

function PortfolioCard({ link, index }: { link: typeof portfolioLinks[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const isDisabled = link.url === "#";

  return (
    <motion.a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => isDisabled && e.preventDefault()}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
      whileHover={!isDisabled ? { scale: 1.05, y: -5 } : {}}
      whileTap={!isDisabled ? { scale: 0.98 } : {}}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`group relative ${isDisabled ? 'cursor-default' : ''}`}
    >
      {/* Background Glow Effect */}
      <motion.div
        className={`absolute -inset-0.5 bg-gradient-to-r ${link.gradient} rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-300`}
        animate={isHovered ? { scale: 1.02 } : { scale: 1 }}
      />

      {/* Card Content */}
      <div className="relative bg-slate-900/90 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/20 group-hover:border-purple-500/40 transition-all duration-300">
        {/* Profile Image */}
        <motion.div
          className="mb-6 flex justify-center"
          animate={isHovered && !isDisabled ? { scale: 1.1 } : { scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className={`w-24 h-24 rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-br ${link.gradient} p-1 shadow-2xl`}>
            <div className="w-full h-full rounded-full overflow-hidden bg-slate-900">
              <ImageWithFallback 
                src={link.image} 
                alt={link.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Text Content */}
        <div className="mb-4 text-center">
          <h3 className="flex items-center justify-center gap-2">
            <span className={`bg-gradient-to-r ${link.gradient} bg-clip-text text-transparent transition-all duration-300`}>
              {link.title}
            </span>
            {!isDisabled && (
              <motion.div
                animate={isHovered ? { x: 5 } : { x: 0 }}
                transition={{ duration: 0.2 }}
              >
                <ExternalLink className="w-5 h-5 text-purple-400" />
              </motion.div>
            )}
          </h3>
        </div>

        {/* Decorative Elements */}
        <div className="flex gap-2 mt-6 justify-center">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className={`h-1 rounded-full bg-gradient-to-r ${link.gradient}`}
              initial={{ width: 0 }}
              animate={isHovered && !isDisabled ? { width: i === 0 ? "60%" : i === 1 ? "40%" : "20%" } : { width: "20%" }}
              transition={{ delay: i * 0.1, duration: 0.3 }}
            />
          ))}
        </div>

        {/* Floating Particles Effect */}
        {isHovered && !isDisabled && (
          <>
            <motion.div
              className="absolute top-4 right-4 w-2 h-2 rounded-full bg-purple-400"
              animate={{
                y: [-10, -30, -10],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
            <motion.div
              className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-pink-400"
              animate={{
                y: [10, 30, 10],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: 0.5,
              }}
            />
          </>
        )}
      </div>
    </motion.a>
  );
}
