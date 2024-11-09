import Home from '@/components/home'
import About from '@/components/about'
import Projects from '@/components/projects'
import Blog from '@/components/blog'
import Contact from '@/components/contact'
import Header from '@/components/header'
import Footer from '@/components/footer'


export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Home />
        <About />
        <Projects />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
