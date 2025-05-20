import { RevealOnScroll } from "../RevealOnScroll"
import { ExternalLink, Github } from 'lucide-react';
import recordPlayerImg from '../../images/IMG_2897.jpg';
import gpsAntennaImg from '../../images/IMG_2797.jpeg';
import spaceInvadersPNG from '../../images/space-invaders.png';


export const Projects = () => {
    return <section id="projects" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
            <div className="max-width-5xl mx-auto px-4">   
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-center">
                    Featured Projects
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px-rgba(59, 130, 246, 0.2)] transition">
                        <img src={recordPlayerImg} alt="Digital-Record-Player" className="rounded-lg mb-4 w-full h-64 object-contain bg-black"/>
                        <h3 className="text-xl font-bold mb-2">135.6 RFID FM</h3>
                        <p className="text-gray-400 mb-3">
                            A Raspberry Pi based digital record player that uses an RFID scanner to play Spotify albums.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["C++", "Python", "Raspberry Pi", "Git"].map((tech, key) =>(
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px-rgba(59, 130, 246, 0.1)] transition-all">
                                        {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a 
                            href="https://github.com/nivarths/135.6-RFID-FM" 
                            className="text-blue-400 hover:text-blue-300 transition-colours inline-flex items-center gap-1"
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                                View Project <ExternalLink className="w-4 h-4"/> 
                            </a>

                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px-rgba(59, 130, 246, 0.2)] transition">
                        <img src="https://github.com/nivarths/Safe-Sizzle/blob/main/safesizzle%20final%20prototype.png?raw=true" alt="SafeSizzle" className="rounded-lg mb-4 w-full h-64 object-contain bg-black"/>
                        <h3 className="text-xl font-bold mb-2">SafeSizzle</h3>
                        <p className="text-gray-400 mb-3">
                            IBEHS 1P10 Design Project that utilizes a Raspberry Pi to integrate a gas sensor for detecting hazardous gases, triggering automatic knob rotation to the off position.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Python", "Raspberry Pi", ].map((tech, key) =>(
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px-rgba(59, 130, 246, 0.1)] transition-all">
                                        {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a 
                            href="https://github.com/nivarths/Safe-Sizzle" 
                            className="text-blue-400 hover:text-blue-300 transition-colours inline-flex items-center gap-1"
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                                View Project <ExternalLink className="w-4 h-4"/> 
                            </a>

                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px-rgba(59, 130, 246, 0.2)] transition">
                        <img src={gpsAntennaImg} alt="GPS-Antenna" className="rounded-lg mb-4 w-full h-64 object-contain bg-black"/>
                        <h3 className="text-xl font-bold mb-2">GPS Antenna</h3>
                        <p className="text-gray-400 mb-3">
                            Built a GPS antenna system as part of McMaster IEEE’s Intro to RF Design workshop. Assembled and soldered a custom PCB and connected a u-blox GPS module.                        
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["PCB Assembly", "Spectrum Analyzer"].map((tech, key) =>(
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px-rgba(59, 130, 246, 0.1)] transition-all">
                                        {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a 
                            href="https://github.com/nivarths/GPS-Antenna" 
                            className="text-blue-400 hover:text-blue-300 transition-colours inline-flex items-center gap-1"
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                                View Project <ExternalLink className="w-4 h-4"/> 
                            </a>

                        </div>
                    </div>
                    
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px-rgba(59, 130, 246, 0.2)] transition">
                        <img src={spaceInvadersPNG} alt="Space-Invaders" className="rounded-lg mb-4 w-full h-64 object-contain bg-black"/>
                        <h3 className="text-xl font-bold mb-2">Space Invaders</h3>
                        <p className="text-gray-400 mb-3">
                            A retro-style Space Invaders clone built from scratch using C++ and OOD principles and OpenGL.                
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["C++", "Git", "Bash"].map((tech, key) =>(
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px-rgba(59, 130, 246, 0.1)] transition-all">
                                        {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a 
                            href="https://github.com/nivarths/space-invaders" 
                            className="text-blue-400 hover:text-blue-300 transition-colours inline-flex items-center gap-1"
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                                View Project <ExternalLink className="w-4 h-4"/> 
                            </a>

                        </div>
                    </div>
                </div>

                <div className="mt-8 flex justify-center">
                    <a 
                    href="https://github.com/nivarths" 
                    className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] inline-flex items-center gap-2"                    target="_blank"
                    rel="noopener noreferrer"
                    ><Github className="w-4 h-4"/> View More Here <ExternalLink className="w-4 h-4"/> </a>
                </div>

            </div>
        </RevealOnScroll>
    </section>
}
