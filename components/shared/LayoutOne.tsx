import { Fragment, ReactNode, CSSProperties } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const LayoutOne = ({
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
        className={`relative z-10 bg-backgroundBody dark:bg-dark lg:mb-[600px] ${mainClassName || ''}`}
        style={mainStyle}
      >
        {children}
      </main>
      <Footer />
    </Fragment>
  )
}

export default LayoutOne
