"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ExternalLink, Github, ChevronDown } from "lucide-react";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  shortDescription: string;
  image: string;
  tags: string[];
  features: string[];
  demoLink: string;
  isActive: boolean;
  githubLink: string;
  fullDescription: string;
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const projects = [
    {
      id: 1,
      title: "Workout Tracker",
      shortDescription:
        "Scalable backend system for managing workouts, exercises, scheduling, and user progress, with a focus on performance, reliability, and authentication.",
      image: "/node.svg",
      tags: [
        "Node.js",
        "Postgres",
        "TypeScript",
        "Express.js",
        "Prisma",
        "Garfana",
        "Jest",
        "Supertest",
      ],
      features: [
        "Scalable backend for managing workouts, exercises, and user progress",
        "JWT-based authentication with secure, protected routes",
        "Workout CRUD operations, scheduling, notes, and reporting",
        "Built with Node.js, Express, TypeScript, Prisma, and PostgreSQL",
        "Input validation using Zod with comprehensive testing (80%+ coverage)",
        "Load tested with k6 for high concurrency and performance",
        "Monitoring with Prometheus & Grafana, scaled using PM2 cluster mode",
      ],
      demoLink: "",
      isActive: false,
      githubLink: "https://github.com/AMR856/Workout-Tracker",
      fullDescription:
        "Workout Tracker is a scalable backend system for tracking workouts, exercises, and user progress. It supports authentication, workout management, scheduling, and reporting, with a focus on performance, scalability, and reliability.",
    },
    {
      id: 2,
      title: "Image Processing Service",
      shortDescription:
        "A scalable Node.js and TypeScript backend for secure user authentication and image processing, featuring cloud uploads, transformations, pagination, and background job handling.",
      image: "/node.svg",
      tags: [
        "Node.js",
        "Express.js",
        "Prisma",
        "RabbitMQ",
        "TypeScript",
        "Jest",
        "Cloudinary",
      ],
      features: [
        "Secure JWT-based authentication with user registration, login, and profile endpoints",
        "Image upload system using Multer and Cloudinary with cloud storage integration",
        "Dynamic image transformations (resize, crop, rotate, format, filters)",
        "Paginated image retrieval with user-based filtering",
        "Background job processing using RabbitMQ for scalable workloads",
        "Built with Node.js, TypeScript, Express, Prisma, and SQLite",
        "Centralized error handling with clean layered architecture (Controller / Service / Model)",
      ],
      demoLink: "",
      isActive: false,

      githubLink: "https://github.com/AMR856/Image-Processing-Service",
      fullDescription:
        "A production-ready Node.js + TypeScript backend for user authentication and image processing. The project supports secure user accounts, image uploads via Cloudinary, image transformations, pagination, and background processing with a clean layered architecture.",
    },
    {
      id: 3,
      title: "E-Commerce API",
      shortDescription:
        "A production-ready E-Commerce API built with Node.js, Express, and MongoDB, featuring secure authentication, product and order management, and Stripe payment integration.",
      image: "/node.svg",
      tags: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "Stripe",
        "JWT",
        "REST API",
      ],
      features: [
        "Scalable E-Commerce REST API built with Node.js, Express, and MongoDB",
        "JWT-based authentication with role-based access control (Admin / User)",
        "Product management with CRUD, ratings, reviews, and image uploads (Multer)",
        "Order management system with ownership rules, statistics, and total sales",
        "Secure payment integration using Stripe for handling transactions",
        "Request validation using Joi with structured error handling",
        "Swagger API documentation with Bearer authentication support",
        "Modular clean architecture for maintainability and scalability",
      ],
      demoLink: "",
      isActive: false,

      githubLink: "https://github.com/AMR856/E-Commerce-API",
      fullDescription:
        "A production-ready E-Commerce REST API built with Node.js, Express, and MongoDB. The project implements secure JWT-based authentication, role-based authorization, product and order management, and Stripe payment integration. Designed with a modular and scalable architecture, it includes validation, error handling, and comprehensive Swagger API documentation.",
    },
    {
      id: 4,
      title: "Discord Bot",
      shortDescription:
        "A feature-rich Discord bot built with Node.js, Discord.js, and MongoDB for server management, user interaction, and fun commands.",
      description:
        "Backend system for managing Discord servers, tracking user activity, and executing interactive commands.",
      image: "/node.svg",
      tags: ["Node.js", "Discord.js", "MongoDB", "Mongoose", "Bot Development"],
      features: [
        "User commands: getAvatar, youtube, balance, pay, ban, kick, timeout, random-joke, reactor, embed",
        "Server status commands: dnd, listening, online, idle, ping",
        "User registration and tracking within the server",
        "MongoDB for persistent data storage",
        "Modular design for easy feature expansion",
        "Interactive and fun bot functionalities",
        "Secure command execution with role and permission checks",
      ],
      demoLink: "",
      isActive: false,

      githubLink: "https://github.com/AMR856/Discord-Bot",
      fullDescription:
        "Developed a Discord bot using Node.js, Discord.js, and MongoDB. The bot provides various functionalities including user commands (avatars, balance, payments, moderation), server status management, registration, and interactive features like jokes and reaction counting. Built with a modular architecture for easy expansion and persistent storage using MongoDB.",
    },
    {
      id: 5,
      title: "Online Code Compiler API",
      shortDescription:
        "Secure online code execution platform with Docker-based sandboxing and real-time output.",
      description:
        "Built a backend service to compile and execute code safely in isolated environments.",
      image: "/node.svg",
      tags: ["Node.js", "TypeScript", "Docker", "Express", "RabbitMQ"],
      features: [
        "Secure code execution using Docker sandboxing",
        "Support for multiple programming languages (extensible)",
        "Real-time stdout and stderr output",
        "Job queue processing with RabbitMQ",
        "REST API for submitting and retrieving execution results",
        "Timeout and resource limits for safe execution",
      ],
      demoLink: "",
      isActive: false,

      githubLink: "https://github.com/AMR856/Online-Code-Compiler",
      fullDescription:
        "Developed an online code compiler API that securely executes user-submitted code inside isolated Docker containers. Designed the system to support multiple languages, handle concurrent jobs using RabbitMQ, and provide real-time execution output. Implemented strict resource limits and timeouts to ensure safe and efficient code execution.",
    },
    {
      id: 6,
      title: "URL Shortening Service",
      shortDescription:
        "Scalable service to shorten URLs with analytics and high-performance redirection.",
      description:
        "Built a backend system to generate, resolve, and track shortened URLs efficiently.",
      image: "/node.svg",
      tags: ["NestJS", "TypeScript", "PostgreSQL", "Redis", "Prisma"],
      features: [
        "Shorten URLs with unique hashes",
        "Redis caching for fast redirection",
        "Click tracking and analytics dashboard",
        "RESTful API for creating and resolving links",
        "Unit and integration tests with Jest",
      ],
      demoLink: "",
      isActive: false,

      githubLink: "https://github.com/AMR856/URL-Shortening-Service",
      fullDescription:
        "Developed a NestJS-based URL shortening service with REST APIs, Redis caching, and analytics tracking. Designed efficient database models using Prisma and PostgreSQL. Implemented comprehensive tests with Jest to ensure reliability, and optimized redirection performance for high request volumes.",
    },
    {
      id: 7,
      title: "Messaging Platform",
      shortDescription:
        "Real-time messaging backend with encryption, online presence, and typing indicators.",
      description:
        "Developing a scalable chat platform supporting secure messaging and real-time updates.",
      image: "/node.svg",
      tags: ["Node.js", "TypeScript", "Socket.IO", "WebSockets"],
      features: [
        "End-to-end encrypted messaging",
        "Real-time online presence and typing indicators",
        "Broadcasting messages to all connected clients",
        "Contact synchronization across devices",
        "Scalable architecture for high concurrency",
      ],
      demoLink: "",
      githubLink: "",
      fullDescription:
        "Building a messaging backend using Node.js and Socket.IO, enabling real-time communication between clients. Implemented encryption for security, presence indicators, typing notifications, and designed the system to scale efficiently for multiple concurrent users.",
      isActive: true,
    },
{
  id: 9,
  title: "Movies App",
  shortDescription: "Flutter mobile app for browsing and managing movie profiles.",
  description: "Implemented movie search, profile screens, and user history using Clean Architecture and Cubit state management.",
  image: "/flutter.svg",
  tags: ["Flutter", "SQLite", "Clean Architecture", "Cubit"],
  features: [
    "Implemented search and profile screens",
    "Managed user history with SQLite",
    "Handled Git branching and merge conflicts collaboratively",
    "Applied Clean Architecture and Cubit for state management",
  ],
  demoLink: "",
  githubLink: "https://github.com/AMR856/Movies-App",
  fullDescription: "Developed a Flutter app that allows users to search for movies, view detailed profiles, and track viewing history. Applied Clean Architecture and Cubit for scalable and maintainable state management while managing team collaboration with Git.",
  isActive: false
}
,
{
  id: 10,
  title: "Events App",
  shortDescription: "Flutter app for event management with maps, authentication, and theming.",
  description: "Enabled secure sign-in, location mapping, and dynamic theming using Firebase and Provider.",
  image: "/flutter.svg",
  tags: ["Flutter", "Firebase Authentication", "Provider", "Google Maps"],
  features: [
    "Firebase email/password and Google sign-in authentication",
    "Provider state management for theming and localization",
    "Google Maps integration to select and view event locations",
    "Clean Architecture for scalable app structure",
  ],
  demoLink: "",
  githubLink: "https://github.com/AMR856/Events-App",
  fullDescription: "Developed a Flutter events app with Firebase Authentication for secure login, Provider for dynamic theming, and Google Maps for visualizing event locations. Applied Clean Architecture principles for maintainability.",
  isActive: false
}
,
{
  id: 11,
  title: "Contacts App",
  shortDescription: "Flutter mobile app for managing contacts with images and email metadata.",
  description: "Implemented contact management with local persistence and image handling.",
  image: "/flutter.svg",
  tags: ["Flutter"],
  features: [
    "Manage contacts with images and email metadata",
    "Implemented local storage using Android internal APIs",
    "Simple and intuitive UI for contact management",
  ],
  demoLink: "",
  githubLink: "https://github.com/AMR856/Contacts-App",
  fullDescription: "Built a Flutter contacts app that allows users to store, view, and manage contacts with associated images and metadata, leveraging local persistence for offline functionality.",
  isActive: false
}
,
{
  id: 12,
  title: "News App",
  shortDescription: "Flutter app to display news from third-party APIs using clean UI components.",
  description: "Fetched news from external APIs and managed state with Cubit while applying Clean Architecture.",
  image: "/flutter.svg",
  tags: ["Flutter", "Clean Architecture", "Cubit"],
  features: [
    "Integrated third-party news APIs",
    "Mapped API responses to clean UI components",
    "Applied Clean Architecture and Cubit for state management",
  ],
  demoLink: "",
  githubLink: "https://github.com/AMR856/News-App",
  fullDescription: "Developed a Flutter news app that fetches articles from external APIs, maps responses to well-designed UI components, and uses Cubit for predictable state management following Clean Architecture principles.",
  isActive: false
}
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
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
            Portfolio
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={fadeIn}
            >
              <Card
                className={`group h-full cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  expandedProject === project.id ? "ring-2 ring-primary" : ""
                }`}
                onClick={() =>
                  setExpandedProject(
                    expandedProject === project.id ? null : project.id,
                  )
                }
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-background/90 to-background/20 p-6 flex flex-col justify-end">
                      <h3 className="text-xl font-bold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {project.shortDescription}
                      </p>
                    </div>
                  </div>

                  <AnimatePresence>
                    {expandedProject === project.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="p-6 border-t"
                      >
                        <div className="space-y-4">
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, i) => (
                              <Badge key={i} variant="secondary">
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          <div className="space-y-2">
                            <h4 className="font-semibold">Key Features:</h4>
                            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                              {project.features.map((feature, i) => (
                                <li key={i}>{feature}</li>
                              ))}
                            </ul>
                          </div>

                          <div className="flex gap-4 pt-2">
                            {project.githubLink && (
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  window.open(project.githubLink, "_blank");
                                }}
                              >
                                <Github className="h-4 w-4 mr-2" />
                                Code
                              </Button>
                            )}

                            {project.demoLink && (
                              <Button
                                size="sm"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  window.open(project.demoLink, "_blank");
                                }}
                              >
                                <ExternalLink className="h-4 w-4 mr-2" />
                                Demo
                              </Button>
                            )}

                            {project.isActive && (
                            <Button 
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation();
                              }}
                            >
                              Active
                            </Button>
                            )}

                            <Button
                              size="sm"
                              variant="outline"
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedProject(project);
                              }}
                            >
                              Learn More
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="p-4 text-center">
                    <ChevronDown
                      className={`w-6 h-6 mx-auto transition-transform duration-300 ${
                        expandedProject === project.id ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <Dialog
          open={!!selectedProject}
          onOpenChange={() => setSelectedProject(null)}
        >
          <DialogContent
            className="
    w-full
    max-w-[95vw]
    sm:max-w-2xl
    md:max-w-3xl
    lg:max-w-4xl
    xl:max-w-5xl
    2xl:max-w-6xl
    max-h-[90vh]
    overflow-y-auto
  "
          >
            <DialogHeader>
              <DialogTitle>{selectedProject.title}</DialogTitle>
              <DialogDescription></DialogDescription>
              <div className="flex flex-wrap gap-2 mt-2 mb-4">
                {selectedProject.tags.map((tag: string, i: number) => (
                  <Badge key={i} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </DialogHeader>
            <div className="space-y-4">
              <Image
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                quality={100}
                width={600}
                height={400}
                className="w-full rounded-md object-fill aspect-video"
              />
              <p className="text-muted-foreground whitespace-pre-line">
                {selectedProject.fullDescription}
              </p>
              <div className="space-y-4">
                <h4 className="font-semibold">Key Features:</h4>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  {selectedProject.features.map(
                    (feature: string, i: number) => (
                      <li key={i}>{feature}</li>
                    ),
                  )}
                </ul>
              </div>
              <div className="flex justify-end gap-4 mt-4">
                {selectedProject.githubLink && (
                  <Button variant="outline" asChild>
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                )}

                {selectedProject.demoLink && (
                  <Button asChild>
                    <a
                      href={selectedProject.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
}
