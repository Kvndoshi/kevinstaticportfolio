import './globals.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
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

        <section id="ask-kevin" dangerouslySetInnerHTML={{ __html: '<script src="https://www.chatty4all.design/widget.js" data-bot="bot_tg5nimy68tgw" data-inline async></script>' }} />

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
