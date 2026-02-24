"use client";

import { Linkedin, Github, Facebook } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/70 backdrop-blur-md py-8 border-t border-gray-200/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Name & Role */}
          <div className="text-center md:text-left">
            <p className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-destructive">
              Amr Alnus
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Backend & Flutter Developer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/amr-alnus-64a4ab244/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-primary/20 transition"
            >
              <Linkedin className="h-5 w-5 text-primary" />
            </a>
            <a
              href="https://github.com/AMR856"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-primary/20 transition"
            >
              <Github className="h-5 w-5 text-primary" />
            </a>
            <a
              href="https://www.facebook.com/amer.alnas.90"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-primary/20 transition"
            >
              <Facebook className="h-5 w-5 text-primary" />
            </a>
<a
  href="https://khamsat.com/user/amr_alnas"
  target="_blank"
  rel="noopener noreferrer"
  className="p-2 rounded-full hover:bg-primary/20 transition overflow-hidden inline-block"
>
  <div className="w-5 h-5 overflow-hidden rounded-full">
    <Image
      src="/khamsaticon.png"
      alt="Khamsat"
      width={20}
      height={20}
      className="rounded-full transform scale-125 transition-transform duration-300"
    />
  </div>
</a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right text-sm text-muted-foreground">
            © {currentYear} Amr Alnus. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}