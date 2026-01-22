import RevealWrapper from '../animation/RevealWrapper'
import HeroGradientAnimation from './HeroGradientAnimation'
import { cn } from '@/utils/cn'

interface PropsType {
  badgeTitle?: string
  title: string
  italicTitle?: string
  description?: string
  spacing?: string
  scale?: boolean
  showGradient?: boolean
  sectionClassName?: string
  titleClassName?: string
  descriptionClassName?: string
  badgeClassName?: string
}

const PageHero = ({
  badgeTitle,
  title,
  description,
  italicTitle,
  spacing,
  scale,
  showGradient = true,
  sectionClassName,
  titleClassName,
  descriptionClassName,
  badgeClassName,
}: PropsType) => {
  return (
    <section
      className={cn(
        spacing ?? 'relative overflow-hidden py-32 md:py-40 lg:py-[185px]',
        sectionClassName,
      )}>
      {showGradient && <HeroGradientAnimation scale={scale} />}

      <div className="container">
        <RevealWrapper className="text-center">
          {badgeTitle && (
            <div className={cn('rv-badge', badgeClassName)}>
              <span className="rv-badge-text">{badgeTitle}</span>
            </div>
          )}
          {title && (
            <h1 className={cn('mb-4 mt-3.5', titleClassName)}>
              {title} <i className="font-instrument italic">{italicTitle}</i>
            </h1>
          )}
          {description && (
            <p
              className={cn(
                'text-appear mx-auto max-w-[470px] md:max-w-[750px]',
                descriptionClassName,
              )}>
              {description}
            </p>
          )}
        </RevealWrapper>
      </div>
    </section>
  )
}

export default PageHero
