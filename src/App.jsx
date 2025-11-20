import Hero from './components/Hero'
import About from './components/About'
import Timeline from './components/Timeline'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-20 backdrop-blur bg-slate-950/60 border-b border-white/10">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-extrabold tracking-tight text-white text-lg">HACKSTERS</a>
          <nav className="hidden md:flex items-center gap-6 text-blue-200/90">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#timeline" className="hover:text-white">Timeline</a>
            <a href="#team" className="hover:text-white">Team</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Timeline />
        <Team />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
