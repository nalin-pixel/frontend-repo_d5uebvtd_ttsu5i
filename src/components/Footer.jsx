function Footer(){
  return (
    <footer className="py-10 border-t border-white/10 text-blue-200/80">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>© {new Date().getFullYear()} Hacksters • All rights reserved.</div>
        <div className="flex items-center gap-5 text-sm">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#timeline" className="hover:text-white">Timeline</a>
          <a href="#team" className="hover:text-white">Team</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
