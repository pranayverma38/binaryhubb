import Marquee from 'react-fast-marquee'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

const ImageMarque = () => {
  return (
    <section className="overflow-hidden pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[100px] lg:pt-[100px] xl:pb-[130px] xl:pt-[130px]">
          <TextAppearAnimation>
            <h3 className="text-appear mb-8 text-center instrument-serif-regular text-[48px] md:text-[57px] lg:mb-[52px] lg:text-[64px] xl:text-[74px] xl:leading-[1.1]">
              The <span className="italic">Sensory Room</span>
            </h3>
          </TextAppearAnimation>
      <RevealWrapper className="marquee-container">
        <Marquee pauseOnHover speed={40} autoFill>
          <div className="flex items-end gap-3 first:mr-3">
            <figure className="group relative min-w-96 md:max-w-[362px] h-[410px] md:h-[430px] overflow-hidden">
              <img src="/images/11.jpg" alt=" 1" className="h-full w-full object-cover" />
            </figure>
            <figure className="group relative min-w-96 md:max-w-[362px] h-[558px] md:h-[538px] overflow-hidden">
              <img src="/images/22.jpg" alt=" 2" className="h-full w-full object-cover" />
            </figure>
            <figure className="group relative min-w-96 md:max-w-[362px] h-[323px] md:h-[343px] overflow-hidden">
              <img src="/images/33.jpg" alt=" 3" className="h-full w-full object-cover" />
            </figure>
            <figure className="group relative min-w-96 md:max-w-[362px] h-[515px] md:h-[535px] overflow-hidden">
              <img src="/images/44.jpg" alt=" 4" className="h-full w-full object-cover" />
            </figure>
            <figure className="group relative min-w-96 md:max-w-[362px] h-[421px] md:h-[441px] overflow-hidden">
              <img src="/images/55.jpg" alt=" 5" className="h-full w-full object-cover" />
            </figure>
          </div>
        </Marquee>
      </RevealWrapper>
    </section>
  )
}

export default ImageMarque
