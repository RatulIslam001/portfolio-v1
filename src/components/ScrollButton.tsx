"use client"

import { useState, useEffect } from "react"
import { ArrowUp, ArrowDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface ScrollButtonProps {
    direction: string;
    targetId: string;
}

export default function ScrollButton({ direction, targetId }: ScrollButtonProps) {
    const [isAtTop, setIsAtTop] = useState(true)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
    const toggleVisibility = () => {
        if (window.scrollY > 100) {
        setIsVisible(true)
        setIsAtTop(false)
        } else {
        setIsAtTop(true)
        // Keep the button visible when at top, so user can scroll to footer
        setIsVisible(window.scrollY === 0)
        }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
    }, [])

    const handleScroll = () => {
    if (isAtTop) {
      // Scroll to footer
        document.getElementById('footer')?.scrollIntoView({ behavior: "smooth" })
    } else {
      // Scroll to top
        window.scrollTo({ top: 0, behavior: "smooth" })
    }
    }

    return (
    <AnimatePresence>
        {isVisible && (
        <motion.button
            onClick={handleScroll}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-4 right-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-colors hover:bg-primary/90"
        >
            {isAtTop ? (
            <ArrowDown className="h-5 w-5" />
            ) : (
            <ArrowUp className="h-5 w-5" />
            )}
            <span className="sr-only">
            Scroll to {isAtTop ? "footer" : "top"}
            </span>
        </motion.button>
        )}
    </AnimatePresence>
    )
}
