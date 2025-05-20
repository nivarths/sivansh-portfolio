import { RevealOnScroll } from "../RevealOnScroll"
import profileImg from '../../images/IMG_5798.jpeg';
import { Github, Linkedin, Mail } from "lucide-react";


export const Home = () => {
    return <section id="home" className="min-h-screen flex items-center justify-center relative">
        <RevealOnScroll>
            <div className="text-center z-10 px-4">
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 mx-auto mb-6">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 opacity-30 blur-xl animate-pulse"></div>
                        <img src={profileImg} alt="Profile" className="relative z-10 rounded-full w-full h-full object-cover border-2 border-blue-500"/>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-right">Hi, I'm Sivansh</h1>

                <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                    An Electrical and Biomedical engineering student building creative solutions by combining software and hardware. Explore my projects, experience, and the tools I use to bring ideas to life.
                </p>

                <div className="flex justify-center space-x-4">
                    <a href="#projects" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">View Projects</a>
                    <a href="#contact" className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10">Contact Me</a>
                </div>

                <div className="flex justify-center gap-8 pt-7">
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
            </div>
        </RevealOnScroll>
    </section>
}