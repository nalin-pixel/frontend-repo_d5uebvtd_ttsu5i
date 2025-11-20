import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-16">
      {/* Gradient glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-0 -right-24 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      <div className="relative container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-200 mb-4 text-sm">Founded 2019 • Student Tech Team</div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
              HACKSTERS
            </h1>
            <p className="mt-4 text-xl text-blue-100/90">Where ideas become <span className="underline decoration-blue-400/60 decoration-wavy underline-offset-4">innovations</span>.</p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#timeline" className="px-5 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-semibold transition">Explore the Journey</a>
              <a href="#team" className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold backdrop-blur transition">Meet the Team</a>
            </div>
            <div className="mt-8 text-blue-200/70 text-sm">Interactive 3D hero powered by Spline</div>
          </div>
          <div className="h-[420px] md:h-[520px] rounded-2xl overflow-hidden border border-white/10 bg-black/30 backdrop-blur relative">
            <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
