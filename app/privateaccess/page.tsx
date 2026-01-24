import ContactForm from '@/components/contactpage/ContactForm'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutOne from '@/components/shared/LayoutOne'
import PageHero from '@/components/shared/PageHero'

export const metadata = {
  title: 'Private Access',
}

const ContactPage = () => {
  return (
    <LayoutOne
      mainClassName="min-h-screen"
      mainStyle={{
        backgroundColor: '#ede9e4',
        backgroundImage:
          'linear-gradient(rgba(237, 233, 228, 0.90), rgba(237, 233, 228, 0.85)), url(/images/luximg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}>
      <PageHero
        // badgeTitle="Contact"
        title="Private Access"
        // description="Share your vision with us. We craft bespoke digital experiences that elevate brands and captivate audiences."
        showGradient={false}
        spacing="pt-[130px] md:pt-[140px] pb-16 sm:pb-24 md:pb-28 lg:pb-32 xl:pb-20 relative overflow-hidden"
        sectionClassName="bg-transparent"
        titleClassName="instrument-serif-regular text-[#181818]"
        descriptionClassName="text-[#181818]/70 max-w-[520px]"
        badgeClassName="!bg-[#181818]/10"
      />
      <ContactForm />
      {/* <CTA
        headingClass="instrument-serif-regular text-[#181818]"
        buttonHref="/"
        buttonText="Back to Home"
        buttonVariant="secondary">
        Let's chat!
        <CtaImageSlider
          slides={[
            { id: '1', img: '/images/agent/01.jpg' },
            { id: '2', img: '/images/agent/02.jpg' },
            { id: '3', img: '/images/agent/03.jpg' },
          ]}
        />
        with us.
        <i className="block font-instrument italic max-md:inline-block max-sm:pl-2 sm:mt-10">
          A virtual coffee?
        </i>
      </CTA> */}
    </LayoutOne>
  )
}

export default ContactPage
