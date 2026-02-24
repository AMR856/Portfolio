"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Layout, Server, Database, Wrench, Binary } from "lucide-react";

export default function TechStack() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const technologies = {
    languages: {
      icon: <Code2 className="h-6 w-6 text-gradient" />,
      title: "Programming Languages",
      description: "Core languages for systems and application development",
      skills: [
        { name: "JavaScript", level: 95 },
        { name: "TypeScript", level: 95 },
        { name: "Dart", level: 90 },
        { name: "C", level: 90 },
        { name: "Python", level: 90 },
        { name: "SQL", level: 85 },
        { name: "Bash", level: 80 },
        { name: "C++", level: 70 },
      ],
    },
    concepts: {
      icon: <Binary className="h-6 w-6 text-gradient" />,
      title: "Engineering Concepts",
      description: "Fundamental software engineering principles",
      skills: [
        { name: "Data Structures", level: 95 },
        { name: "OOP", level: 95 },
        { name: "Operating Systems", level: 90 },
        { name: "Design Patterns", level: 85 },
        { name: "System Design", level: 88 },
        { name: "Algorithms", level: 80 },
        { name: "Database Design", level: 80 },
      ],
    },
    frontend: {
      icon: <Layout className="h-6 w-6 text-gradient" />,
      title: "Mobile Development",
      description: "Mobile development technologies",
      skills: [
        { name: "Flutter", level: 95 },
        { name: "Firebase", level: 90 },
        { name: "Clean Architecture", level: 90 },
        { name: "State Management", level: 90 },
      ],
    },
    backend: {
      icon: <Server className="h-6 w-6 text-gradient" />,
      title: "Backend Development",
      description: "Server-side frameworks and technologies",
      skills: [
        { name: "Node.js", level: 96 },
        { name: "Express", level: 90 },
        { name: "Flask", level: 85 },
        { name: "NestJS", level: 80 },
      ],
    },
    database: {
      icon: <Database className="h-6 w-6 text-gradient" />,
      title: "Database Systems",
      description: "Database management and optimization",
      skills: [
        { name: "MongoDB", level: 95 },
        { name: "PostgreSQL", level: 85 },
        { name: "Prisma", level: 85 },
        { name: "SQLite", level: 85 },
        { name: "MySQL", level: 80 },
        { name: "Redis", level: 80 },
      ],
    },
    tools: {
      icon: <Wrench className="h-6 w-6 text-gradient" />,
      title: "Development Tools",
      description: "Tools and environments for development",
      skills: [
        { name: "Git", level: 95 },
        { name: "Linux/Unix", level: 90 },
        { name: "Postman", level: 90 },
        { name: "Docker", level: 85 },
        { name: "RabbitMQ", level: 80 },
        { name: "Cloudinary", level: 80 },
      ],
    },
  };

  const fadeIn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };
  const scaleUp = { hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } };

  return (
    <section id="tech-stack" className="py-20 bg-gradient-to-b from-background/80 to-background/100">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            Skills
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            Technical Expertise
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(technologies).map(([key, category]) => (
            <motion.div
              key={key}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              variants={scaleUp}
            >
              <Card
                className={`h-full cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-2xl ${
                  selectedCategory === key ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => setSelectedCategory(selectedCategory === key ? null : key)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-primary/10 p-3 rounded-full flex items-center justify-center">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
                      <p className="text-sm text-muted-foreground">{category.description}</p>
                    </div>
                  </div>

                  <AnimatePresence>
                    {selectedCategory === key && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4"
                      >
                        {category.skills.map((skill, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="space-y-2"
                          >
                            <div className="flex justify-between text-sm font-medium">
                              <span>{skill.name}</span>
                              <span className="text-muted-foreground">{skill.level}%</span>
                            </div>
                            <div className="w-full bg-muted rounded-full h-2">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.level}%` }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="h-2 rounded-full bg-gradient-to-r from-primary to-destructive"
                              />
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {selectedCategory !== key && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {category.skills.slice(0, 3).map((skill, index) => (
                        <Badge key={index} variant="secondary">
                          {skill.name}
                        </Badge>
                      ))}
                      {category.skills.length > 3 && (
                        <Badge variant="secondary" className="bg-muted text-muted-foreground">
                          +{category.skills.length - 3} more
                        </Badge>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          variants={fadeIn}
          className="mt-12 text-center text-muted-foreground max-w-2xl mx-auto"
        >
          <p className="text-lg">
            With extensive experience spanning low-level systems programming and modern web & mobile development, I bring a deep and well-rounded understanding of software engineering principles to every project.
          </p>
        </motion.div>
      </div>
    </section>
  );
}