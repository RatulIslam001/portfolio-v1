"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const projects = [
    {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution built with MERN stack",
    image: "https://miro.medium.com/v2/resize:fit:1018/1*iAu65xDmvpVdBJgps6EDEw.png",
    tags: ["React", "Node.js", "MongoDB"],
    link: "#"
    },
    {
    title: "Portfolio Website",
    description: "A creative portfolio website with animations",
    image: "https://themefisher.com/blog-thumb/bootstrap-portfolio-templates.webp",
    tags: ["Next.js", "Framer Motion", "Tailwind"],
    link: "#"
    },
    {
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media management",
    image: "https://media.sproutsocial.com/uploads/2023/01/Social-media-dashboard-Final.svg",
    tags: ["React", "D3.js", "Firebase"],
    link: "#"
    }
]

// Changed the function name to Component to match v0's requirements
export default function Component() {
    return (
        <section id="projects" className="py-20 md:py-32 bg-muted/50">
        <div className="container mx-auto px-4">
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12 max-w-5xl mx-auto"
        >
            <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Here are some of my recent works that showcase my skills and expertise
            </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
                <motion.a
                key={project.title}
                href={project.link}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group block"
                >
                <Card className="overflow-hidden border-none shadow-lg h-full">
                    <div className="relative h-48 overflow-hidden">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    </div>
                    <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-3 py-1 bg-primary/10 rounded-full text-sm"
                        >
                            {tag}
                        </span>
                        ))}
                    </div>
                    </CardContent>
                </Card>
                </motion.a>
            ))}
            </div>
        </motion.div>
        </div>
    </section>
    )
}