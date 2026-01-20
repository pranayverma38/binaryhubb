'use client'

import Image from 'next/image'
import RevealWrapper from '../animation/RevealWrapper'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'
import TextAppearAnimation from '../animation/TextAppearAnimation'
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const services = [
  {
    id: 1,
    number: '01',
    title: 'Private Chef',
    description:
      'Core Elements, Guidelines We create engaging brand and campaign identities that resonate with your target audience, from logo design to complete brand experience.',
    image: '/images/22.jpg',
  },
  {
    id: 2,
    number: '02',
    title: 'Boarding Assistance',
    description:
      'Begin and end your journey with ease. Our VIP airport service includes priority check-in, luggage handling, and a smooth, stress-free transfer to your hotel.',
    image: '/images/44.jpg',
  },
  {
    id: 1,
    number: '01',
    title: 'Private Chef',
    description:
      'Core Elements, Guidelines We create engaging brand and campaign identities that resonate with your target audience, from logo design to complete brand experience.',
    image: '/images/22.jpg',
  },
  {
    id: 3,
    number: '03',
    title: 'Personal Concierge',
    description:
      'From securing reservations at Paris\'s finest restaurants to arranging exclusive cultural experiences, our dedicated concierge ensures your stay is effortlessly exceptional.',
    image: '/images/55.jpg',
  },
]

const ServicesV14 = () => {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      if (!sectionRef.current) return
      // Additional scroll animations can be added here if needed
    },
    { scope: sectionRef },
  )

  return (
    <section
      ref={sectionRef}
      className="relative py-14 md:py-16 lg:py-[88px] xl:py-[100px]"
      style={{ backgroundColor: 'rgb(237, 233, 228)' }}>
      <div className="container">
      <TextAppearAnimation>
            <h3 className="text-appear mb-8 text-center instrument-serif-regular text-[48px] md:text-[57px] lg:mb-[52px] lg:text-[64px] xl:text-[74px] xl:leading-[1.1]">
              The <span className="italic">Artifacts</span>
            </h3>
          </TextAppearAnimation>
        {services.map((service, index) => (
          <div key={service.id}>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-8 lg:gap-12">
              {/* Left Column: Number and Title */}
              <RevealWrapper className="md:col-span-2" delay={index * 0.6}>
                <div className="flex flex-col">
                  <span className="mb-2 text-sm font-light tracking-wider text-[#403e39] md:mb-4">
                    {service.number}
                  </span>
                  <h3 className="instrument-serif-regular text-[32px] md:text-[40px] lg:text-[48px] leading-[1.1] text-[black]">
                    {service.title}
                  </h3>
                </div>
              </RevealWrapper>

              {/* Middle Column: Description */}
              <RevealWrapper className="md:col-span-6" delay={index * 0.6 + 0.3}>
                <p className="text-left text-[#403e39] text-base md:text-lg leading-relaxed max-w-2xl">
                  {service.description}
                </p>
              </RevealWrapper>

              {/* Right Column: Image */}
              <RevealWrapper className="md:col-span-4" delay={index * 0.6 + 0.6}>
                <div className="relative h-[300px] w-full overflow-hidden md:h-[400px] lg:h-[220px] xl:h-[230px]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 41.67vw"
                  />
                </div>
              </RevealWrapper>
            </div>

            {/* Separator Line */}
            {index < services.length - 1 && (
              <div className="my-12 border-t border-[#403e39]/20 md:my-16 lg:my-20" />
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default ServicesV14
