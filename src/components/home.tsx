'use client'

import { useRouter } from 'next/navigation'
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import ScrollButton from "@/components/ScrollButton"

export default function Home() {
    const router = useRouter()

    const scrollToContact = () => {
    const contactElement = document.getElementById('contact')
    if (contactElement) {
        contactElement.scrollIntoView({ behavior: 'smooth' })
    }
    }

    return (
    <section id="hero" className="relative min-h-screen">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-primary/[0.02]" />
        <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-3xl">
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8 px-4"
        >
            <h2 className="text-4xl md:text-7xl font-bold">Creative Developer</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Crafting digital experiences through code and creativity
            </p>
            <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 w-24 bg-primary mx-auto"
            />
            <Button
            size="lg"
            className="mt-8"
            onClick={scrollToContact}
            >
            Let's work together
            </Button>
        </motion.div>
        </div>
        <ScrollButton direction="down" targetId="footer" />
    </section>
    )
}
