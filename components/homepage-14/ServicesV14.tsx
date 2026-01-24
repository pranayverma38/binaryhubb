'use client'

import Image from 'next/image'
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
    title: 'The Dated Decree',
    description:
      'A Burgundy-hued envelope….  It bears your Coordinate of Origin—the sacred marker of your union—signaling that this journey is yours alone.',
    image: '/images/22.jpg',
  },
  {
    id: 2,
    number: '02',
    title: 'The Foundation Sequence',
    description:
      'Three sequential blueprints—The Pause, The Shared Silence, and The Turning. Rendered on 380 GSM archival cardstock with shallow blind-debossing, they serve as the structural guide for your transition into presence.',
    image: '/images/44.jpg',
  },
  {
    id: 1,
    number: '03',
    title: 'The Unspoken Echoes',
    description:
      'A co-created artifact on stippled fiber paper. This is a sanctuary for the unsaid; a space to hear things never heard and to open depths previously untouched, preserving the evolution of your bond in ink.',
    image: '/images/22.jpg',
  },
  {
    id: 3,
    number: '04',
    title: 'The Visionary Seal',
    description:
      'An Ivory vellum-sealed envelope, secured with a hand-poured Burgundy wax "Together" stamp. It contains the 80-Year Vision and a cinematic portal—a video reflection of your future selves—concluding with the Closing Covenant.',
    image: '/images/55.jpg',
  },
  {
    id: 3,
    number: '05',
    title: 'The Revelations',
    description:
      'Six heavy-duty 400 GSM cards featuring metallic Burgundy scratch-off ovals. To be unveiled slowly over time with the included Weighted Wood Stylus, these are hidden prompts designed to strip away the surface and reveal the core.',
    image: '/images/55.jpg',
  },
  {
    id: 3,
    number: '06',
    title: 'The Twenty Rituals',
    description:
      'A curated collection of architectural movements, nestled within a hand-sewn ivory cotton shroud. This simple muslin pouch protects the delicate rituals that bridge the gap between "living near" and "being with."',
    image: '/images/55.jpg',
  },
  {
    id: 3,
    number: '07',
    title: 'The Shared Horizons',
    description:
      'A 320 GSM leatherette chronicle with aged cream leaves. This is a living map of your collective intent, where shared dreams are inscribed and souvenirs are preserved, transforming your togetherness into a purposeful adventure.',
    image: '/images/55.jpg',
  },
  {
    id: 3,
    number: '08',
    title: 'The Olfactive Chamber',
    description:
      'A hidden porcelain disc infused with Silver Needle White Tea, ensuring the Archive emits a permanent scent of "Fresh Silence" upon every opening—a sensory anchor for your sanctuary.',
    image: '/images/55.jpg',
  },
]

const ServicesV14 = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useGSAP(
    () => {
      if (!sectionRef.current) return

      // Create stacked card reveal effect - each card reveals out and down
      cardRefs.current.forEach((cardRef, index) => {
        if (!cardRef) return

        // Skip first card
        if (index > 0) {
          // Each card starts scaled down and positioned up (tucked under previous card)
          // Then animates to full scale and position as it enters viewport
          gsap.fromTo(
            cardRef,
            {
              scale: 0.85,
              y: -120,
            },
            {
              scale: 1,
              y: 0,
              ease: 'none',
              scrollTrigger: {
                trigger: cardRef,
                start: 'top bottom',
                end: 'top center',
                scrub: 1.5,
                invalidateOnRefresh: true,
              },
            },
          )
        }

        // Parallax effect for images
        const imageContainer = cardRef.querySelector('.parallax-image-container') as HTMLElement
        if (!imageContainer) return

        const parallaxSpeeds = [60, -50, 80, -60]
        const parallaxDistance = parallaxSpeeds[index % parallaxSpeeds.length]

        gsap.fromTo(
          imageContainer,
          {
            y: -parallaxDistance / 2,
          },
          {
            y: parallaxDistance / 2,
            ease: 'none',
            scrollTrigger: {
              trigger: cardRef,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
              invalidateOnRefresh: true,
            },
          },
        )
      })
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
          <div
            key={`${service.id}-${index}`}
            ref={(el) => {
              cardRefs.current[index] = el
            }}
            style={{
              transformOrigin: 'center top',
              backgroundColor: 'rgb(237, 233, 228)',
              position: 'relative',
              zIndex: services.length - index,
              paddingBottom: index < services.length - 1 ? '0px' : '0',
            }}>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-8 lg:gap-12">
              {/* Left Column: Number and Title */}
              <div className="md:col-span-2">
                <div className="flex flex-col">
                  <span className="mb-2 text-sm font-light tracking-wider text-[#403e39] md:mb-4">
                    {service.number}
                  </span>
                  <h3 className="instrument-serif-regular text-[32px] md:text-[40px] lg:text-[48px] leading-[1.1] text-[black]">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Middle Column: Description */}
              <div className="md:col-span-6">
                <p className="text-left text-[#403e39] text-base md:text-lg leading-relaxed max-w-2xl">
                  {service.description}
                </p>
              </div>

              {/* Right Column: Image */}
              <div className="md:col-span-4">
                <div className="relative h-[300px] w-full overflow-hidden md:h-[400px] lg:h-[220px] xl:h-[230px]">
                  <div className="parallax-image-container relative h-[120%] w-full -top-[10%]">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 41.67vw"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Separator Line inside card */}
            {index < services.length - 1 && (
              <div className="my-6 border-t border-[#403e39]/20 md:my-6 lg:my-6" />
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default ServicesV14
