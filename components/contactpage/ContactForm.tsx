'use client'

import React, { useState, useRef } from 'react'
import RevealWrapper from '../animation/RevealWrapper'

const BURGUNDY = '#722F37'

const ORDINALS: Record<number, string> = {
  1: 'first', 2: 'second', 3: 'third', 4: 'fourth', 5: 'fifth', 6: 'sixth',
  7: 'seventh', 8: 'eighth', 9: 'ninth', 10: 'tenth', 11: 'eleventh',
  12: 'twelfth', 13: 'thirteenth', 14: 'fourteenth', 15: 'fifteenth',
  16: 'sixteenth', 17: 'seventeenth', 18: 'eighteenth', 19: 'nineteenth',
  20: 'twentieth', 21: 'twenty-first', 22: 'twenty-second', 23: 'twenty-third',
  24: 'twenty-fourth', 25: 'twenty-fifth', 26: 'twenty-sixth',
  27: 'twenty-seventh', 28: 'twenty-eighth', 29: 'twenty-ninth',
  30: 'thirtieth', 31: 'thirty-first',
}

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

const UNITS = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
const TEENS = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
const TENS = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

function numberToWords(n: number): string {
  if (n === 0) return 'zero'
  if (n < 10) return UNITS[n]
  if (n < 20) return TEENS[n - 10]
  if (n < 100) {
    const t = Math.floor(n / 10)
    const u = n % 10
    return u ? `${TENS[t]} ${UNITS[u]}` : TENS[t]
  }
  if (n < 1000) {
    const h = Math.floor(n / 100)
    const rest = n % 100
    return rest ? `${UNITS[h]} hundred and ${numberToWords(rest)}` : `${UNITS[h]} hundred`
  }
  if (n < 10000) {
    const th = Math.floor(n / 1000)
    const rest = n % 1000
    const thousands = th === 1 ? 'one thousand' : `${UNITS[th]} thousand`
    return rest ? `${thousands} and ${numberToWords(rest)}` : thousands
  }
  return String(n)
}

function dateToEnglish(dateStr: string): string | null {
  if (!dateStr) return null
  const d = new Date(dateStr + 'T12:00:00')
  if (Number.isNaN(d.getTime())) return null
  const day = d.getDate()
  const month = MONTHS[d.getMonth()]
  const year = d.getFullYear()
  const dayOrdinal = ORDINALS[day]
  const yearWords = numberToWords(year)
  if (!dayOrdinal) return null
  return `The ${dayOrdinal} day of ${month} ${yearWords}`
}

const inputBase =
  'mt-4 w-full border-0 border-b border-[#181818]/15 bg-transparent py-4 pl-0 text-lg tracking-[0.02em] text-[#181818] placeholder:text-[#181818]/40 transition-colors duration-300 focus:border-[#181818] focus:outline-none focus:ring-0 instrument-serif-regular'

const labelBase =
  'block text-base uppercase text-[#181818] instrument-serif-regular md:text-lg'

