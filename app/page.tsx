import type { Metadata } from "next";
import Hero from "@/components/hero";
import About from "@/components/about";
import TechStack from "@/components/tech-stack";
import Projects from "@/components/projects";
// import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "Amr Alnus | Portfolio",
  description: "Professional Software Engineer",
keywords: [
  "Software Developer",
  "Full Stack Developer",
  "Backend Engineer",
  "Node.js Developer",
  "TypeScript Developer",
  "Python Developer",
  "C++ Developer",
  "Java Developer",
  "REST API Developer",
  "GraphQL Developer",
  "Express.js",
  "NestJS",
  "MongoDB",
  "PostgreSQL",
  "Prisma ORM",
  "SQL & NoSQL Databases",
  "Microservices",
  "Message Queueing",
  "RabbitMQ",
  "Real-time Backend",
  "Drone & UAV Systems",
  "Camera & Image Processing",
  "Path Planning Algorithms",
  "Automation Systems",
  "Distributed Systems",
  "Scalable Backend Architecture",
  "JWT Authentication",
  "OAuth2",
  "Cloud Integration",
  "Testing & CI/CD",
  "Performance Optimization",
  "Algorithm Development",
  "SaaS Backend Developer",
]
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
