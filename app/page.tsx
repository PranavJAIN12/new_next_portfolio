"use client"
import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Moon, Sun,    Coffee, Mail, Github, ArrowRight,  } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from 'next/link';
import Image from 'next/image';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Alert, AlertDescription } from "@/components/ui/alert";

// Custom cursor trail component
const CursorTrail = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e:MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);


  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-50"
      animate={{ x: mousePos.x - 25, y: mousePos.y - 25 }}
      transition={{ type: "spring", damping: 30, stiffness: 200 }}
    >
      <div className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 opacity-100 blur-xl" />
    </motion.div>
  );
};
interface ParallaxTextProps {
  children: React.ReactNode;
}
// Scrolling text component
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ParallaxText = ({ children }: ParallaxTextProps) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div ref={containerRef} className="overflow-hidden whitespace-nowrap">
      <motion.div style={{ x }} className="inline-block">
        <span className="inline-block mr-8">{children}</span>
        <span className="inline-block mr-8">{children}</span>
        <span className="inline-block mr-8">{children}</span>
      </motion.div>
    </div>
  );
};

const Portfolio = () => {
  const [theme, setTheme] = useState('dark');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const projects = [
    {
      id: 1,
      title: "Respondr AI",
      description: "Helping users master cold calls with AI-powered sales roleplay in Respondr: AI Chatbot",
      techs: ["React.js", "JavaScript", "OpenAI API", "Supabase", "Tailwind CSS", "Web Speech API"],
      metrics: ["AI Conversations Processed", "Speech-to-text", "50ms Avg Response Time"],
      image: "/image.png",
      link: "https://respondr.vercel.app/"
    },
    {
      id: 2,
      title: "BlogVerse",
      description: "A modern Markdown-powered blog built for seamless content creation and styling",
      techs: ["NextJs", "ShadCN", "Tailwind", "Remark", "Rehype"],
      metrics: [" Daily Volume", "0.1ms Latency", "Backend Response"],
      image: "/img2.png",
      link: "https://blogverse-ten.vercel.app/"
    },
    // {
    //   id: 3,
    //   title: "Cloud Infrastructure Monitor",
    //   description: "Real-time monitoring system for cloud infrastructure with predictive scaling",
    //   techs: ["Go", "Kubernetes", "Prometheus", "gRPC"],
    //   metrics: ["1000+ Servers", "5B+ Daily Events", "99.99% Accuracy"],
    //   image: "/api/placeholder/600/400",
    //   link: "#"
    // }
  ];

  const skills = {
    "Frontend Development": [
      { name: "HTML and CSS", level: 90 },
      { name: "Javascript", level: 90 },
      { name: "ReactJs", level: 90 },
      { name: "NextJs", level: 90 },
      { name: "Typescript", level: 90 },
      { name: "Bootstrap and Tailwind CSS", level: 90 }
    ],
    "Backend Development": [
      { name: "NodeJS", level: 90 },
      { name: "ExpressJS", level: 90 },
      { name: "REST API", level: 90 },
      { name: "Supabase", level: 90 }
    ],
    "Tools & Technologies": [
      { name: "Git and Github", level: 90 },
      { name: "Figma", level: 90 },
      { name: "UI/UX", level: 90 },
      { name: "C++", level: 90 }
    ]
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'} transition-colors duration-300`}>
      <CursorTrail />
      
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500 transform origin-left z-50"
        style={{ scaleX }}
      />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40">
        <motion.div 
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className="backdrop-blur-lg  border-b border-white/10"
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

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-6xl font-bold mb-8 leading-tight">
            Crafting impactful{" "}
              <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                web solutions
              </span>
              {" "}with modern technologies
            </h1>
            <p className="text-xl text-gray-400 mb-12">
            Passionate and skilled Web Developer with expertise in Full stack development, seeking opportunities to leverage technical proficiency and creative problem-solving abilities to contribute to innovative projects and deliver exceptional user experiences.
</p>
            <div className="flex items-center space-x-6">
              <Link href={"#projects"}>
             

              
              <Button size="lg" className="bg-gradient-to-r from-purple-500 to-blue-500">
                View Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              </Link>
              <a href="https://github.com/PranavJAIN12" target='_blank'>
              
              <Button variant="ghost" size="lg">
                <Github className="mr-2 h-5 w-5" />
                GitHub Profile
              </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      

      {/* Stats Section */}
      <section className="py-20 border-t border-white/10">
  <div className="container mx-auto px-6">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="p-6 rounded-lg bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-white/10"
      >
        <h3 className="text-4xl font-bold mb-2">50+</h3>
        <p className="text-gray-400">Projects Completed</p>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="p-6 rounded-lg bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-white/10"
      >
        <h3 className="text-4xl font-bold mb-2">5+</h3>
        <p className="text-gray-400">Technologies Mastered</p>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="p-6 rounded-lg bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-white/10"
      >
        <h3 className="text-4xl font-bold mb-2">100%</h3>
        <p className="text-gray-400">Client Satisfaction</p>
      </motion.div>
    </div>
  </div>
</section>


      {/* Projects Section */}
      <section className="py-20 border-t border-white/10" id='projects'>
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16">Featured Projects</h2>
          <div className="grid grid-cols-1 gap-16">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="overflow-hidden bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-white/10">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="p-8">
                        <Link href={project.link} target='_blank'>
                        
                        <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                        </Link>
                        <p className="text-gray-400 mb-6">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.techs.map(tech => (
                            <span key={tech} className="px-3 py-1 rounded-full bg-white/10 text-sm">
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="space-y-2">
                          {project.metrics.map(metric => (
                            <div key={metric} className="flex items-center text-sm text-gray-400">
                              <ArrowRight className="h-4 w-4 mr-2 text-purple-500" />
                              {metric}
                            </div>
                          ))}
                          <p className='font-bold text-sm my-6 py-3'>Click on project title to visit the project</p>
                          
                          
                        </div>
                      </div>
                      <div className="relative">
                        <Image 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover" height={"50"} width={100}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 border-t border-white/10">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16">Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {Object.entries(skills).map(([category, items]) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h3 className="text-xl font-semibold mb-6">{category}</h3>
                {items.map(skill => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>{skill.name}</span>
                      {/* <span>{skill.level}%</span> */}
                    </div>
                    <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
                      />
                    </div>
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 border-t border-white/10">
  <div className="container mx-auto px-6">
    <div className="max-w-2xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-8">Lets Build Something Amazing</h2>
      <p className="text-gray-400 mb-12">
        Currently open to interesting projects and collaborations.
        Get in touch to discuss how we can work together.
      </p>
      <div className="flex justify-center space-x-6">
        <a
          href="mailto:masterpranavjain2@gmail.com"
          className="px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center hover:shadow-lg"
        >
          <Mail className="mr-2 h-5 w-5" />
          Send Message
        </a>
        <Button variant="ghost" size="lg">
          <Coffee className="mr-2 h-6 w-5 text-lg" />
          Buy me a coffee
        </Button>
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default Portfolio;