import Head from "next/head";
import Navbar from "./navbar";
import { motion } from "framer-motion";

export default function layout({ children }) {
  return (
    <div className="antialiased max-w-4xl mb-40 flex flex-col md:flex-row mx-4 mt-8 md:mt-20 lg:mt-32 lg:mx-auto">
      <Navbar />
      <motion.main
        initial={{ opacity: 0, y: 10 }} // 初期状態
        animate={{ opacity: 1, y: 0 }} // マウント時
        exit={{ opacity: 0, y: 10 }}
        className="mt-6 md:mt-0 px-2 md:px-0 mt-12"
      >
        {children}
      </motion.main>
    </div>
  );
}
