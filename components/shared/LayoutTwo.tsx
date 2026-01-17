import { Fragment, ReactNode, CSSProperties } from 'react'
import FooterV2 from './FooterV2'
import Navbar from './Navbar'

const LayoutTwo = ({
  children,
  mainClassName,
  mainStyle,
}: Readonly<{
  children: ReactNode
  mainClassName?: string
  mainStyle?: CSSProperties
}>) => {
  return (
    <Fragment>
      <Navbar />
      <main 
        className={`relative z-10 bg-backgroundBody dark:bg-secondary ${mainClassName || ''}`}
        style={mainStyle}
      >
        {children}
      </main>
      <FooterV2 />
    </Fragment>
  )
}

export default LayoutTwo
