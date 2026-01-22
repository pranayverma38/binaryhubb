'use client'

import React, { useState, useRef } from 'react'
import RevealWrapper from '../animation/RevealWrapper'

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
    contactMethod: 'whatsapp',
    conciergeEmail: '',
    company: '',
    email: '',
    service: 'ui-ux',
    budget: '25-50',
    message: '',
  })
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return
    const rect = buttonRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    setMousePosition({ x, y })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form Data Submitted:', formData)
    alert(`${formData.name}, your enquiry has been received. We'll be in touch shortly.`)
  }

  return (
    <section className="pb-24 md:pb-32 lg:pb-40 xl:pb-44">
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
            </div>

            <div>
              <label htmlFor="company" className={labelBase}>
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company name"
                className={inputBase}
              />
            </div>

            <div className="relative">
              <label htmlFor="service" className={labelBase}>
                Service
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className={`${inputBase} cursor-pointer appearance-none pr-10`}
                required>
                <option value="ui-ux">UX Design</option>
                <option value="product">Product Design</option>
                <option value="brand">Brand Identity</option>
                <option value="design-system">Design System</option>
              </select>
              <span className="pointer-events-none absolute right-0 top-[3.5rem] -translate-y-1/2">
                <ChevronDown />
              </span>
            </div>

            <div className="relative">
              <label htmlFor="budget" className={labelBase}>
                Project Budget
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className={`${inputBase} cursor-pointer appearance-none pr-10`}
                required>
                <option value="10-25">$10k – $25k</option>
                <option value="25-50">$25k – $50k</option>
                <option value="50-100">$50k – $100k</option>
                <option value="100+">$100k+</option>
              </select>
              <span className="pointer-events-none absolute right-0 top-[3.5rem] -translate-y-1/2">
                <ChevronDown />
              </span>
            </div>

            <div className="md:col-span-full">
              <label htmlFor="message" className={labelBase}>
                Project Brief
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your goals and timeline..."
                rows={5}
                className={`${inputBase} min-h-[140px] resize-none pt-2`}
                required
              />
            </div>
          </RevealWrapper>

          <div className="mt-12 flex justify-center overflow-visible py-6 md:mt-14 md:pt-6">
            <button
              ref={buttonRef}
              type="submit"
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="relative px-8 py-4 bg-white/40 backdrop-blur-sm border-2 text-black font-semibold rounded-lg transition-all duration-300 overflow-hidden group min-w-[200px]"
              style={{
                background: isHovered
                  ? `radial-gradient(circle 150px at ${mousePosition.x}% ${mousePosition.y}%, rgba(255, 215, 0, 0.3) 0%, rgba(255, 255, 255, 0.4) 70%)`
                  : 'rgba(255, 255, 255, 0.4)',
                boxShadow: isHovered
                  ? '0 0 40px rgba(255, 215, 0, 0.7), 0 0 20px rgba(255, 255, 255, 0.6), 0 4px 15px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.6)'
                  : '0 0 30px rgba(255, 255, 255, 0.5), 0 4px 15px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.5)',
                borderColor: isHovered ? 'rgba(255, 215, 0, 0.6)' : 'rgba(255, 255, 255, 0.4)',
              }}>
              <span className="relative z-10">Send Enquiry</span>
              {isHovered && (
                <div
                  className="absolute inset-0 pointer-events-none transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle 120px at ${mousePosition.x}% ${mousePosition.y}%, rgba(255, 215, 0, 0.6) 0%, transparent 70%)`,
                    filter: 'blur(20px)',
                    opacity: 1,
                  }}
                />
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default ContactForm