const ChevronDown = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-[#181818]/50">
    <path d="M6 9l6 6 6-6" />
  </svg>
)

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    coordinateOfOrigin: '',
    archiveLanguage: 'english',
    natureOfAcquisition: 'legacy-gift',
    contactMethod: 'whatsapp',
    conciergeEmail: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    // Trigger confirmation popup
    setIsSubmitted(true)
    
    // Play the paper sound
    if (audioRef.current) {
      audioRef.current.currentTime = 0 // Reset to start
      audioRef.current.play().catch((error) => {
        console.error('Error playing sound:', error)
      })
    }
    
    console.log('Form Data Submitted:', formData)
  }

  const dateEnglish = formData.coordinateOfOrigin
    ? dateToEnglish(formData.coordinateOfOrigin)
    : null

  return (
    <section className="pb-24 md:pb-32 lg:pb-40 xl:pb-44">
      {isSubmitted && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-grayscale backdrop-brightness-75">
          <div className="mx-4 w-full max-w-xl rounded-2xl bg-white px-6 py-6 text-center shadow-2xl md:px-8 md:py-8">
            <p className="instrument-serif-regular text-base text-[#181818] md:text-lg">
              Your intent has been formally recorded within the House of Binaryhubb. A single unit of Edition I has been provisionally withheld in your name as you join the Global Waitlist. Should you be selected as one of the fifty keepers, a personal invitation will be dispatched to you following the 04.04.2026 Threshold. We thank you for your patience while the selection is finalized.
            </p>
            <button
              type="button"
              className="mt-6 inline-flex items-center justify-center rounded-full border px-6 py-2 text-sm uppercase tracking-[0.12em] text-[#181818] transition-colors duration-200 hover:bg-[#181818] hover:text-white"
              onClick={() => window.location.reload()}>
              Close
            </button>
          </div>
        </div>
      )}
      <div className="container">
        <form
          id="contact-form"
          onSubmit={handleSubmit}
          className="mx-auto max-w-[720px]">
          <RevealWrapper
            as="div"
            className="reveal-me grid grid-cols-1 gap-x-16 gap-y-12 md:grid-cols-2 md:gap-y-14">
            <div className="md:col-span-full">
              <label htmlFor="name" className={labelBase}>
                The Names to be Inscribed
              </label>
              <p className="mt-1.5 text-base text-[#181818]/50 instrument-serif-regular md:text-lg">
                (To be hand-rendered upon the opening leaf of your Chronicle)
              </p>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Type Here"
                className={inputBase}
                required
              />
            </div>

            <div className="relative md:col-span-full">
              <label htmlFor="contactMethod" className={labelBase}>
                How may the House&apos;s Concierge reach you?
              </label>
              <select
                id="contactMethod"
                name="contactMethod"
                value={formData.contactMethod}
                onChange={handleChange}
                className={`${inputBase} cursor-pointer appearance-none pr-10`}
                required>
                <option value="whatsapp">WhatsApp</option>
                <option value="email">E-mail</option>
              </select>
              <span className="pointer-events-none absolute right-0 top-[3.5rem] -translate-y-1/2">
                <ChevronDown />
              </span>
            </div>

            {formData.contactMethod === 'email' && (
              <div className="md:col-span-full">
                <label htmlFor="conciergeEmail" className={labelBase}>
                  Email address
                </label>
                <input
                  type="email"
                  id="conciergeEmail"
                  name="conciergeEmail"
                  value={formData.conciergeEmail}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  className={inputBase}
                  required
                />
              </div>
            )}

            <div className="md:col-span-full">
              <label htmlFor="coordinateOfOrigin" className={labelBase}>
                The Coordinate of Origin
              </label>
              <p className="mt-1.5 text-base text-[#181818]/50 instrument-serif-regular md:text-lg">
                (Identify the singular day your shared history began. This date will be hand-inscribed alongside your names on the opening leaf of the Chronicle, anchoring your Archive to the moment of your origin.)
              </p>
              <input
                type="date"
                id="coordinateOfOrigin"
                name="coordinateOfOrigin"
                value={formData.coordinateOfOrigin}
                onChange={handleChange}
                className={inputBase}
                required
              />
              {dateEnglish && (
                <p
                  className="mt-2 text-base instrument-serif-regular md:text-lg"
                  style={{ color: BURGUNDY }}>
                  {dateEnglish}
                </p>
              )}
            </div>

            <div className="relative">
              <label htmlFor="archiveLanguage" className={labelBase}>
                Do you prefer your archive in English or Arabic ?
              </label>
              <select
                id="archiveLanguage"
                name="archiveLanguage"
                value={formData.archiveLanguage}
                onChange={handleChange}
                className={`${inputBase} cursor-pointer appearance-none pr-10`}
                required>
                <option value="english">English</option>st
                <option value="arabic">Arabic</option>
              </select>
              <span className="pointer-events-none absolute right-0 top-[3.5rem] -translate-y-1/2">
                <ChevronDown />
              </span>
            </div>

            <div className="relative">
              <label htmlFor="natureOfAcquisition" className={labelBase}>
                Nature of Acquisition- A Legacy Gift/ A personal Foundation ?
              </label>
              <select
                id="natureOfAcquisition"
                name="natureOfAcquisition"
                value={formData.natureOfAcquisition}
                onChange={handleChange}
                className={`${inputBase} cursor-pointer appearance-none pr-10`}
                required>
                <option value="legacy-gift">A Legacy Gift</option>
                <option value="personal-foundation">A personal Foundation</option>
              </select>
              <span className="pointer-events-none absolute right-0 top-[3.5rem] -translate-y-1/2">
                <ChevronDown />
              </span>
            </div>

            <div className="md:col-span-full">
              <label htmlFor="message" className={labelBase}>
                The Intimate Decree
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Compose a message to your beloved. Our calligraphers will transcribe your words into a sealed parchment to be discovered within the Threshold."
                rows={5}
                className={`${inputBase} min-h-[140px] resize-none pt-2`}
                required
              />
            </div>
          </RevealWrapper>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 overflow-visible py-6 md:mt-14 md:pt-6">
            <button
              type="submit"
              className="px-8 py-4 min-w-[200px] rounded-lg border-2 font-semibold text-white transition-all duration-200 hover:shadow-[0_0_12px_rgba(114,47,55,0.4)]"
              style={{
                backgroundColor: BURGUNDY,
                borderColor: BURGUNDY,
                color: 'white',
              }}>
              <span className="instrument-serif-regular-italic text-lg text-white">BEHOLD</span>
            </button>
            <p className="text-center text-sm text-[#181818]/60">
              All information submitted will be treated in a highly confidential way.
            </p>
          </div>
        </form>
      </div>
      <audio ref={audioRef} src="/sounds/papersound.mp3" preload="auto" />
    </section>
  )
}

export default ContactForm
