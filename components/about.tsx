"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Lightbulb, Rocket } from "lucide-react";

export default function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeIn}
          className="text-center mb-20"
        >
          <Badge variant="outline" className="mb-4 text-lg">
            About Me
          </Badge>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-3">
            Who I Am
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Text Column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            variants={fadeIn}
          >
            <h3 className="text-3xl font-bold mb-6 text-primary">
              A Passionate Backend  & Flutter Developer
            </h3>

            <p className="text-muted-foreground mb-4 leading-relaxed">
              Software Engineer with expertise in designing scalable, high-performance systems and APIs, backed by a solid foundation in Electronics and Communication Engineering.
            </p>

            <p className="text-muted-foreground mb-4 leading-relaxed">
              Experienced in delivering real-world backend solutions, including e-commerce platforms and distributed applications.
            </p>

            <p className="text-muted-foreground mb-4 leading-relaxed">
              Proficient in clean architecture, design patterns, and testing to build reliable, maintainable systems, with strong collaboration and leadership skills.
            </p>
          </motion.div>

          {/* Cards Column */}
          <div className="grid grid-cols-1 gap-6">
            {/* Card 1 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              variants={fadeIn}
            >
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Code className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Clean Code</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        I write maintainable, scalable, and efficient code following best practices and industry standards.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              variants={fadeIn}
            >
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Lightbulb className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Problem Solver</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        I enjoy tackling complex challenges and finding elegant solutions through creative thinking.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              variants={fadeIn}
            >
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Rocket className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Fast Learner</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        I quickly adapt to new technologies and environments, constantly expanding my skill set.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}