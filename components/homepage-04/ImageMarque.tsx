'use client'

import { useEffect, useRef, useState } from 'react'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

const ImageMarque = () => {
  const trackRef = useRef<HTMLDivElement | null>(null)
  const animationFrameRef = useRef<number | null>(null)
  const dragStartXRef = useRef<number>(0)
  const dragStartOffsetRef = useRef<number>(0)

  const [trackWidth, setTrackWidth] = useState<number>(0)
  const [offset, setOffset] = useState<number>(0)
  const [isDragging, setIsDragging] = useState<boolean>(false)

  useEffect(() => {
    if (!trackRef.current) {
      return
    }

    const updateWidth = () => {
      if (!trackRef.current) {
        return
      }
      setTrackWidth(trackRef.current.offsetWidth)
    }

    updateWidth()
    window.addEventListener('resize', updateWidth)

    return () => {
      window.removeEventListener('resize', updateWidth)
    }
  }, [])

  useEffect(() => {
    if (!trackWidth || isDragging) {
      return
    }

    const speed = 60 // pixels per second
    let lastTime = performance.now()

    const step = (now: number) => {
      const delta = now - lastTime
      lastTime = now

      setOffset((prev) => {
        let next = prev - (speed * delta) / 1000

        if (Math.abs(next) >= trackWidth) {
          next = 0
        }

        return next
      })

      animationFrameRef.current = requestAnimationFrame(step)
    }

    animationFrameRef.current = requestAnimationFrame(step)

    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [trackWidth, isDragging])

  const startDrag = (clientX: number) => {
    setIsDragging(true)
    dragStartXRef.current = clientX
    dragStartOffsetRef.current = offset
  }

  const moveDrag = (clientX: number) => {
    if (!isDragging || !trackWidth) {
      return
    }

    const delta = clientX - dragStartXRef.current
    let next = dragStartOffsetRef.current + delta

    // Wrap the offset so the loop remains seamless
    if (next <= -trackWidth) {
      next += trackWidth
    } else if (next >= 0) {
      next = 0
    }

    setOffset(next)
  }

  const endDrag = () => {
    setIsDragging(false)
  }

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    startDrag(event.clientX)
  }

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) {
      return
    }
    moveDrag(event.clientX)
  }

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    const touch = event.touches[0]
    if (!touch) {
      return
    }
    startDrag(touch.clientX)
  }

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    const touch = event.touches[0]
    if (!touch) {
      return
    }
    event.preventDefault()
    moveDrag(touch.clientX)
  }

  return (
    <section className="overflow-hidden pb-10 pt-10 md:pb-16 md:pt-16 lg:pb-[100px] lg:pt-[100px] xl:pb-[130px] xl:pt-[130px]">
          <TextAppearAnimation>
            <h3 className="text-appear mb-6 text-center instrument-serif-regular text-[32px] sm:text-[40px] md:text-[57px] lg:mb-[52px] lg:text-[64px] xl:text-[74px] xl:leading-[1.1]">
              The <span className="italic">Sensory Room</span>
            </h3>
          </TextAppearAnimation>
      <RevealWrapper className="marquee-container">
        <div
          className="relative select-none cursor-grab active:cursor-grabbing"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={endDrag}
          onMouseLeave={endDrag}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={endDrag}
        >
          <div
            ref={trackRef}
            className="flex items-end gap-2 sm:gap-3 first:mr-3"
            style={{ transform: `translateX(${offset}px)` }}
          >
            {/* First set of images */}
            <figure className="group relative flex-none w-52 sm:w-64 md:min-w-96 md:max-w-[362px] h-64 sm:h-72 md:h-[430px] overflow-hidden">
              <img src="/images/11.jpg" alt=" 1" className="h-full w-full object-cover" />
            </figure>
            <figure className="group relative flex-none w-52 sm:w-64 md:min-w-96 md:max-w-[362px] h-72 sm:h-80 md:h-[538px] overflow-hidden">
              <img src="/images/22.jpg" alt=" 2" className="h-full w-full object-cover" />
            </figure>
            <figure className="group relative flex-none w-52 sm:w-64 md:min-w-96 md:max-w-[362px] h-56 sm:h-64 md:h-[343px] overflow-hidden">
              <img src="/images/33.jpg" alt=" 3" className="h-full w-full object-cover" />
            </figure>
            <figure className="group relative flex-none w-52 sm:w-64 md:min-w-96 md:max-w-[362px] h-72 sm:h-80 md:h-[535px] overflow-hidden">
              <img src="/images/44.jpg" alt=" 4" className="h-full w-full object-cover" />
            </figure>
            <figure className="group relative flex-none w-52 sm:w-64 md:min-w-96 md:max-w-[362px] h-60 sm:h-72 md:h-[441px] overflow-hidden">
              <img src="/images/55.jpg" alt=" 5" className="h-full w-full object-cover" />
            </figure>

            {/* Second set of images for seamless looping */}
            <figure className="group relative flex-none w-52 sm:w-64 md:min-w-96 md:max-w-[362px] h-64 sm:h-72 md:h-[430px] overflow-hidden">
              <img src="/images/11.jpg" alt=" 1 duplicate" className="h-full w-full object-cover" />
            </figure>
            <figure className="group relative flex-none w-52 sm:w-64 md:min-w-96 md:max-w-[362px] h-72 sm:h-80 md:h-[538px] overflow-hidden">
              <img src="/images/22.jpg" alt=" 2 duplicate" className="h-full w-full object-cover" />
            </figure>
            <figure className="group relative flex-none w-52 sm:w-64 md:min-w-96 md:max-w-[362px] h-56 sm:h-64 md:h-[343px] overflow-hidden">
              <img src="/images/33.jpg" alt=" 3 duplicate" className="h-full w-full object-cover" />
            </figure>
            <figure className="group relative flex-none w-52 sm:w-64 md:min-w-96 md:max-w-[362px] h-72 sm:h-80 md:h-[535px] overflow-hidden">
              <img src="/images/44.jpg" alt=" 4 duplicate" className="h-full w-full object-cover" />
            </figure>
            <figure className="group relative flex-none w-52 sm:w-64 md:min-w-96 md:max-w-[362px] h-60 sm:h-72 md:h-[441px] overflow-hidden">
              <img src="/images/55.jpg" alt=" 5 duplicate" className="h-full w-full object-cover" />
            </figure>
          </div>
        </div>
      </RevealWrapper>
    </section>
  )
}

export default ImageMarque
