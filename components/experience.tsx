"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase } from "lucide-react"

export default function Experience() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section id="experience" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Work <span className="text-emerald-600">Experience</span>
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
                  <div className="text-emerald-600 font-semibold">January 2025 - Present</div>
                </div>

                <div className="z-10 flex items-center justify-center w-10 h-10 bg-emerald-100 dark:bg-emerald-800 rounded-full border-4 border-white dark:border-gray-900">
                  <Briefcase className="h-5 w-5 text-emerald-600" />
                </div>

                <div className="flex-1 md:pl-8">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Engineer</h3>
                      <div className="text-emerald-600 font-medium mb-4">Methara Sugar Factory | Ethiopia</div>
                      <div className="text-gray-700 dark:text-gray-300 space-y-2">
                        <p className="font-medium">Responsibilities:</p>
                        <ul className="list-disc list-inside space-y-1 ml-2">
                          <li>Engineering design and implementation</li>
                          <li>Process optimization and improvement</li>
                          <li>Equipment maintenance and troubleshooting</li>
                          <li>Team coordination and management</li>
                          <li>Quality control and assurance</li>
                        </ul>
                      </div>
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
                  <div className="text-emerald-600 font-semibold">April 2022 - December 2024</div>
                </div>

                <div className="z-10 flex items-center justify-center w-10 h-10 bg-emerald-100 dark:bg-emerald-800 rounded-full border-4 border-white dark:border-gray-900">
                  <Briefcase className="h-5 w-5 text-emerald-600" />
                </div>

                <div className="flex-1 md:pl-8">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Assistant Supervisor</h3>
                      <div className="text-emerald-600 font-medium mb-4">
                        Tana Beles Sugar Factory | Jawi, Amhara Region, Ethiopia
                      </div>
                      <div className="text-gray-700 dark:text-gray-300 space-y-2">
                        <p className="font-medium">Responsibilities:</p>
                        <ul className="list-disc list-inside space-y-1 ml-2">
                          <li>Assisting the supervisor in designing works</li>
                          <li>Managing workers under our team</li>
                          <li>Inspecting machines, finding problems and providing appropriate solutions</li>
                          <li>Implementing maintenance schedules and procedures</li>
                          <li>Collaborating with other departments to optimize production processes</li>
                        </ul>
                      </div>
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
