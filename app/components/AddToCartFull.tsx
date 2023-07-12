'use client'

import { AddCartType } from '@/types/AddCartType'
import { useState } from 'react'
import { useCartStore } from '../store'

export default function AddToCartFull({
  title,
  id,
  image,
  price,
  quantity,
}: AddCartType) {
  const cartStore = useCartStore()
  const [added, setAdded] = useState(false)

  const handleAddToCart = (event: any) => {
    event.preventDefault()
    cartStore.addProduct({ id, title, price, quantity, image })
    setAdded(true)
    setTimeout(() => {
      setAdded(false)
    }, 500)
  }
  return (
    <>
      <button
        className="py-2 mt-4 bg-yellow-300 text-black w-full rounded-md"
        onClick={handleAddToCart}
        disabled={added}
      >
        {!added && <span>Add to cart</span>}
        {added && <span>Adding to cart 😄</span>}
      </button>
    </>
  )
}
