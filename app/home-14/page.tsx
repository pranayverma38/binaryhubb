import TravelImagesGallery from '@/components/homepage-13/TravelImagesGallery'
import AboutV13 from '@/components/homepage-14/AboutV13'
import AwardWinningWork from '@/components/homepage-14/AwardWinningWork'
import HeroV14 from '@/components/homepage-14/HeroV14'
import ImmersiveImage from '@/components/homepage-14/ImmersiveImage'
import OurWorkShowcase from '@/components/homepage-14/OurWorkShowcase'
import ServicesV13 from '@/components/homepage-14/ServicesV13'
import ServicesV14 from '@/components/homepage-14/ServicesV14'
import TestimonialV9 from '@/components/homepage-14/TestimonialV9'
import WhyChooseUsV3 from '@/components/homepage-14/WhyChooseUsV3'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutOne from '@/components/shared/LayoutOne'
import AboutV4 from '@/components/homepage-04/AboutV4'
import ImageMarque from '@/components/homepage-04/ImageMarque'
import Video from '@/components/shared/Video'
import ProcessV2 from '@/components/homepage-02/ProcessV2'

export const metadata = {
  title: 'Film Production Agency  - Rivor',
}

const homepage14 = () => {
  return (
    <LayoutOne mainStyle={{ backgroundColor: 'rgb(237, 233, 228)' }}>
      <HeroV14 />
      <AboutV13 />
      {/* <ServicesV13 />
      <OurWorkShowcase />
      <WhyChooseUsV3 />
      <AwardWinningWork />
      <TestimonialV9 /> */}
      <TravelImagesGallery />
      <AboutV4 />
      <ImageMarque />
      {/* <CTA headingClass="xl:text-[88px]" buttonText="Start Your Film Project">
        Let’s Create
        <CtaImageSlider
          slides={[
            { id: '1', img: '/images/agent/11.png' },
            { id: '2', img: '/images/agent/09.png' },
            { id: '3', img: '/images/agent/10.png' },
          ]}
        />
        Something
        <span className="block font-instrument italic max-md:inline-block sm:mt-10">Extraordinary</span>
      </CTA> */}
      <ServicesV14 />
      <ProcessV2 />
      {/* <ImmersiveImage imageSrc="/images/44.jpg" imageAlt="Immersive experience" /> */}


    </LayoutOne>
  )
}

export default homepage14
