'use client'

import Link from 'next/link'
import { Libre_Baskerville } from 'next/font/google'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'
import HeroGradientAnimation from '../shared/HeroGradientAnimation'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'

const libreBaskerville = Libre_Baskerville({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const AboutV13 = () => {
  const aboutRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      if (!aboutRef.current) return

      // Only apply overlap animation on larger screens (mobile should show hero fully first)
      const isMobile = window.innerWidth < 768

      if (isMobile) return

      // Create overlapping parallax effect - section slides up over hero as you scroll
      const overlap = gsap.fromTo(
        aboutRef.current,
        {
          y: 150, // Start positioned lower
        },
        {
          y: 0, // Move to final position
          ease: 'none',
          scrollTrigger: {
            trigger: aboutRef.current,
            start: 'top bottom',
            end: 'top center',
            scrub: true,
          },
        },
      )

      return () => {
        overlap.kill()
      }
    },
    { scope: aboutRef },
  )

  return (
    <section
      ref={aboutRef}
      className="relative mt-0 md:-mt-[10vh] lg:-mt-[15vh] pb-14 pt-28 md:pb-16 md:pt-32 lg:pb-[88px] lg:pt-44 xl:pb-[100px] xl:pt-[200px] z-10"
      style={{ backgroundColor: 'rgb(237, 233, 228)' }}>
      <HeroGradientAnimation />
      <div className="container">
        <div className="text-center">
          {/* <RevealWrapper className="rv-badge mb-3">
            <span className="rv-badge-text">About</span>
          </RevealWrapper> */}
          <TextAppearAnimation>
            <h2 className="instrument-serif-regular mb-6">
              <span className="text-[34px] md:text-[43px] lg:text-[50px] xl:text-[60px]">World's First</span>
              <br />
              <span className="text-[48px] md:text-[57px] lg:text-[64px] xl:text-[74px]">Maison of <span className="italic maroon-text">Relationship Architecture</span></span>
            </h2>
          </TextAppearAnimation>
          {/* <RevealWrapper as="h5">
            Rivor is a leading film production agency dedicated to crafting powerful visual narratives. With a team of
            visionary filmmakers, cinematographers, and VFX artists, we deliver world-class productions across feature
            films, commercials, documentaries, and branded content.
          </RevealWrapper> */}
          <RevealWrapper className={`mx-auto mt-3 max-w-3xl ${libreBaskerville.className} italic text-[#403e39]`}>
          We do not craft objects to be worn, we craft the infrastructure of the uninterrupted
          life. While the world builds for the moment, we build for the Era.
          </RevealWrapper>
          {/* <RevealWrapper as="ul" className="mt-7 justify-self-center max-md:w-full md:mt-14">
            <li className="mx-auto block w-full text-center md:inline-block md:w-auto">
              <Link href="/team" className="rv-button rv-button-white block md:inline-block">
                <div className="rv-button-top">
                  <span>Meet Our Team</span>
                </div>
                <div className="rv-button-bottom">
                  <span>Meet Our Team</span>
                </div>
              </Link>
            </li>
          </RevealWrapper> */}
        </div>
      </div>
    </section>
  )
}

export default AboutV13
