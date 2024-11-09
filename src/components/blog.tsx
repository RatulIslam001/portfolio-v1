"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const blogPosts = [
    {
    title: "Building Modern Web Applications",
    date: "March 15, 2024",
    description: "Exploring the latest trends in web development",
    link: "#"
    },
    {
    title: "The Power of Animation in UX",
    date: "March 10, 2024",
    description: "How animations enhance user experience",
    link: "#"
    },
    {
    title: "Mastering React Hooks",
    date: "March 5, 2024",
    description: "Deep dive into React Hooks and custom hooks",
    link: "#"
    }
]

export default function Blog() {
    return (
    <section id="blog" className="py-20 md:py-32">
        <div className="container mx-auto px-4">
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12 max-w-5xl mx-auto"
        >
            <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Latest Articles</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Thoughts and insights about web development and design
            </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
                <motion.a
                key={post.title}
                href={post.link}
                initial={{ opacity: 0, y: 50  }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group block"
            >
                <Card className="h-full border-none shadow-lg">
                <CardContent className="p-6">
                    <time className="text-sm text-muted-foreground">{post.date}</time>
                    <h3 className="text-xl font-bold mt-2 mb-3 group-hover:text-primary transition-colors">
                        {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{post.description}</p>
                    <div className="flex items-center gap-2 text-sm font-medium text-primary">
                        Read More <ExternalLink className="w-4 h-4" />
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
