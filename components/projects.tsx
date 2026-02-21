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
  description: string;
  image: string;
  tags: string[];
  features: string[];
  demoLink: string;
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
      title: "Tourism Security Administration Platform",
      shortDescription:
        "A full-stack system serving 35+ administrations and 5,000+ tourism companies.",
      description:
        "A full-stack platform for managing and securing tourist groups under the Ministry of Interior.",
      image: "/Nodejs.svg",
      tags: ["Node.js", "Next.js", "MongoDB", "Express.js"],
      features: [
        "Centralized management for 35+ administrations",
        "Support for 5,000+ tourism companies",
        "Secure authentication and authorization",
        "Role-based access control",
        "Reporting and analytics dashboard",
      ],
      demoLink: "",
      githubLink: "",
      fullDescription:
        "Delivered a full-stack platform for the General Administration for Securing Tourist Groups at the Ministry of Interior, serving over 35 administrations and 5,000 tourism companies. Built with Next.js for the frontend and Node.js/Express for the backend. Features include secure authentication, role-based access, comprehensive reporting, and streamlined workflows.",
    },
    {
      id: 2,
      title: "High-Performance API System",
      shortDescription:
        "An API capable of handling 15,000+ requests per second with 35% downtime reduction.",
      description:
        "A scalable API system designed for high concurrency and availability.",
      image: "/Nodejs.svg",
      tags: ["Node.js", "Redis", "PostgreSQL", "JWT"],
      features: [
        "Handles 15,000+ requests/second",
        "Optimized caching with Redis",
        "JWT-based secure authentication",
        "Performance monitoring with K6",
        "Reduced system downtime by 35%",
      ],
      demoLink: "",
      githubLink: "",
      fullDescription:
        "Developed a high-performance API backend capable of sustaining over 15,000 requests per second, leveraging Redis caching, JWT authentication, and optimized query strategies. Achieved a 35% reduction in downtime through architectural improvements and monitoring.",
    },
    {
      id: 3,
      title: "Meta Pages & Groups Manager",
      shortDescription:
        "A backend system for managing 50+ Meta pages and groups with full automation.",
      description:
        "Automates Meta page and group operations including content posting, messaging, and comment interactions.",
      image: "/Nodejs.svg",
      tags: ["Node.js", "Express.js", "Meta API", "RabbitMQ"],
      features: [
        "Manage and schedule posts for 50+ pages and groups",
        "Auto-commenting and replying based on comment content",
        "Auto-deletion or posting on groups/pages",
        "Automated messaging in response to comments",
        "Webhook-based event handling and token management",
      ],
      demoLink: "",
      githubLink: "",
      fullDescription:
        "Built a complete backend system that integrates with the Meta Graph API to manage over 50 pages and groups. The system supports scheduled publishing, auto-posting or deletion, auto-comments and replies based on comment content, and automated message sending. Integrated with RabbitMQ for message queuing and processing, and uses webhooks to react to user interactions in real time.",
    },
    {
      id: 4,
      title: "WhatsApp Notification API",
      shortDescription:
        "Flexible API system for sending WhatsApp messages for OTPs, order updates, and more.",
      description:
        "A modular backend service for sending WhatsApp messages from any system.",
      image: "/Nodejs.svg",
      tags: ["Node.js", "RabbitMQ", "Redis", "JWT"],
      features: [
        "Send OTPs, order updates, and custom messages",
        "RabbitMQ-based message queuing and retries",
        "Dead-letter queue for failed deliveries",
        "Secure JWT-authenticated API endpoints",
        "Modular design for integration with various systems",
      ],
      demoLink: "",
      githubLink: "",
      fullDescription:
        "Designed and implemented a backend API for sending WhatsApp messages, usable for OTP verification, order status updates, marketing notifications, or any custom purpose. The system is built on Node.js and uses RabbitMQ for message queuing, retry logic, and dead-letter management. Includes JWT-secured endpoints for safe integration with third-party systems.",
    },
    {
      id: 5,
      title: "Laravel SaaS Platforms",
      shortDescription:
        "Multiple SaaS projects across eCommerce, Restaurants, Schools, POS, and Rentals.",
      description:
        "Contributed to several Laravel SaaS platforms for various business domains.",
      image: "/laravel.svg",
      tags: ["PHP", "Laravel", "MySQL", "Vue.js"],
      features: [
        "Custom modules for different industries",
        "Multi-tenant architecture",
        "Role-based access control",
        "Integrated payment gateways",
        "Responsive UI with Vue.js",
      ],
      demoLink: "",
      githubLink: "",
      fullDescription:
        "Worked as a PHP developer contributing to multiple Laravel SaaS projects covering eCommerce, restaurants, schools, advertising, POS, and rental systems. Delivered custom modules, multi-tenant features, secure payment integration, and responsive user interfaces.",
    },
    {
      id: 6,
      title: "elwaiter – Smart Ordering & Waiter Call System",
      shortDescription:
        "Built a real-time restaurant and café service system using QR codes for calling waiters and placing orders.",
      description:
        "Developed a full-stack system for restaurants and cafés with real-time notifications, custom dashboards, and mobile/web integration.",
      image: "/elwaiter.jpg", // replace with appropriate branding or project screenshot
      tags: [
        "Laravel",
        "Socket.io",
        "Cloud Firestore",
        "MySQL",
        "PWA",
        "Real-time Systems",
      ],
      features: [
        "QR-based waiter call and order system",
        "Real-time communication using Socket.io",
        "Custom admin dashboard for each restaurant/café",
        "Live analytics and reporting for decision-making",
        "Cloud Firestore integration for mobile sync",
        "Support for high-frequency notifications",
        "Web and mobile compatibility (PWA-ready)",
      ],
      demoLink: "https://elwaiter.com/",
      githubLink: "", // optional
      fullDescription:
        "Engineered a real-time ordering and waiter call platform used in restaurants and cafés, where customers scan a QR code to either call a waiter or place orders directly from their phones. The system pushes real-time updates to staff dashboards and mobile apps via Socket.io, ensuring fast response times. Admins can configure their layout, manage orders, and access detailed analytics per location. The project tackled high-concurrency challenges, built with Laravel on the backend, MySQL for structured data, and Firestore for real-time mobile sync.",
    },
    {
      id: 7,
      title: "All-in-One Currency Exchange Plugin | WordPress Plugin",
      shortDescription:
        "Developed and published a full-featured WordPress currency exchange plugin with customizable UI and real-time rates.",
      description:
        "Created a WordPress plugin for currency conversion using real-time exchange rates with multiple layout options and Gutenberg/Elementor support.",
      image: "/All-In-OnePlugin.png",
      tags: [
        "PHP",
        "WordPress",
        "Gutenberg",
        "WooCommerce",
        "Currency API",
        "Elementor",
      ],
      features: [
        "Real-time currency exchange rates via API",
        "Multiple widget layouts: horizontal, vertical, and inline",
        "Shortcode and Gutenberg block support",
        "Elementor widget integration",
        "Admin panel for configuration and API key management",
        "Responsive design for seamless mobile experience",
        "Published on WordPress.org",
      ],
      demoLink: "https://wordpress.org/plugins/all-in-one-currency-exchange/",
      githubLink: "", // optional if open source
      fullDescription:
        "Designed and published the All-in-One Currency Exchange plugin on WordPress.org. The plugin allows site owners to display live currency conversion widgets using real-time exchange rates from a configurable API. Built with modular PHP, it supports multiple display layouts (horizontal, vertical, inline), offers shortcodes, Gutenberg blocks, and Elementor widgets. Includes a customizable admin dashboard for API key configuration and styling. Fully responsive and easy to integrate into any WordPress site.",
    },
    {
      id: 8,
      title: "BookCloudMe – Digital Publishing Platform",
      shortDescription:
        "Backend development for a digital publishing platform enabling authors to publish and sell eBooks online.",
      description:
        "Engineered the backend for BookCloudMe, a platform for digital book publishing, sales, and reader access, using .NET and SQL Server.",
      image: "/bookcloudme.png", // replace with BookCloudMe branding or screenshot
      tags: [
        ".NET",
        "ASP.NET Core",
        "SQL Server",
        "REST API",
        "JWT",
        "Content Management",
        "eCommerce",
      ],
      features: [
        "eBook management system for authors and publishers",
        "Online bookstore with secure purchasing and downloads",
        "Role-based access control for readers, authors, and admins",
        "Admin dashboard for managing content, sales, and analytics",
        "Payment gateway integration for digital transactions",
        "Support for uploading and managing PDF/eBook formats",
        "Secure REST APIs for mobile and web frontend integration",
      ],
      demoLink: "https://www.bookcloudme.com/",
      githubLink: "", // optional
      fullDescription:
        "BookCloudMe is a digital publishing platform that allows authors to publish and sell their books online. I developed the backend using ASP.NET Core and SQL Server, focusing on scalable architecture and secure APIs. The system supports user roles, book uploads, order processing, and real-time reporting. I also implemented JWT-based authentication, payment integration, and admin tools for content and sales management. The backend services were built to support both the web frontend and potential mobile clients.",
    },
    {
      id: 9,
      title: "Conquer Online Private Server – My Journey into Game Development",
      shortDescription:
        "MMORPG Architecture • Reverse Engineering • Multiplayer Systems.",
      description:
        "Built a game server emulator replicating Conquer Online gameplay mechanics.",
      image: "/conqueronline.jpg",
      tags: [
        "C#",
        ".NET",
        "C++",
        "MySQL",
        "Entity Framework",
        "Socket Programming",
        "Multithreading",
        "RPC",
        "Google Protocol Buffers",
        "Cryptography",
        "Microservices",
        "Reverse Engineering",
        "IDA Pro",
        "OllyDbg",
        "x64dbg",
      ],
      features: [
        "Packet-level protocol handling (custom binary protocols)",
        "Player authentication and session management",
        "Secure encrypted communication using Blowfish, RC5, CAST5, and custom algorithms",
        "Thread pool management for maps, NPCs, and real-time combat systems",
        "Scalable microservice architecture using RPC for inter-server communication",
        "In-game item inventory and quest system with persistence",
        "NPC logic, map parsing, and coordinate-based pathfinding",
        "Real-time PvP and PvE combat engine",
        "Deadlock-free concurrent systems (e.g., trade, movement, attack)",
        "Client-side extensions via injected DLLs",
        "Packet sniffing and emulation by reverse engineering original client",
        "Assembly-level debugging using IDA Pro, OllyDbg, and x64dbg",
        "Google Protocol Buffers for efficient structured messaging",
      ],
      demoLink: "",
      githubLink: "",
      fullDescription: `Before I ever wrote a line of code, I was a passionate Conquer Online player. I spent countless hours immersed in the game, fascinated not just by the gameplay, but by the systems behind it—how characters moved, how battles worked, how data flowed between client and server.

That curiosity became the starting point of my journey into software development.

As a self-initiated long-term project, I began modifying and extending a private server version of the game to understand how MMORPGs work under the hood. It was a challenging but rewarding process that taught me more than any tutorial ever could.

What I Worked On:

Built and extended server-side systems in C#, including world maps, combats, and much more.

Designed threaded systems using thread pools to manage concurrent gameplay events like monsters, combat, and player interactions.

Used Entity Framework for managing player data and game state in a structured, efficient way.

Explored cryptographic systems such as Blowfish, RC5, CAST5, and custom protocols for secure client-server communication.

Learned how to structure a microservice-oriented architecture with RPC communication to scale game components.

Solved deadlock and race condition issues during real-time actions like combat.

Created client-side extensions (like library.dll) in C++, injecting them into the game client to control behaviors externally.

Used IDA Pro, OllyDbg, and x64dbg to reverse engineer the game client, analyze packet flow, and emulate its logic on the server side.

Applied Google Protobuf.

This project wasn’t just about building a server—it was about discovering how online games truly work. It sparked my love for development, shaped my technical foundation, and gave me hands-on experience with real-world problems in distributed systems, networking, and reverse engineering.

It all started with a game I loved—and turned into the path that made me a developer.`,
    },
    {
      id: 10,
      title: "EslamOffers — Offers & Deals Platform",
      shortDescription:
        "A modern offers/discounts platform with a Next.js frontend and .NET Core backend.",
      description:
        "Public-facing deals platform built with Next.js for the frontend, .NET Core for backend services, and MySQL as the primary datastore.",
      image: "/eslamoffers.png",
      tags: [
        "Next.js",
        ".NET Core",
        "MySQL",
        "REST API",
        "Tailwind CSS",
        "Docker",
      ],
      features: [
        "Fast SSR/ISR frontend with Next.js",
        "Scalable .NET Core API services",
        "Relational data model in MySQL",
        "Search and filtering for offers",
        "User authentication and account management",
        "Admin dashboard for creating and managing offers",
        "Responsive UI and mobile-friendly layouts",
        "Containerized deployment (Docker) and CI/CD-ready",
      ],
      demoLink: "https://eslamoffers.com",
      githubLink: "",
      fullDescription: `EslamOffers is a deals and offers platform with a fast, SEO-friendly Next.js frontend and robust .NET Core backend services backed by MySQL.
      
Frontend:
- Next.js for server-side rendering and static rendering where appropriate.
- Tailwind CSS for a responsive, utility-first UI.
- Client-side interactions handled with React hooks and lightweight state.

Backend:
- .NET Core Web API for business logic and REST endpoints.
- MySQL for relational data (offers, merchants, users).
- Auth via JWT / cookie-based sessions and role-based admin access.
- Admin dashboard for offer lifecycle: create, schedule, publish, archive.

Operations:
- Containerized with Docker for consistent deployments.
- CI/CD pipeline for automated builds and releases.
- Designed for horizontal scaling of stateless API services and optimized DB queries for high read throughput.

Note: Update any details above after reviewing the live site to match actual features and architecture.`,
    },
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
