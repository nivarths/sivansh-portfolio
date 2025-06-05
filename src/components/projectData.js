import recordPlayerImg from '../images/IMG_2897.jpg';
import gpsAntennaImg from '../images/IMG_2797.jpeg';
import spaceInvadersPNG from '../images/space-invaders.png';
import safeSizzlePNG from '../images/safesizzle final prototype.png';

export const projectData = [
    {
        title: "135.6 RFID FM",
        description: "A Raspberry Pi based digital record player that uses an RFID scanner to play Spotify albums.",
        image: recordPlayerImg,
        tags: ["C++", "Python", "Raspberry Pi", "Git"],
        link: "https://github.com/nivarths/135.6-RFID-FM"
    },
    {
        title: "SafeSizzle",
        description: "A gas-detection system using Raspberry Pi and servo for auto-shutoff.",
        image: safeSizzlePNG,
        tags: ["Python", "Raspberry Pi"],
        link: "https://github.com/nivarths/Safe-Sizzle"
    },
    {
        title: "GPS Antenna",
        description: "Custom PCB soldered for GPS receiver at McMaster IEEE RF workshop.",
        image: gpsAntennaImg,
        tags: ["PCB Assembly", "Spectrum Analyzer"],
        link: "https://github.com/nivarths/GPS-Antenna"
    },
    {
        title: "Space Invaders",
        description: "Retro C++ game built using OpenGL and OOD principles.",
        image: spaceInvadersPNG,
        tags: ["C++", "Git", "Bash"],
        link: "https://github.com/nivarths/space-invaders"
    },

]