'use client'

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Header() {
    const [theme, setTheme] = useState("dark")
    const [activeSection, setActiveSection] = useState("hero")

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["hero", "about", "projects", "blog", "contact"]
            const currentSection = sections.find(section => {
                const element = document.getElementById(section)
                if (element) {
                    const rect = element.getBoundingClientRect()
                    // Adjust the detection area to be more accurate
                    return rect.top <= 200 && rect.bottom >= 100
                }
                return false
            })
            if (currentSection) {
                setActiveSection(currentSection)
            }
        }

        // Set initial active section
        handleScroll()

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark")
    }, [theme])

    const scrollToSection = (sectionId: string) => {
        // Map "home" to "hero" for navigation
        const targetId = sectionId === "home" ? "hero" : sectionId
        const element = document.getElementById(targetId)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    const getActiveClass = (item: string) => {
        // Map "home" to "hero" for active state checking
        if (item.toLowerCase() === "home") {
            return activeSection === "hero" ? "text-primary" : "text-muted-foreground"
        }
        return activeSection === item.toLowerCase() ? "text-primary" : "text-muted-foreground"
    }

    const isActive = (item: string) => {
        if (item.toLowerCase() === "home") {
            return activeSection === "hero"
        }
        return activeSection === item.toLowerCase()
    }

    return (
        <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-lg border-b">
            <div className="container mx-auto px-4">
                <div className="flex h-16 items-center justify-between gap-4">
                    <h1 className="text-2xl font-bold">Engr.Ratul</h1>
                    <nav className="hidden md:flex items-center gap-8">
                        {["Home", "About", "Projects", "Blog", "Contact"].map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item.toLowerCase())}
                                className={`relative py-1 text-sm font-medium transition-colors hover:text-primary ${getActiveClass(item)}`}
                            >
                                {item}
                                {isActive(item) && (
                                    <motion.div
                                        layoutId="activeSection"
                                        className="absolute -bottom-[1px] left-0 right-0 h-0.5 bg-primary"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </button>
                        ))}
                    </nav>
                    <div className="flex items-center gap-2">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="md:hidden">
                                    <Menu className="h-5 w-5" />
                                    <span className="sr-only">Open menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                                <nav className="flex flex-col gap-4">
                                    {["Home", "About", "Projects", "Blog", "Contact"].map((item) => (
                                        <button
                                            key={item}
                                            onClick={() => {
                                                scrollToSection(item.toLowerCase())
                                                const collectionItem = document.querySelector("[data-radix-collection-item]") as HTMLElement
                                                if (collectionItem) {
                                                    collectionItem.click()
                                                }
                                            }}
                                            className={`flex items-center py-2 text-lg font-medium transition-colors hover:text-primary ${getActiveClass(item)}`}
                                        >
                                            {item}
                                        </button>
                                    ))}
                                </nav>
                            </SheetContent>
                        </Sheet>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            className="rounded-full"
                        >
                            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                            <span className="sr-only">Toggle theme</span>
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    )
}