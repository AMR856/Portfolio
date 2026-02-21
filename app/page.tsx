import type { Metadata } from "next";
import Hero from "@/components/hero";
import About from "@/components/about";
import TechStack from "@/components/tech-stack";
import Projects from "@/components/projects";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "Ahmed Fawzy | Portfolio",
  description: "Professional Software Developer",
  keywords: [
    "Software Developer",
    "Full Stack Developer",
    "Node.js Developer",
    "Backend Developer",
    "C# Developer",
    "PHP Developer",
    "REST API Developer",
    "RabbitMQ",
    "WhatsApp API",
    "Meta API",
    "Express.js",
    "TypeScript",
    "MongoDB",
    "Redis",
    "Microservices",
    "Message Queueing",
    "Real-time Backend",
    "Webhooks",
    "Meta Automation",
    "WhatsApp Notifications",
    "Custom Backend Systems",
    "High Performance Backend",
    "Ahmed Fawzy Developer",
    "Freelance Developer",
    "Backend Engineer",
    "SaaS Developer",
    "Distributed Systems",
    "System Integration",
    "API Development",
    "OAuth2",
    "JWT Authentication",
    "Cloud Messaging",
    "Facebook Pages API",
    "Auto Messaging System",
  ],
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
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
