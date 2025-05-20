import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 text-center border-t border-white/10">
      <p className="mb-4 text-white text-2xl">Connect With Me Here!</p>

      <div className="flex justify-center gap-8">
        <a
        href="https://www.linkedin.com/in/sivansh-nivarthi/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn Profile"
        className="text-white hover:text-blue-400 transition duration-300"
        >
        <Linkedin className="w-8 h-8 sm:w-6 sm:h-6" />
        </a>
        <a
        href="https://github.com/nivarths"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Github Profile"
        className="text-white hover:text-blue-400 transition duration-300"
        >
        <Github className="w-8 h-8 sm:w-6 sm:h-6" />
        </a>
        <a
        href="mailto:nivarths@mcmaster.ca"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Send me an email"
        className="text-white hover:text-blue-400 transition duration-300"
        >
        <Mail className="w-8 h-8 sm:w-6 sm:h-6" />
        </a>
      </div>

      <p className="mt-6 text-sm text-white/50">
        © {new Date().getFullYear()} Sivansh Nivarthi. All rights reserved.
      </p>
    </footer>
  );
};
