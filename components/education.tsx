"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"

export default function Education() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section id="education" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="text-emerald-600">Education</span>
          </h2>
          <div className="h-1 w-20 bg-emerald-600 mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-emerald-200 dark:bg-emerald-900"></div>

          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="flex flex-col md:flex-row items-center">
                <div className="flex-1 md:text-right md:pr-8 mb-4 md:mb-0">
                  <div className="text-emerald-600 font-semibold">Masters of Science</div>
                </div>

                <div className="z-10 flex items-center justify-center w-10 h-10 bg-emerald-100 dark:bg-emerald-800 rounded-full border-4 border-white dark:border-gray-900">
                  <GraduationCap className="h-5 w-5 text-emerald-600" />
                </div>

                <div className="flex-1 md:pl-8">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        Manufacturing Engineering
                      </h3>
                      <div className="text-emerald-600 font-medium mb-2">
                        Addis Ababa Science and Technology University
                      </div>
                      <div className="text-gray-700 dark:text-gray-300 mb-4">
                        <span className="font-medium">CGPA:</span> 3.89/4.0 (Very Good)
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">
                        Thesis: Effects of Alumina Particulate Size and Solution-Aging Treatment on Mechanical
                        Properties of Al 2024 Based Metal Matrix Composites. [Under publishing process]
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative"
            >
              <div className="flex flex-col md:flex-row items-center">
                <div className="flex-1 md:text-right md:pr-8 mb-4 md:mb-0">
                  <div className="text-emerald-600 font-semibold">Bachelor of Science</div>
                </div>

                <div className="z-10 flex items-center justify-center w-10 h-10 bg-emerald-100 dark:bg-emerald-800 rounded-full border-4 border-white dark:border-gray-900">
                  <GraduationCap className="h-5 w-5 text-emerald-600" />
                </div>

                <div className="flex-1 md:pl-8">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        Mechanical Engineering (Automotive Stream)
                      </h3>
                      <div className="text-emerald-600 font-medium mb-2">
                        Addis Ababa Science and Technology University
                      </div>
                      <div className="text-gray-700 dark:text-gray-300 mb-4">
                        <span className="font-medium">CGPA:</span> 3.62/4.0
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">
                        BSc Thesis: Design and Simulation of Centrifugal Atomization Machine for Small Scale Production
                        of Metal Powder [Score: A]
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
