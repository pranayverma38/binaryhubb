'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef, useState, useEffect } from 'react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const WaxCard = () => {
  const router = useRouter()
  const sectionRef = useRef<HTMLElement>(null)
  const imageContainerRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 })
  const [isHovered, setIsHovered] = useState(false)

  useGSAP(
    () => {
      if (!sectionRef.current || !imageContainerRef.current) return

      // Animate from initial state to final position as section enters viewport
      const parallaxAnimation = gsap.fromTo(
        imageContainerRef.current,
        {
          rotation: -30,
          y: 100,
          force3D: true,
          immediateRender: true,
        },
        {
          rotation: 0,
          y: 0,
          ease: 'power2.out',
          force3D: true,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'top 20%',
            scrub: 1,
            invalidateOnRefresh: true,
          },
        },
      )

      return () => {
        parallaxAnimation.kill()
      }
    },
    { scope: sectionRef },
  )

  useEffect(() => {
    // Refresh ScrollTrigger after component mounts and images load
    const timer = setTimeout(() => {
      ScrollTrigger.refresh()
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return
    
    const rect = buttonRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    
    setMousePosition({ x, y })
  }

  return (
    <section ref={sectionRef} className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 h-full w-full">
        <Image
          src="/images/bedroom.jpg"
          alt="Bedroom"
          fill
          className="object-cover"
          sizes="100vw"
          priority
          quality={90}
        />
      </div>
      <div className="absolute inset-0 h-full w-full bg-black/50" />
      <div
        ref={imageContainerRef}
        className="absolute inset-0 flex items-center justify-center z-10 overflow-hidden"
        style={{ willChange: 'transform' }}>
        <Image
          src="/images/jjimage.png"
          alt="JJ Image"
          width={0}
          height={0}
          sizes="100vw"
          className="w-[calc(100vw-100px)] lg:w-[calc(40vw)] h-auto"
          priority
          quality={90}
        />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 translate-y-[5%] lg:translate-y-[10%]">
        <button
          ref={buttonRef}
          onClick={() => router.push('/privateaccess')}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative px-8 py-4 bg-white/40 backdrop-blur-sm border-2 text-black font-semibold rounded-lg transition-all duration-300 overflow-hidden group"
          style={{
            background: isHovered
              ? `radial-gradient(circle 150px at ${mousePosition.x}% ${mousePosition.y}%, rgba(255, 215, 0, 0.3) 0%, rgba(255, 255, 255, 0.4) 70%)`
              : 'rgba(255, 255, 255, 0.4)',
            boxShadow: isHovered
              ? '0 0 40px rgba(255, 215, 0, 0.7), 0 0 20px rgba(255, 255, 255, 0.6), 0 4px 15px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.6)'
              : '0 0 30px rgba(255, 255, 255, 0.5), 0 4px 15px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.5)',
            borderColor: isHovered ? 'rgba(255, 215, 0, 0.6)' : 'rgba(255, 255, 255, 0.4)',
          }}>
          <span className="relative z-10">Request Private Access</span>
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
        <p className="hidden lg:block mt-4 instrument-serif-regular text-black text-base lg:text-lg" style={{ fontStyle: 'italic' }}>
          Handcrafted and dispatched within 10 days of the inscription confirmation.
        </p>
      </div>
    </section>
  )
}

export default WaxCard
