import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'

const HeroV14 = () => {
  return (
    <section className="relative h-[80vh] w-screen overflow-hidden lg:h-screen">
      <video className="absolute left-0 top-0 z-[-1] h-full w-full object-cover" autoPlay loop muted>
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
        <h1 className="instrument-serif-regular text-[rgb(237,233,228)] text-[20vw] xl:text-[20vw] leading-[0.8] text-center whitespace-nowrap">
          BINARYHUBB
        </h1>
      </RevealWrapper>
      
    </section>
  )
}

export default HeroV14
