'use client'

import Image from 'next/image'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface ImmersiveImageProps {
  imageSrc: string
  imageAlt?: string
  className?: string
}

const ImmersiveImage = ({ imageSrc, imageAlt = 'Immersive image', className = '' }: ImmersiveImageProps) => {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (!sectionRef.current || !imageRef.current) return

      // Create immersive scroll effect - image fades and scales as you scroll
      const immersiveAnimation = gsap.fromTo(
        imageRef.current,
        {
          scale: 1.2, // Start slightly zoomed in
          opacity: 1,
          force3D: true, // Enable GPU acceleration
        },
        {
          scale: 1, // Scale to normal size
          opacity: 0.01, // Fade out as you scroll
          ease: 'none',
          force3D: true,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1, // Smooth scrubbing (1 second lag for smoothness)
            invalidateOnRefresh: true, // Recalculate on resize
            pin: false, // Don't pin, let it scroll naturally
          },
        },
      )

      return () => {
        immersiveAnimation.kill()
      }
    },
    { scope: sectionRef },
  )

  return (
    <section
      ref={sectionRef}
      className={`relative h-screen w-full overflow-hidden ${className}`}
      style={{ backgroundColor: 'rgb(237, 233, 228)' }}>
      <div
        ref={imageRef}
        className="absolute inset-0 h-full w-full"
        style={{ willChange: 'transform, opacity' }}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="100vw"
          priority
          quality={90}
        />
      </div>
    </section>
  )
}

export default ImmersiveImage
