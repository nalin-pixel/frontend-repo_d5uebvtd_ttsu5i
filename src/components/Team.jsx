import { useEffect, useState } from 'react'

function MemberCard({ m }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-white/20 transition">
      <div className="flex items-center gap-4">
        <img src={m.photo_url || `https://api.dicebear.com/7.x/thumbs/svg?seed=${encodeURIComponent(m.name)}`} alt={m.name} className="w-14 h-14 rounded-lg object-cover border border-white/10" />
        <div className="flex-1">
          <div className="text-white font-semibold">{m.nickname || m.name}</div>
          <div className="text-blue-200/80 text-sm">{m.role}</div>
        </div>
        <button onClick={() => setOpen(!open)} className="text-sm px-3 py-1 rounded-md bg-blue-500/20 text-blue-100 border border-blue-400/30">{open ? 'Hide' : 'View'}</button>
      </div>
      {open && (
        <div className="mt-4 text-blue-100/90 space-y-3">
          {m.bio && <p>{m.bio}</p>}
          {m.skills?.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {m.skills.map((s,i) => (
                <span key={i} className="px-2 py-1 text-xs rounded-md bg-white/10 border border-white/10">{s}</span>
              ))}
            </div>
          )}
          <div className="flex flex-wrap gap-3 text-sm">
            {m.email && <a className="underline text-blue-200" href={`mailto:${m.email}`}>Email</a>}
            {m.instagram && <a className="underline text-blue-200" href={m.instagram} target="_blank">Instagram</a>}
            {m.linkedin && <a className="underline text-blue-200" href={m.linkedin} target="_blank">LinkedIn</a>}
            {m.github && <a className="underline text-blue-200" href={m.github} target="_blank">GitHub</a>}
          </div>
        </div>
      )}
    </div>
  )
}

function Team() {
  const [members, setMembers] = useState([])

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || ''
        const res = await fetch(`${base}/team`)
        const data = await res.json()
        setMembers(data)
      } catch { setMembers([]) }
    }
    load()
  }, [])

  return (
    <section id="team" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Team</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((m) => <MemberCard key={m.id} m={m} />)}
          {members.length === 0 && (
            <div className="text-blue-200/80">No members yet. Use the API to add your team.</div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Team
