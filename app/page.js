import './globals.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AskKevin from './components/AskKevin'
import WhyHireMe from './components/WhyHireMe'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'

export default function Home() {
  return (
    <main className="app-container">
      <Navbar />
      <div className="layout-container">
        <section id="hero">
          <Hero />
        </section>

        <section id="ask-kevin">
          <AskKevin />
        </section>

        <section id="why-hire-me">
          <WhyHireMe />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="skills">
          <Skills />
        </section>
      </div>

      <section id="contact">
        <Contact />
      </section>

      <footer className="footer">
        <p>© 2025 Kevin Doshi. Built with Next.js.</p>
      </footer>
    </main>
  )
}
