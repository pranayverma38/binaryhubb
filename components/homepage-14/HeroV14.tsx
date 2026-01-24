'use client'

import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const HeroV14 = () => {
  const heroRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useGSAP(
    () => {
      if (!heroRef.current || !videoRef.current) return

      // Create parallax effect on the video - moves slower than scroll (creates depth)
      const parallax = gsap.fromTo(
        videoRef.current,
        {
          y: 0,
          force3D: true, // Enable GPU acceleration for smoother animation
        },
        {
          y: '-50%', // Move video up faster relative to scroll, creating more pronounced parallax effect
          ease: 'none',
          force3D: true, // Keep GPU acceleration enabled
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1, // Smooth scrubbing (numeric value prevents stuttering)
            invalidateOnRefresh: true, // Recalculate on resize
          },
        },
      )

      return () => {
        parallax.kill()
      }
    },
    { scope: heroRef },
  )

  return (
    <section ref={heroRef} className="relative min-h-[80vh] h-[80vh] w-screen overflow-hidden lg:h-screen">
      <video
        ref={videoRef}
        className="absolute left-0 top-0 z-[-1] h-[120%] w-full object-cover"
        style={{ willChange: 'transform' }}
        autoPlay
        loop
        muted>
        <source src="/video/promo.mp4" type="video/mp4" />
        <track src="subtitles/lawyer-hero-video-en.vtt" kind="subtitles" srcLang="en" label="English" />
        <track
          src="subtitles/lawyer-hero-video-captions-en.vtt"
          kind="captions"
          srcLang="en"
          label="English Captions"
        />
        <track
          src="descriptions/lawyer-hero-video-desc.vtt"
          kind="descriptions"
          srcLang="en"
          label="English Descriptions"
        />
        Your browser does not support the video tag.
      </video>
      {/* <RevealWrapper className="container absolute left-1/3 top-2/3 -translate-x-1/3 -translate-y-2/3 lg:top-1/2 lg:-translate-y-1/2">
        <h1 className="mb-3 text-backgroundBody max-md:leading-none">
          Crafting <br className="hidden md:block" />
          unforgettable
          <br className="hidden md:block" />
          <i className="font-instrument text-inherit">cinematic </i>
          <i className="font-instrument text-inherit">experiences</i>
        </h1>
        <p className="max-w-3xl text-backgroundBody/70">
          From award-winning films to high-end commercials, Rivor blends artistry and technology to bring your vision to
          life.
        </p>
      </RevealWrapper> */}

      <RevealWrapper className="absolute left-1/2 bottom-[0%] -translate-x-1/2 w-full px-4 md:px-6 lg:px-8">
        <RevealWrapper>
          <h1 className="cormorant-sc text-[rgb(237,233,228)] text-[30px] md:text-[35px] lg:text-[40px] leading-[0.8] text-center whitespace-nowrap tracking-[0.5px] mb-8 lg:mb-10">
            The Architecture of<br />
            Infinite Silence
          </h1>
        </RevealWrapper>
        <h1 className="instrument-serif-regular text-[rgb(237,233,228)] text-[18vw] xl:text-[18vw] leading-[0.8] text-center whitespace-nowrap opacity-55">
          BINARYHUBB
        </h1>
      </RevealWrapper>
      
    </section>
  )
}

export default HeroV14
