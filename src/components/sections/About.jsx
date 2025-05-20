import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {

    const programmingSkills = ["C/C++", "Python", "Java", "HTML5", "CSS3", "JavaScript", "MATLAB", "Git", "Bash"];
    const hardwareSkills = ["Raspberry Pi", "Arduino","Analog Discovery 3", "PCB Assembly", "SPI communication", "RFID Systems"];
    const softwareSkills = ["Visual Studio", "Microsoft Office", "PSpice", "Autodesk Inventor", "AutoCAD", "OpenGL", "Linux"];
    const electronicTools = ["Oscilloscope", "Signal Generator", "Multimeter", "Logic Analyzer", "Soldering"]

    return <section id="about" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-center">
                    About Me
                </h2>

                <div className="rounded-xl p-1 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6 text-center">
                        I am a third-year Electrical and Biomedical Engineering student at McMaster University. With a strong interest in both hardware and software 
                        systems, I’ve been actively learning new skills and building projects that apply core engineering principles to bring my ideas to life. 
                        I’m currently seeking internship opportunities for Fall 2025 where I can further develop my technical skills in a hands-on and collaborative 
                        environment. I created this personal portfolio website to showcase my projects, experiences, and technical background. This portfolio is built 
                        with React.js and styled using Tailwind CSS, as well as using github pages for easy deployments with every push. The site is continuously changing as I explore new tools and frameworks. I’m excited to take on 
                        meaningful engineering challenges that allow me to grow and contribute to impactful solutions.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Programming</h3>
                            <div className="flex flex-wrap gap-2">
                                {programmingSkills.map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px-rgba(59, 130, 246, 0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Hardware</h3>
                            <div className="flex flex-wrap gap-2">
                                {hardwareSkills.map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px-rgba(59, 130, 246, 0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Software</h3>
                            <div className="flex flex-wrap gap-2">
                                {softwareSkills.map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px-rgba(59, 130, 246, 0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Electronic Tools</h3>
                            <div className="flex flex-wrap gap-2">
                                {electronicTools.map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px-rgba(59, 130, 246, 0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-8"> {/* change md:grid-cols-1 to md:grid-cols-2 for work experience*/}
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Education</h3>
                        <ul className="text-gray-300 space-y-0.5 mt-4">
                            <h4>
                                <strong>Glenview Park Secondary School</strong>: Cambridge, Ontario (Sept. 2019 - Jun. 2023)
                            </h4>
                            <li className="list-disc list-inside pl-5">
                                Graduated with Ontario Secondary School Diploma and International Baccalaureate Diploma
                            </li>
                        </ul>
                        <ul className="text-gray-300 space-y-0.5 mt-4">
                            <h4>
                                <strong>McMaster University</strong>: Hamilton, Ontario (Expected Apr. 2028)
                            </h4>
                            <li className="list-disc list-inside pl-5">
                                Pursuing a B.Eng in Electrical and Biomedical Engineering
                            </li>
                            <li className="list-disc list-inside pl-5">
                                Relevant Coursework: Introduction to Circuit Analysis, Principles of Programming, Data Structures and Algorithms, Circuits and Systems, Health Solutions Design Projects I
                            </li>
                        </ul>
                    </div>

                    {/* Work experience */}
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Work Experience</h3>
                        <ul className="text-gray-300 space-y-0.5 mt-4">
                            <h4>
                                <strong>Inclusion and Day Camp Leader</strong>: Cambridge, Ontario (Mar. 2023 - Aug. 2023)
                            </h4>
                            <h5 className="italic text-blue-500">
                                Silverheights Neighbourhood Association
                            </h5>
                            <li className="list-disc list-inside pl-5">
                                Developed weekly schedules for activities that balanced diverse interests and age groups. This ensured a smooth flow and enhanced engagement, receiving praise from both campers and staff for its organization and inclusion.
                            </li>
                            <li className="list-disc list-inside pl-5">
                                Served 100+ children daily and helped create a welcoming environment, resulting in positive parent feedback.
                            </li>
                        </ul>
                        <ul className="text-gray-300 space-y-0.5 mt-4">
                            <h4>
                                <strong>Faculty of Engineering Welcome Week Representative</strong>: Hamilton, Ontario (Mar. 2024 - Present)
                            </h4>
                            <h5 className="italic text-blue-500">
                                McMaster University
                            </h5>
                            <li className="list-disc list-inside pl-5">
                                Led Welcome Week activities that focused on introducing 6349 first year students to the academics, extracurriculars, and culture of McMaster University.
                            </li>
                            <li className="list-disc list-inside pl-5">
                                Emphasized the significance of inclusivity by raising awareness for Youth Mental Health Canada through charity booths that provided incentives for donations, leading to over $2500 raised through Square and cash donations.
                            </li>
                        </ul>
                        <ul className="text-gray-300 space-y-0.5 mt-4">
                            <h4>
                                <strong>Software Sub-team Member</strong>: Hamilton, Ontario (Jan. 2025 - Present)
                            </h4>
                            <h5 className="italic text-blue-500">
                                McMaster University
                            </h5>
                            <li className="list-disc list-inside pl-5">
                                Developing autonomous navigation algorithms for AUV path planning and obstacle avoidance using sensor data.
                            </li>
                            <li className="list-disc list-inside pl-5">
                                Currently researching control algorithms in a 15-person team, focusing on signal processing for noise filtering, real-time correction, and AUV sensor accuracy, and using ROS for analysis and debugging.
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </RevealOnScroll>

    </section>
}