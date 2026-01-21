'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

const ProcessV2 = () => {
  const [hoverGroup, setHoverGroup] = useState<'first' | 'last' | null>(null)
  const [waveActive, setWaveActive] = useState(false)
  const dotsGridRef = useRef<HTMLDivElement | null>(null)

  // Trigger a stronger wave animation when the dots grid enters the viewport
  useEffect(() => {
    if (!dotsGridRef.current) return

    let timeoutId: NodeJS.Timeout | null = null

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWaveActive(true)

          // Clear any existing timeout
          if (timeoutId) {
            clearTimeout(timeoutId)
          }

          // Turn off wave after all columns complete their animation
          // Last column (column 9) starts at: 9 * 80ms = 720ms
          // Animation duration: 900ms
          // Total time needed: ~2000ms
          timeoutId = setTimeout(() => {
            setWaveActive(false)
          }, 2000)
        }
      },
      {
        threshold: 0.35
      }
    )

    observer.observe(dotsGridRef.current)

    return () => {
      observer.disconnect()
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
  }, [])

  return (
    <section className="relative overflow-hidden pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <TextAppearAnimation>
        <h3 className="text-appear mb-8 text-center instrument-serif-regular text-[48px] md:text-[57px] lg:mb-[52px] lg:text-[64px] xl:text-[74px] xl:leading-[1.1]">
          The <span className="italic">Edition 1</span>
        </h3>
      </TextAppearAnimation>
      <div className="container relative shadow-[0_0_80px_15px_rgba(245,158,11,0.25),0_0_140px_25px_rgba(234,179,8,0.15),0_0_200px_35px_rgba(245,158,11,0.1),inset_0_0_60px_10px_rgba(245,158,11,0.2)] md:shadow-[0_0_100px_20px_rgba(245,158,11,0.2),0_0_160px_30px_rgba(234,179,8,0.05),inset_0_0_60px_10px_rgba(245,158,11,0.2)] before:absolute before:inset-0 before:-z-10 before:rounded-lg before:bg-gradient-to-br before:from-amber-400/10 before:via-yellow-500/5 before:to-amber-400/10 before:content-['']">
        {/* <div className="mb-16 flex flex-col items-start justify-center gap-x-10 gap-y-4 md:flex-row lg:mb-24 lg:justify-between">
          <div className="flex-1 md:self-start">
            <TextAppearAnimation>
              <h2 className="text-appear">
                <span className="font-instrument font-medium italic"> Services — </span>
                <br className="hidden md:block" />
                We build
              </h2>
            </TextAppearAnimation>
          </div>
          <div className="flex-1 max-md:w-full md:self-end">
            <TextAppearAnimation>
              <p className="text-appear max-w-lg md:place-self-end md:text-right">
                We partner with athletes, storytellers, and brands whose vision and voices shape culture and transform
                the world.
              </p>
            </TextAppearAnimation>
            <RevealWrapper className="mt-5 justify-self-end max-md:w-full md:mt-10">
              <li className="mx-auto block w-full text-center md:inline-block md:w-auto">
                <Link href="/services" className="rv-button rv-button-white block md:inline-block">
                  <div className="rv-button-top">
                    <span>See All Services</span>
                  </div>
                  <div className="rv-button-bottom">
                    <span>See All Services</span>
                  </div>
                </Link>
              </li>
            </RevealWrapper>
          </div>
        </div> */}

        <RevealWrapper className="grid grid-cols-1 items-stretch justify-center gap-[1px] md:grid-cols-2">
          {/* Left container */}
          <div className="group bg-[rgb(255,250,243)] px-7 pb-10 pt-10 backdrop-blur transition-all duration-300 ease-in-out dark:bg-dark max-sm:border-x max-sm:border-t max-sm:border-dark/5 rounded-2xl rounded-b-none md:rounded-l-2xl md:rounded-r-none md:px-10 md:pb-14 md:pt-14">
            <p className="text-[17px] leading-[25.5px] text-[#000000b3] transition-colors duration-300 dark:text-dark-100 dark:group-hover:text-dark-200">
              To celebrate our Edition I UAE Launch, the Maison presents a restricted registry of only <strong>50</strong> serialized
              vessels, exclusively for the region’s discerning unions.
              <br />
              <br />
              Rooted in our heritage, the <strong>15</strong> Arabic Editions are graced with a Golden Touch, honoring the profound
              weight of UAE culture. The remaining <strong>35</strong> English Editions carry the signature Burgundy seal.
              <br />
              <br />
              Our Digital Monolith, a grid of fifty silent points, will illuminate in Gold or Burgundy as each legacy is
              claimed. On <strong>4.4.2026</strong>, at <strong>04:04 PM</strong>, the registry opens. We do not sell; we entrust. Join the waitlist to
              receive a personal invitation. From this list, 50 keepers will be chosen to own the silence.
            </p>
          </div>

          {/* Right container */}
          <div className="group flex items-center justify-center bg-[rgb(255,250,243)] px-7 pb-10 pt-10 backdrop-blur transition-all duration-300 ease-in-out dark:bg-dark max-sm:border-x max-sm:border-t max-sm:border-dark/5 rounded-2xl rounded-t-none md:rounded-r-2xl md:rounded-l-none md:px-10 md:pb-16 md:pt-14">
            <div
              ref={dotsGridRef}
              className="relative grid grid-cols-10 gap-6 lg:gap-7 justify-items-center"
              onMouseLeave={() => setHoverGroup(null)}>
              {/* Tooltips */}
              {/* Gold tooltip */}
              <div
                className={`pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-full transition-all duration-500 ease-out ${
                  hoverGroup === 'first'
                    ? 'opacity-100 translate-y-0 scale-100'
                    : 'opacity-0 -translate-y-4 scale-95 pointer-events-none'
                }`}
                style={{ marginTop: '-12px' }}>
                <div className="rounded-md bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 p-[1px]">
                  <div className="rounded-md bg-white px-4 py-2 text-sm font-medium text-black shadow-lg whitespace-nowrap">
                    Awaiting the Inscription of Presence
                  </div>
                </div>
              </div>
              {/* Burgundy tooltip */}
              <div
                className={`pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full transition-all duration-500 ease-out ${
                  hoverGroup === 'last'
                    ? 'opacity-100 translate-y-0 scale-100'
                    : 'opacity-0 translate-y-4 scale-95 pointer-events-none'
                }`}
                style={{ marginBottom: '-12px' }}>
                <div className="rounded-md bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 p-[1px]">
                  <div className="rounded-md bg-white px-4 py-2 text-sm font-medium text-black shadow-lg whitespace-nowrap">
                    Awaiting the Golden Heritage
                  </div>
                </div>
              </div>
              {/* Hover zones to trigger group effects even between dots */}
              {/* First 35 dots - Gold: rows 1-3 (full) + first 5 columns of row 4 */}
              <div
                className="pointer-events-auto absolute inset-x-0 top-0 h-[60%]"
                onMouseEnter={() => setHoverGroup('first')}
              />
              {/* Left half of row 4 (first 5 columns) - Gold */}
              <div
                className="pointer-events-auto absolute left-0 top-[60%] h-[20%] w-1/2"
                onMouseEnter={() => setHoverGroup('first')}
              />
              {/* Last 15 dots - Burgundy: right half of row 4 (last 5 columns) + row 5 (full) */}
              <div
                className="pointer-events-auto absolute right-0 top-[60%] h-[20%] w-1/2"
                onMouseEnter={() => setHoverGroup('last')}
              />
              <div
                className="pointer-events-auto absolute inset-x-0 bottom-0 h-[20%]"
                onMouseEnter={() => setHoverGroup('last')}
              />
              {Array.from({ length: 50 }).map((_, idx) => {
                const isFirstGroup = idx < 35
                const isHoveredGroup = hoverGroup === (isFirstGroup ? 'first' : 'last')
                // Calculate column number (0-9) for column-by-column wave effect
                const columnNumber = idx % 10

                return (
                  <span
                    key={idx}
                    onMouseEnter={() => setHoverGroup(isFirstGroup ? 'first' : 'last')}
                    className={[
                      'rounded-full transition-all duration-200',
                      waveActive
                        ? 'animate-dots-wave'
                        : isHoveredGroup
                          ? 'animate-none'
                          : 'animate-dots-breathe',
                      hoverGroup === 'first' && isFirstGroup
                        ? 'h-3.5 w-3.5 md:h-3.5 md:w-3.5 bg-[#f2bb22] shadow-[0_0_12px_4px_rgba(242,187,34,0.35)]'
                        : hoverGroup === 'last' && !isFirstGroup
                          ? 'h-3.5 w-3.5 md:h-3.5 md:w-3.5 bg-[#8a1d38] shadow-[0_0_12px_4px_rgba(128,0,32,0.35)]'
                          : 'h-3 w-3 bg-black'
                    ].join(' ')}
                    style={{
                      animationDelay: `${columnNumber * 80}ms`,
                      animationPlayState: isHoveredGroup && !waveActive ? 'paused' : 'running'
                    }}
                  />
                )
              })}
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default ProcessV2
