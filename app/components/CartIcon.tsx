'use client'

import Link from 'next/link'
import { AiFillShopping } from 'react-icons/ai'
import { useCartStore } from '../store'

const CartIcon = () => {
  const cartStore = useCartStore()
  return (
    <div>
      {/* <li>
        <AnimatePresence>
          {cartStore.cart.length > 0 && (
            <motion.span
              initial={{
                scale: 0,
              }}
              animate={{
                scale: 1,
              }}
              exit={{
                scale: 0,
              }}
              className="bg-primary text-white text-sm font-bold w-5 h-5 rounded-full absolute left-4 bottom-4 flex items-center justify-center"
            >
              {cartStore.cart.length}
            </motion.span>
          )}
        </AnimatePresence>
      </li> */}
      <Link
        href="/cart"
        className="flex items-center text-3xl relative cursor-pointer"
      >
        <h1 className="font-lobster text-xl md:text-2xl lg:text-2xl">
          <AiFillShopping />
          <span className="bg-yellow-300 text-black text-sm font-bold w-5 h-5 rounded-full absolute left-4 bottom-4 flex items-center justify-center">
            {cartStore.cart.length}
          </span>
        </h1>
      </Link>
    </div>
  )
}

export default CartIcon
