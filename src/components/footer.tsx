"use client"

import { motion } from "framer-motion"
import ScrollButton from "@/components/ScrollButton"

export default function Footer() {
    return (
        <footer id="footer" className="relative py-6"> {/* Added padding */}
        <div className="container mx-auto px-6"> {/* Adjusted padding */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 max-w-5xl mx-auto"> {/* Adjusted gap */}
            <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold">Engr.Ratul</h2>
            <p className="text-muted-foreground mt-1">Creative Developer</p>
            </div>
            <div className="flex gap-8"> {/* Adjusted gap */}
            <motion.a
                href="#"
                whileHover={{ y: -3 }}
                className="text-muted-foreground hover:text-foreground"
            >
                Twitter
            </motion.a>
            <motion.a
                href="#"
                whileHover={{ y: -3 }}
                className="text-muted-foreground hover:text-foreground"
            >
                GitHub
            </motion.a>
            <motion.a
                href="#"
                whileHover={{ y: -3 }}
                className="text-muted-foreground hover:text-foreground"
            >
                LinkedIn
            </motion.a>
            </div>
            <p className="text-sm text-muted-foreground">
            © 2024 Engr.Ratul. All rights reserved.
            </p>
        </div>
        </div>
        <ScrollButton direction="up" targetId="home" />
    </footer>
    )
}