import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

const ProcessV2 = () => {
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
            <div className="grid grid-cols-10 gap-6 lg:gap-7 justify-items-center">
              {Array.from({ length: 50 }).map((_, idx) => (
                <span
                  key={idx}
                  className="h-3 w-3 rounded-full bg-black animate-dots-breathe"
                  style={{ animationDelay: `${idx * 80}ms` }}
                />
              ))}
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default ProcessV2
