"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { User, Calendar, MapPin, Languages } from "lucide-react"

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section id="about" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="text-emerald-600">Me</span>
          </h2>
          <div className="h-1 w-20 bg-emerald-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2"
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Personal Profile</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  A young vibrant, motivated, adaptable and responsible manufacturing engineering graduate, backed by
                  successful internship, sugar factory experience and knowledge of engineering theories, technologies,
                  principles and standards.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  I am passionate about mechanical design, material science, and production optimization. With expertise
                  in AutoCAD, Creo, and Solid Works, I bring creative solutions to engineering challenges. My experience
                  at Tana Beles Sugar Factory has equipped me with practical skills in machine inspection,
                  problem-solving, and team management.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Personal Information</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <User className="h-5 w-5 text-emerald-600 mr-3 mt-0.5" />
                    <div>
                      <span className="font-medium text-gray-900 dark:text-white">Name:</span>
                      <p className="text-gray-700 dark:text-gray-300">Alemu Tadesse Zeru</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Calendar className="h-5 w-5 text-emerald-600 mr-3 mt-0.5" />
                    <div>
                      <span className="font-medium text-gray-900 dark:text-white">Date of Birth:</span>
                      <p className="text-gray-700 dark:text-gray-300">December 22, 1996</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <MapPin className="h-5 w-5 text-emerald-600 mr-3 mt-0.5" />
                    <div>
                      <span className="font-medium text-gray-900 dark:text-white">Address:</span>
                      <p className="text-gray-700 dark:text-gray-300">Addis Ababa, Ethiopia</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Languages className="h-5 w-5 text-emerald-600 mr-3 mt-0.5" />
                    <div>
                      <span className="font-medium text-gray-900 dark:text-white">Languages:</span>
                      <p className="text-gray-700 dark:text-gray-300">Amharic (Excellent), English (Advanced)</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
