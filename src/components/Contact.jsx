import { useState } from 'react'

function Contact() {
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const onSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())
    try {
      const base = import.meta.env.VITE_BACKEND_URL || ''
      const res = await fetch(`${base}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('Thanks! We will get back to you shortly.')
      e.currentTarget.reset()
    } catch {
      setStatus('Something went wrong. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Contact</h2>
        <form onSubmit={onSubmit} className="bg-white/5 border border-white/10 rounded-2xl p-6 grid gap-4 md:grid-cols-2">
          <input name="name" required placeholder="Your Name" className="px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder:text-blue-200/60" />
          <input type="email" name="email" required placeholder="Email" className="px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder:text-blue-200/60" />
          <input name="company" placeholder="Company (optional)" className="px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder:text-blue-200/60 md:col-span-2" />
          <input name="subject" required placeholder="Subject" className="px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder:text-blue-200/60 md:col-span-2" />
          <textarea name="message" required placeholder="Message" rows="5" className="px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder:text-blue-200/60 md:col-span-2" />
          <div className="md:col-span-2 flex items-center gap-4">
            <button disabled={loading} className="px-5 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 disabled:opacity-60 text-white font-semibold transition">{loading ? 'Sending...' : 'Send Message'}</button>
            {status && <div className="text-blue-100/90">{status}</div>}
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
