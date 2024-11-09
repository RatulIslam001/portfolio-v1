"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function About() {
    const { scrollYProgress } = useScroll()

    return (
    <section id="about" className="py-20 md:py-32">
        <div className="container mx-auto px-4">
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto"
        >
            <div className="space-y-6">
            <div className="space-y-2">
                <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
                <div className="h-1 w-12 bg-primary" />
            </div>
            <p className="text-lg text-muted-foreground">
                I'm a creative developer passionate about building unique digital experiences. 
                With expertise in both design and development, I create engaging web applications 
                that push the boundaries of what's possible on the web.
            </p>
            <div className="space-y-4">
                <h3 className="text-xl font-semibold">Skills</h3>
                <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "Javascript", "TypeScript", "Node.js", "Express.js","MongoDB", "Tailwind CSS", "UI/UX Design"].map((skill) => (
                    <span
                    key={skill}
                    className="px-4 py-2 bg-primary/10 rounded-full text-sm font-medium"
                    >
                    {skill}
                    </span>
                ))}
                </div>
            </div>
            <Button variant="outline" className="gap-2">
                Download Resume <ArrowRight className="w-4 h-4" />
            </Button>
            </div>
            <motion.div
            className="relative h-[400px] rounded-2xl overflow-hidden"
            style={{
                scale: useTransform(scrollYProgress, [0, 1], [1.2, 1]),
                y: useTransform(scrollYProgress, [0, 1], [0, 100]),
            }}
            >
            <img
                src="https://img.freepik.com/premium-vector/man-profile-cartoon_18591-58482.jpg?w=360"
                alt="Profile"
                className="w-full h-full object-cover"
            />
            </motion.div>
        </motion.div>
        </div>
    </section>
    )
}
