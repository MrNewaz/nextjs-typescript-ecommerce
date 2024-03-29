import { AddCartType } from '@/types/AddCartType'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type CartStore = {
  cart: AddCartType[]
  clearCart: () => void
  addProduct: (item: AddCartType) => void
  removeProduct: (item: AddCartType) => void
}

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      cart: [],
      clearCart: () => set({ cart: [] }),
      addProduct: (item) =>
        set((state) => {
          const existingItem = state.cart.find(
            (cartItem) => cartItem.id === item.id
          )
          if (existingItem) {
            const updatedCart = state.cart.map((cartItem) => {
              if (cartItem.id === item.id) {
                return { ...cartItem, quantity: cartItem.quantity! + 1 }
              }
              return cartItem
            })
            return { cart: updatedCart }
          } else {
            return { cart: [...state.cart, { ...item, quantity: 1 }] }
          }
        }),

      removeProduct: (item) =>
        set((state) => {
          //Check if the item exists and remove quantity - 1
          const existingItem = state.cart.find(
            (cartItem) => cartItem.id === item.id
          )
          if (existingItem && existingItem.quantity! > 1) {
            const updatedCart = state.cart.map((cartItem) => {
              if (cartItem.id === item.id) {
                return { ...cartItem, quantity: cartItem.quantity! - 1 }
              }
              return cartItem
            })
            return { cart: updatedCart }
          } else {
            //Remove item from cart
            const filteredCart = state.cart.filter(
              (cartItem) => cartItem.id !== item.id
            )
            return { cart: filteredCart }
          }
        }),
    }),
    { name: 'cart-storage' }
  )
)
