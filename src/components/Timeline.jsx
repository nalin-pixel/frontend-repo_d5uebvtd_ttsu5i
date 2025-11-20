import { useEffect, useState } from 'react'

function Badge({ type, position }) {
  const isWin = type === 'win'
  return (
    <span className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-medium border ${isWin ? 'bg-emerald-500/10 text-emerald-200 border-emerald-400/30' : 'bg-blue-500/10 text-blue-200 border-blue-400/30'}`}>
      {isWin ? 'Win' : 'Participated'}{isWin && position ? ` • ${position}` : ''}
    </span>
  )
}

function TimelineItem({ item }) {
  return (
    <div className="relative pl-8">
      <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-blue-400" />
      <div className="bg-white/5 border border-white/10 rounded-xl p-5">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-white font-semibold text-lg">{item.title}</h3>
          <Badge type={item.type} position={item.position} />
        </div>
        <div className="mt-1 text-blue-200/80 text-sm">{item.date} • {item.venue}</div>
        {item.description && <p className="mt-3 text-blue-100/90">{item.description}</p>}
        {item.photos?.length > 0 && (
          <div className="mt-4 grid grid-cols-3 gap-2">
            {item.photos.slice(0,3).map((src, idx) => (
              <img key={idx} src={src} alt="event" className="rounded-md object-cover h-24 w-full border border-white/10" />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

function Timeline() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const load = async () => {
      setLoading(true)
      try {
        const base = import.meta.env.VITE_BACKEND_URL || ''
        const res = await fetch(`${base}/timeline`)
        const data = await res.json()
        setItems(data)
      } catch (e) {
        setItems([])
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section id="timeline" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Timeline</h2>
        {loading && <div className="text-blue-200">Loading timeline...</div>}
        <div className="relative">
          <div className="absolute left-1 top-0 bottom-0 w-px bg-white/10" />
          <div className="space-y-6">
            {items.map((item) => (
              <TimelineItem key={item.id} item={item} />
            ))}
            {items.length === 0 && !loading && (
              <div className="text-blue-200/80">No events yet. Use the API to add your journey.</div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline
