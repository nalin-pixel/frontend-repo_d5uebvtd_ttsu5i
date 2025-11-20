function Stat({ value, label }) {
  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-extrabold text-white">{value}</div>
      <div className="text-blue-200/80 mt-1">{label}</div>
    </div>
  )
}

function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 mx-auto h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">About Us</h2>
            <p className="mt-4 text-blue-100/90 leading-relaxed">
              Founded in 2019, Hacksters is a student-driven tech team focused on building impactful solutions across AI, web, and hardware. Our mission is simple: learn fast, build faster, and ship innovations that matter.
            </p>
            <p className="mt-4 text-blue-100/90 leading-relaxed">
              From local hack nights to national stages, we believe in collaboration, experimentation, and craftsmanship.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur">
            <div className="grid grid-cols-3 gap-6">
              <Stat value="5+" label="Patents Filed" />
              <Stat value="20+" label="Active Members" />
              <Stat value="$250k" label="Project Value" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
