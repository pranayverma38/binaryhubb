import Marquee from 'react-fast-marquee'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

const ImageMarque = () => {
  return (
    <section className="overflow-hidden pb-10 pt-10 md:pb-16 md:pt-16 lg:pb-[100px] lg:pt-[100px] xl:pb-[130px] xl:pt-[130px]">
          <TextAppearAnimation>
            <h3 className="text-appear mb-6 text-center instrument-serif-regular text-[32px] sm:text-[40px] md:text-[57px] lg:mb-[52px] lg:text-[64px] xl:text-[74px] xl:leading-[1.1]">
              The <span className="italic">Sensory Room</span>
            </h3>
          </TextAppearAnimation>
      <RevealWrapper className="marquee-container">
        <Marquee pauseOnHover speed={40} autoFill>
          <div className="flex items-end gap-2 sm:gap-3 first:mr-3">
            <figure className="group relative w-52 sm:w-64 md:min-w-96 md:max-w-[362px] h-64 sm:h-72 md:h-[430px] overflow-hidden">
              <img src="/images/11.jpg" alt=" 1" className="h-full w-full object-cover" />
            </figure>
            <figure className="group relative w-52 sm:w-64 md:min-w-96 md:max-w-[362px] h-72 sm:h-80 md:h-[538px] overflow-hidden">
              <img src="/images/22.jpg" alt=" 2" className="h-full w-full object-cover" />
            </figure>
            <figure className="group relative w-52 sm:w-64 md:min-w-96 md:max-w-[362px] h-56 sm:h-64 md:h-[343px] overflow-hidden">
              <img src="/images/33.jpg" alt=" 3" className="h-full w-full object-cover" />
            </figure>
            <figure className="group relative w-52 sm:w-64 md:min-w-96 md:max-w-[362px] h-72 sm:h-80 md:h-[535px] overflow-hidden">
              <img src="/images/44.jpg" alt=" 4" className="h-full w-full object-cover" />
            </figure>
            <figure className="group relative w-52 sm:w-64 md:min-w-96 md:max-w-[362px] h-60 sm:h-72 md:h-[441px] overflow-hidden">
              <img src="/images/55.jpg" alt=" 5" className="h-full w-full object-cover" />
            </figure>
          </div>
        </Marquee>
      </RevealWrapper>
    </section>
  )
}

export default ImageMarque
