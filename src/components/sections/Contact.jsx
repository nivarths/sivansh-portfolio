import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll"
import emailjs from "emailjs-com"

export const Contact = () => {

    const [formData, setFormData] = useState({
        name:"",
        email:"",
        message:""
    })

    const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;
    const handleSubmit = (e) => {
        e.preventDefault();
        
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then((result) => {
            alert("Message Sent!");
            setFormData({name: "", email: "", message: ""})
            
        }).catch(() => alert("Oops! Something went wrong. Please try again."))
    }

    return <section id="contact" className="w-full flex flex-col items-center justify-center min-h-screen py-20 px-4">
        <div className="w-full max-w-5xl">
            <RevealOnScroll>
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-center">
                        Get In Touch
                    </h2>
                    <form className="w-full space-y-6" onSubmit={handleSubmit}>
                        <div className="relative">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                className="block w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                placeholder="Name"
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                            />
                        </div>
                        <div className="relative">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                className="block w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                placeholder="example@gmail.com"
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                            />
                        </div>
                        <div className="relative">
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={10}
                                value={formData.message}
                                className="block w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                placeholder="Your message..."
                                onChange={(e) => setFormData({...formData, message: e.target.value})}
                            />
                        </div>
                        <button type="submit" className="block w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">Send Message</button>
                    </form>
            </RevealOnScroll>
        </div>
    </section>
}