'use client'

import { useState } from "react"
import { motion } from "framer-motion"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [errors, setErrors] = useState<Record<string, string>>({})
    const { toast } = useToast()

    const validateForm = (formData: FormData) => {
        const newErrors: Record<string, string> = {}
        if (!formData.get("name")) newErrors.name = "Name is required"
        if (!formData.get("email")) newErrors.email = "Email is required"
        if (!formData.get("message")) newErrors.message = "Message is required"
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        
        const form = e.currentTarget
        const formData = new FormData(form)
        const formJson = Object.fromEntries(formData)
        
        if (validateForm(formData)) {
            setIsSubmitting(true)
            try {
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    body: JSON.stringify(formJson),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                
                if (response.ok) {
                    toast({
                        title: "Success! 🎉",
                        description: "Your message has been sent successfully. I'll get back to you soon!",
                        className: "bg-green-500 text-white border-none",
                    })
                    form.reset()
                    setErrors({})
                } else {
                    const errorData = await response.json()
                    console.error('Error data:', errorData)
                    throw new Error('Failed to send message')
                }
            } catch (error) {
                console.error('Error:', error)
                toast({
                    variant: "destructive",
                    title: "Uh oh! Something went wrong.",
                    description: "There was a problem sending your message. Please try again.",
                })
            } finally {
                setIsSubmitting(false)
            }
        } else {
            toast({
                variant: "destructive",
                title: "Form Validation Error",
                description: "Please fill in all required fields correctly.",
            })
        }
    }

    return (
        <section id="contact" className="py-20 md:py-32 bg-muted/50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl mx-auto"
                >
                    <Card className="overflow-hidden border-none shadow-xl">
                        <CardHeader className="space-y-1 text-center bg-primary/5 p-6">
                            <CardTitle className="text-3xl font-bold">Get in Touch</CardTitle>
                            <CardDescription className="text-lg">
                                Have a project in mind? Let's talk about it.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="p-8">
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Name</Label>
                                        <Input
                                            id="name"
                                            name="name"
                                            placeholder="Enter your name"
                                            className={`h-12 bg-background/50 ${errors.name ? "border-red-500" : ""}`}
                                        />
                                        {errors.name && (
                                            <span className="text-sm text-red-500">{errors.name}</span>
                                        )}
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="Enter your email"
                                            className={`h-12 bg-background/50 ${errors.email ? "border-red-500" : ""}`}
                                        />
                                        {errors.email && (
                                            <span className="text-sm text-red-500">{errors.email}</span>
                                        )}
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="subject">Subject</Label>
                                    <Input
                                        id="subject"
                                        name="subject"
                                        placeholder="What's this about?"
                                        className="h-12 bg-background/50"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="message">Message</Label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        placeholder="Write your message here..."
                                        className={`min-h-[150px] bg-background/50 resize-none ${errors.message ? "border-red-500" : ""}`}
                                    />
                                    {errors.message && (
                                        <span className="text-sm text-red-500">{errors.message}</span>
                                    )}
                                </div>
                                <Button className="w-full h-12 text-lg gap-2" disabled={isSubmitting}>
                                    {isSubmitting ? (
                                        <>
                                            <motion.div
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                            >
                                                <Send className="w-5 h-5" />
                                            </motion.div>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <Send className="w-5 h-5" />
                                        </>
                                    )}
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
            <Toaster />
        </section>
    )
}