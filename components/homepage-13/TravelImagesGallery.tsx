import RevealWrapper from '../animation/RevealWrapper'

const TravelImagesGallery = () => {
  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <div className="grid grid-cols-12 gap-2 lg:gap-3.5 2xl:gap-7 auto-rows-[280px] lg:auto-rows-[350px] xl:auto-rows-[420px]">
          <RevealWrapper className="reveal-me col-span-4 row-span-1">
            <img
              src="/images/christian-lambert-vmIWr0NnpCQ-unsplash.jpg"
              alt="Van in mountains"
              className="h-full w-full object-cover"
            />
          </RevealWrapper>
          <div className="col-span-4 row-span-2 flex flex-col gap-2 lg:gap-3.5 2xl:gap-7 h-full">
            <RevealWrapper className="reveal-me flex-[2] min-h-0">
              <img
                src="/images/ishan-seefromthesky-EOAnV_C1a4w-unsplash.jpg"
                alt="Building on cliff edge - top"
                className="h-full w-full object-cover"
              />
            </RevealWrapper>
            <RevealWrapper className="reveal-me flex-[3] min-h-0">
              <img
                src="/images/nathan-dumlao-2VA7xZx_l9Q-unsplash.jpg"
                alt="Building on cliff edge - bottom"
                className="h-full w-full object-cover"
              />
            </RevealWrapper>
          </div>
          <RevealWrapper className="reveal-me col-span-4 row-span-1">
            <img
              src="/images/yaroslav-muzychenko-xG-pV6Eu-bE-unsplash.jpg"
              alt="Mountain view"
              className="h-full w-full object-cover"
            />
          </RevealWrapper>
          <RevealWrapper className="reveal-me col-span-2 row-span-1">
            <img
              src="/images/alex-block-R-vEolhiyAY-unsplash.jpg"
              alt="Travel finances"
              className="h-full w-full object-cover"
            />
          </RevealWrapper>
          <RevealWrapper className="reveal-me col-span-2 row-span-1">
            <img
              src="/images/stories--BqB2zptPQo-unsplash.jpg"
              alt="Person in forest"
              className="h-full w-full object-cover"
            />
          </RevealWrapper>
          <RevealWrapper className="reveal-me col-span-4 row-span-1">
            <img
              src="/images/alessia-cocconi-5MgXyWVpBMA-unsplash.jpg"
              alt="City tram"
              className="h-full w-full object-cover"
            />
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}

export default TravelImagesGallery
