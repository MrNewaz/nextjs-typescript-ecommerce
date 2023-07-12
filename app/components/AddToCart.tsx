'use client'

import { AddCartType } from '@/types/AddCartType'
import { useState } from 'react'
import { useCartStore } from '../store'

export default function AddToCart({
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
      <button onClick={handleAddToCart} disabled={added} className="my-4">
        {!added && <span>Add to cart</span>}
        {added && <span>Adding to cart 😄</span>}
      </button>
    </>
  )
}
