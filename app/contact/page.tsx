"use client"
import { useState, FormEvent, ChangeEvent } from 'react';
import { Mail, MapPin, Github, Linkedin, Send, Sun, Moon, IdCard } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from 'next/link';
import { motion } from 'framer-motion';

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export default function Contact() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            // Add your form submission logic here
            console.log('Form submitted:', formData);

            // Example API call (uncomment and modify as needed):
            // const response = await fetch('/api/contact', {
            //   method: 'POST',
            //   headers: {
            //     'Content-Type': 'application/json',
            //   },
            //   body: JSON.stringify(formData),
            // });
            // const data = await response.json();

            // Clear form after successful submission
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const [theme, setTheme] = useState('dark');

    return (
        <div className="min-h-screen bg-black text-white pt-20">
            <header className="fixed top-0 left-0 right-0 z-40">
                <motion.div
                    initial={{ y: -100 }}
                    animate={{ y: 0 }}
                    className="backdrop-blur-lg border-b border-white/10"
                >
                    <nav className="container mx-auto px-6 py-4">
                        <div className="flex justify-between items-center">
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent"
                            >
                                <Link href={"/"}>
                                    Pranav Jain Portfolio
                                </Link>
                            </motion.div>
                            <div className="flex items-center space-x-6">
                                <Button variant="ghost" size="sm" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                                    {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                                </Button>
                                <a href="/Pranav_resume.pdf"
                                    download={"Pranav resume.pdf"}>
                                    <Button variant="ghost" size="sm">Resume</Button>
                                </a>
                                <Link href={"/contact"}>
                                    <Button size="sm">Contact</Button>
                                </Link>
                            </div>
                        </div>
                    </nav>
                </motion.div>
            </header>
            <div className="container mx-auto px-6 py-12">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Have a project in mind or just want to chat? Feel free to reach out.
                        I am always interested in hearing about new opportunities and collaborations.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <Card className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-white/10">
                            <CardContent className="p-6">
                                <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                                <div className="space-y-6">
                                    <div className="flex items-center space-x-4">
                                        <div className="p-3 rounded-full bg-purple-500/20">
                                            <IdCard className="w-6 h-6 text-purple-500" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-400">Name</p>
                                            <p className="font-medium">Pranav Jain</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <div className="p-3 rounded-full bg-purple-500/20">
                                            <Mail className="w-6 h-6 text-purple-500" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-400">Email</p>
                                            <p className="font-medium">masterpranavjain2@gmail.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <div className="p-3 rounded-full bg-purple-500/20">
                                            <MapPin className="w-6 h-6 text-purple-500" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-400">Location</p>
                                            <p className="font-medium">Haryana, India</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 pt-8 border-t border-white/10">
                                    <h3 className="text-lg font-semibold mb-4">Connect with me</h3>
                                    <div className="flex space-x-4">
                                        <a href="https://github.com/PranavJAIN12" target="_blank" rel="noopener noreferrer"
                                            className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                                            <Github className="w-6 h-6" />
                                        </a>
                                        <a href="https://www.linkedin.com/in/pranav-jain-32179722a/" target="_blank" rel="noopener noreferrer"
                                            className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                                            <Linkedin className="w-6 h-6" />
                                        </a>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Contact Form */}
                    <Card className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-white/10">
                        <CardContent className="p-6">
                            <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm text-gray-400">Your Name</label>
                                        <Input
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="bg-white/5 border-white/10 focus:border-purple-500"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm text-gray-400">Your Email</label>
                                        <Input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="bg-white/5 border-white/10 focus:border-purple-500"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400">Subject</label>
                                    <Input
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="bg-white/5 border-white/10 focus:border-purple-500"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400">Message</label>
                                    <Textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="bg-white/5 border-white/10 focus:border-purple-500 min-h-[150px]"
                                        required
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
                                >
                                    Send Message
                                    <Send className="ml-2 w-4 h-4" />
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}