'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { IoAddCircle, IoRemoveCircle } from 'react-icons/io5'
import { useCartStore } from '../store'

const Cart = () => {
  const cartStore = useCartStore()
  const router = useRouter()

  const totalPrice = cartStore.cart.reduce((acc, item) => {
    return acc + item.price! * item.quantity!
  }, 0)
  return (
    <div>
      {cartStore.cart.map((item) => (
        <div
          key={item.id}
          className="flex p-4 my-4 gap-4 bg-base-100 rounded-md"
        >
          <Image
            className="rounded-md h-auto w-12 object-contain"
            src={item.image}
            alt={item.title}
            width={120}
            height={120}
          />
          <div>
            <h1 className="font-bold">{item.title}</h1>
            <div className="flex gap-2 flex-col">
              <h1>Quantity: {item.quantity}</h1>

              <div>
                <button
                  onClick={() =>
                    cartStore.removeProduct({
                      title: item.title,
                      id: item.id,
                      image: item.image,
                      price: item.price,
                      quantity: item.quantity,
                    })
                  }
                  className="text-red-500 text-xl mr-2"
                >
                  <IoRemoveCircle />
                </button>
                <button
                  onClick={() =>
                    cartStore.addProduct({
                      title: item.title,
                      id: item.id,
                      image: item.image,
                      price: item.price,
                      quantity: item.quantity,
                    })
                  }
                  className="text-green-500 text-xl"
                >
                  <IoAddCircle />
                </button>
              </div>
            </div>
            <p className="text-sm">
              Total: {item.price !== null ? item.price * item.quantity: 'N/A'}৳
            </p>
          </div>
        </div>
      ))}

      {cartStore.cart.length > 0 ? (
        <div>
          <p className="text-sm font-medium">Total: {totalPrice}৳</p>
          <button
            onClick={() => {
              cartStore.clearCart()
            }}
            className="py-2 mt-4 bg-red-300 text-black w-full rounded-md"
          >
            Clear Cart
          </button>
          <button
            onClick={() => {
              cartStore.clearCart()
              router.push('/')
            }}
            className="py-2 mt-4 bg-yellow-300 text-black w-full rounded-md"
          >
            Checkout
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-2xl font-bold">Your cart is empty</h1>
          <button
            onClick={() => router.push('/')}
            className="py-2 mt-4 bg-yellow-300 text-black w-full rounded-md"
          >
            Go to Products
          </button>
        </div>
      )}
    </div>
  )
}

export default Cart
