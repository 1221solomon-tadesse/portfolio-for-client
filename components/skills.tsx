"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Wrench, Users, Lightbulb, PenTool, Code } from "lucide-react"

export default function Skills() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const technicalSkills = [
    { name: "AutoCAD", level: 75 },
    { name: "Solid Works", level: 85 },
    { name: "Creo", level: 70 },
    { name: "Engineering Drawing", level: 85 },
    { name: "Material Science", level: 85 },
  ]

  const softSkills = [
    {
      icon: <Users className="h-8 w-8 text-emerald-600" />,
      name: "Team Collaboration",
      description: "Work closely with team members to achieve engineering goals",
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-emerald-600" />,
      name: "Creative Design",
      description: "Innovative approach to engineering challenges",
    },
    {
      icon: <PenTool className="h-8 w-8 text-emerald-600" />,
      name: "Detail-Oriented",
      description: "Ability to understand and carry out detailed instructions",
    },
  ]

  return (
    <section id="skills" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-emerald-600">Skills</span>
          </h2>
          <div className="h-1 w-20 bg-emerald-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <Wrench className="h-8 w-8 text-emerald-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Technical Skills</h3>
                </div>
                <div className="space-y-6">
                  {technicalSkills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                        <div className="bg-emerald-600 h-2.5 rounded-full" style={{ width: `${skill.level}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
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
                <div className="flex items-center mb-6">
                  <Code className="h-8 w-8 text-emerald-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Software Skills</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-emerald-600 rounded-full mr-2"></div>
                    <span className="text-gray-700 dark:text-gray-300">AutoCAD</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-emerald-600 rounded-full mr-2"></div>
                    <span className="text-gray-700 dark:text-gray-300">Creo</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-emerald-600 rounded-full mr-2"></div>
                    <span className="text-gray-700 dark:text-gray-300">Solid Works</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-emerald-600 rounded-full mr-2"></div>
                    <span className="text-gray-700 dark:text-gray-300">Microsoft Office</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white text-center mb-8">Soft Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {softSkills.map((skill, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">{skill.icon}</div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{skill.name}</h4>
                  <p className="text-gray-700 dark:text-gray-300">{skill.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
