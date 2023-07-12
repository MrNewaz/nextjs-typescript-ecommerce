'use client'

import { Quicksand } from 'next/font/google'
import { ReactNode, useEffect, useState } from 'react'

const quickSand = Quicksand({ subsets: ['latin'] })

export default function Hydrate({ children }: { children: ReactNode }) {
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    setIsHydrated(true)
  }, [])
  return (
    <>
      {isHydrated ? (
        <body
          className={`${quickSand.className} font-medium px-4 lg:px-28 md:px-12`}
          suppressHydrationWarning={true}
        >
          {children}
        </body>
      ) : (
        <body></body>
      )}
    </>
  )
}
