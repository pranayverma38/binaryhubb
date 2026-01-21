import footerData from '@/data/footer.json'
import arrowIcon from '@/public/images/icons/arrow-Icon.svg'
import logo from '@/public/images/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import FooterProvider from './FooterProvider'
import logoPng from '@/public/images/logo-icon.png'

const Footer = () => {
  return (
    <FooterProvider>
      <div className="container">
        <div className="relative z-10 flex flex-col flex-wrap justify-center gap-y-10 sm:flex-row sm:justify-between sm:gap-y-16">
          <div className="pr-8 max-lg:basis-full flex justify-start lg:justify-center items-start">
            <Image src={logoPng} alt="logo" className="h-auto w-[90px] lg:w-[150px]" />
            {/* <h5 className="mb-4 font-satoshi text-sm font-bold uppercase tracking-[3px] text-white sm:mb-8">
              Reach Us
            </h5>
            <p className="mb-5 text-sm text-white">
              Book a quick 15 min meeting where we discuss if our offer <br />
              would work for your case
            </p>
            <div className="group flex max-w-[360px] items-center justify-between gap-4 bg-primary bg-opacity-30 p-4 backdrop-blur-2xl">
              <Image className="h-[55px] w-auto" src={logo} alt="logo" />
              <div>
                <h6 className="font-satoshi text-sm font-bold text-white">Schedule a Free Meeting</h6>
                <p className="text-sm text-white">1 spot left this month</p>
              </div>
              <Link href="/contact">
                <figure className="relative h-[55px] w-[55px] cursor-pointer overflow-hidden bg-primary">
                  <Image
                    src={arrowIcon}
                    alt="Arrow Icon"
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100 transition-all duration-500 group-hover:-translate-y-12 group-hover:translate-x-8 group-hover:opacity-0"
                  />
                  <Image
                    src={arrowIcon}
                    alt="Arrow Icon"
                    className="absolute -translate-x-4 translate-y-12 opacity-0 transition-all duration-500 group-hover:translate-x-[19px] group-hover:translate-y-5 group-hover:opacity-100"
                  />
                </figure>
              </Link>
            </div> */}
          </div>

          {footerData.map((section, index) => (
            <div key={`Id_${index}`}>
              <h5 className="mb-4 font-satoshi text-sm font-bold uppercase tracking-[3px] text-white sm:mb-8">
                {section.title}
              </h5>
              <ul>
                {section.links.map(({ href, label }) => (
                  <li className="mb-4" key={href}>
                    <Link
                      href={href}
                      className="block text-white transition-colors duration-300 hover:font-medium hover:text-primary">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 w-full">
        <h5 className="footer-text xs:text-6xl absolute bottom-0 left-1/2 w-full -translate-x-1/2 translate-y-[30%] text-nowrap text-center instrument-serif-regular text-5xl font-medium tracking-widest sm:text-7xl md:text-[110px] lg:text-[150px] xl:text-[180px] 2xl:text-[200px] opacity-15">
          BINARYHUBB
        </h5>
      </div>
    </FooterProvider>
  )
}

export default Footer
