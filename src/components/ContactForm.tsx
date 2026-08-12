import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react'
import { supabase } from '../lib/supabase'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return

    setLoading(true)
    setStatus('idle')

    const { error } = await supabase.from('contacts').insert([
      { name: form.name.trim(), email: form.email.trim(), message: form.message.trim() },
    ])

    setLoading(false)

    if (error) {
      setStatus('error')
      return
    }

    setStatus('success')
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setStatus('idle'), 4000)
  }

  const inputClass =
    'w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-white/30 focus:bg-white/[0.05] transition-colors'

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mt-10 max-w-md space-y-4"
    >
      <div>
        <label htmlFor="name" className="block text-xs text-neutral-500 mb-1.5">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={handleChange}
          placeholder="John Doe"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-xs text-neutral-500 mb-1.5">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          placeholder="john@example.com"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-xs text-neutral-500 mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell me about your project..."
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-neutral-950 hover:bg-neutral-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
      >
        {loading ? (
          <>
            <Loader2 size={14} className="animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send size={14} />
            Send message
          </>
        )}
      </button>

      {status === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-sm text-accent"
        >
          <CheckCircle2 size={14} />
          Message sent. I'll get back to you soon!
        </motion.div>
      )}

      {status === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-sm text-red-400"
        >
          <AlertCircle size={14} />
          Something went wrong. Try again or email me directly.
        </motion.div>
      )}
    </motion.form>
  )
}