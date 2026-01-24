import CounterList from '@/data/counterData.json'
import CounterAnimation from '@/utils/CounterAnimation'
import Link from 'next/link'
import { Libre_Baskerville } from 'next/font/google'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

const libreBaskerville = Libre_Baskerville({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})
const { CounterData } = CounterList

const AboutV4 = () => {
  return (
    <section className="overflow-hidden pb-14 pt-20 md:pb-16 md:pt-32 lg:pb-[88px] lg:pt-40 xl:pb-[100px] xl:pt-[200px]">
      <div className="container">
        {/* <div className="mb-10 flex flex-col justify-center gap-x-16 gap-y-6 border-y py-6 dark:border-dark max-md:items-center md:mb-[70px] md:flex-row md:justify-between md:py-10">
          <h3 className="text-center max-md:text-3xl md:flex-1">Join in the journey</h3>
          <div className="flex gap-9 max-md:flex-wrap max-md:justify-center md:gap-[60px]">
            {CounterData.map((item) => (
              <div key={item.id}>
                <h4 className="mb-2 text-center font-normal leading-[1.1] md:text-[47px] lg:mb-5 lg:text-[54px] lg:leading-[1.2] xl:text-[64px]">
                  <CounterAnimation number={Number(item.number)} />
                  <span>{item.rightIcon}</span>
                </h4>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div> */}

        <div>
          {/* <RevealWrapper className="rv-badge mb-2">
            <span className="rv-badge-text">About</span>
          </RevealWrapper> */}
          <TextAppearAnimation>
            <h3 className="text-appear mb-8 text-center instrument-serif-regular text-[48px] md:text-[57px] lg:mb-[52px] lg:text-[64px] xl:text-[74px] xl:leading-[1.1]">
              The <span className="italic">Manifesto</span>
            </h3>
          </TextAppearAnimation>
          <RevealWrapper className="flex flex-col gap-x-16 gap-y-16 lg:flex-row lg:items-stretch">
            <div className="flex items-center justify-center max-lg:w-full lg:h-full">
              <img 
                src="/images/logo-icon.png" 
                alt="About me" 
                className="hidden h-full max-w-[150px] object-contain md:block max-lg:w-[45px] max-lg:h-auto lg:h-full svg-brown-color"
              />
            </div>
            <div className="flex flex-col">
              <p className={`${libreBaskerville.className} text-lg leading-[1.6] tracking-[0.36px]`}>
                The world is too loud. Infinite connection has replaced the warmth of a gaze, leaving us with everything
                but the one thing we cannot manufacture: The Uninterrupted Moment. Binaryhubb is a boundary, not a
                product. It is a sanctuary from a country that never silences.
              </p>
              <p className={`${libreBaskerville.className} mb-4 mt-5 text-lg leading-[1.6] tracking-[0.36px]`}>
                Our philosophy is the Ritual of 0 and 1: 0 is the silence of the world; 1 is the presence of the soul.
                We measure time by depth, not minutes. Sixty minutes of absolute intention is worth a lifetime of
                distracted proximity.
              </p>
              <p className={`${libreBaskerville.className} mb-4 text-lg leading-[1.6] tracking-[0.36px]`}>
                Disconnect to Begin.
              </p>
              {/* <ul>
                <li>
                  <Link href="/about" className="rv-button rv-button-white block text-center md:inline-block">
                    <div className="rv-button-top">
                      <span>Meet Our Experts</span>
                    </div>
                    <div className="rv-button-bottom">
                      <span>Meet Our Experts</span>
                    </div>
                  </Link>
                </li>
              </ul> */}
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}

export default AboutV4
