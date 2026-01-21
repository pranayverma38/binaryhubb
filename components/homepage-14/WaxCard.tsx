'use client'

import Image from 'next/image'

const WaxCard = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 h-full w-full">
        <Image
          src="/images/bedroom.jpg"
          alt="Bedroom"
          fill
          className="object-cover"
          sizes="100vw"
          priority
          quality={90}
        />
      </div>
      <div className="absolute inset-0 h-full w-full bg-black/50" />
      <div className="absolute inset-0 flex items-center justify-center z-10 overflow-hidden">
        <Image
          src="/images/jjimage.png"
          alt="JJ Image"
          width={0}
          height={0}
          sizes="100vw"
          className="w-[calc(100vw-100px)] lg:w-[calc(40vw)] h-auto"
          priority
          quality={90}
        />
      </div>
    </section>
  )
}

export default WaxCard
