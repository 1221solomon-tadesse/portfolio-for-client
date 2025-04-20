"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText } from "lucide-react"

export default function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const projects = [
    {
      title:
        "Effects of Alumina Particulate Size and Solution-Aging Treatment on Mechanical Properties of Al 2024 Based Metal Matrix Composites",
      type: "Master's Thesis",
      status: "Under Publishing Process",
      description:
        "Research on how alumina particulate size and solution-aging treatment affect the mechanical properties of aluminum-based metal matrix composites.",
      tags: ["Material Science", "Metal Matrix Composites", "Mechanical Properties"],
    },
    {
      title:
        "Comparative Study on The Effects Heat Treatment During Optimization of Cylindrical Grinding Process for EN24 Alloy Steel",
      type: "Research Paper",
      status: "Under Progress for Publishing",
      description:
        "Study examining how heat treatment affects the cylindrical grinding process for EN24 alloy steel, with a focus on optimization techniques.",
      tags: ["Heat Treatment", "Grinding Process", "Alloy Steel", "Optimization"],
    },
    {
      title: "Design and Simulation of Centrifugal Atomization Machine for Small Scale Production of Metal Powder",
      type: "BSc Thesis Project",
      status: "Completed (Score: A)",
      description:
        "Design and simulation of a centrifugal atomization machine specifically for small-scale production of metal powder, with practical applications in manufacturing.",
      tags: ["Centrifugal Atomization", "Metal Powder", "Design", "Simulation"],
    },
  ]

  return (
    <section id="projects" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Research & <span className="text-emerald-600">Projects</span>
          </h2>
          <div className="h-1 w-20 bg-emerald-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start mb-4">
                    <FileText className="h-6 w-6 text-emerald-600 mr-3 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
                      <div className="flex flex-wrap items-center mt-2 space-x-2">
                        <Badge variant="outline" className="text-emerald-600 border-emerald-600">
                          {project.type}
                        </Badge>
                        <span className="text-sm text-gray-600 dark:text-gray-400">{project.status}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
