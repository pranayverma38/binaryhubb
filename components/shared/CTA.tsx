import ContactForm from '@/components/shared/ContactForm'
import { cn } from '@/utils/cn'
import Link from 'next/link'
import { FC, ReactNode } from 'react'
import RevealWrapper from '../animation/RevealWrapper'

interface CTAProps {
  children: ReactNode
  showContactForm?: boolean
  headingClass?: string
  buttonText?: string
  buttonHref?: string
  buttonVariant?: 'primary' | 'secondary'
}

const CTA: FC<CTAProps> = ({
  children,
  showContactForm = false,
  headingClass = '',
  buttonText = 'Contact Us',
  buttonHref = '/contact',
  buttonVariant = 'primary',
}) => {
  const buttonClass = cn(
    'rv-button block md:inline-block',
    buttonVariant === 'secondary' ? 'rv-button-secondary' : 'rv-button-primary',
  )
  return (
    <section className="relative pb-[70px] pt-14 md:pt-16 lg:pb-[140px] lg:pt-[88px] xl:pt-[100px]">
      <div className="container">
        <RevealWrapper>
          <h2
            className={cn(
              'text-center font-normal xl:text-[96px] xl:leading-[1.1] xl:tracking-[-2.88px]',
              headingClass,
            )}>
            {children}
          </h2>
        </RevealWrapper>
        <RevealWrapper as="ul" className="mt-14 flex list-none items-center justify-center">
          <li className="mx-auto block w-full text-center md:inline-block md:w-auto">
            <Link href={buttonHref} className={buttonClass}>
              <div className="rv-button-top">
                <span>{buttonText}</span>
              </div>
              <div className="rv-button-bottom">
                <span className="whitespace-nowrap">{buttonText}</span>
              </div>
            </Link>
          </li>
        </RevealWrapper>
        {showContactForm && <ContactForm />}
      </div>
    </section>
  )
}

export default CTA
