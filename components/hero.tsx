"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Function to handle CV download
  const handleDownloadCV = () => {
    // Create a link element
    const link = document.createElement("a");

    // Set the href to the CV file path
    // Note: You should replace this with the actual path to your CV file
    link.href = "/MY CV.pdf";

    // Set download attribute with filename
    link.download = "Alemu_Tadesse_Zeru_CV.pdf";

    // Append to body
    document.body.appendChild(link);

    // Trigger click
    link.click();

    // Clean up
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_25%_at_50%_50%,rgba(16,185,129,0.1),transparent)]" />
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Hi, I'm{" "}
            <span className="text-emerald-600 dark:text-emerald-500">
              Alemu Tadesse Zeru
            </span>
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300">
           MSC Manufacturing Engineer
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-10"
        >
          A motivated, adaptable and responsible manufacturing engineering
          graduate with expertise in mechanical design, material science, and
          production optimization.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <Link href="#contact">
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              <Mail className="mr-2 h-4 w-4" /> Contact Me
            </Button>
          </Link>
          <Button
            variant="outline"
            className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-gray-800"
            onClick={handleDownloadCV}
          >
            <Download className="mr-2 h-4 w-4" /> Download CV
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex justify-center space-x-6 mb-16"
        >
          <a
            href="mailto:alemu.tadesse1223@gmail.com"
            className="text-gray-600 hover:text-emerald-600 dark:text-gray-400 dark:hover:text-emerald-500 transition-colors"
          >
            <Mail size={24} />
            <span className="sr-only">Email</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <a href="#about" aria-label="Scroll down">
            <ArrowDown className="h-6 w-6 text-emerald-600 dark:text-emerald-500" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
