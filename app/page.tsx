import { Product } from '@/types/ProductTypes'

import Image from 'next/image'
import Link from 'next/link'
import AddToCart from './components/AddToCart'

async function getProducts() {
  const res = await fetch('https://fakestoreapi.com/products')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Home() {
  const data: Product[] = await getProducts()
  return (
    <div>
      <div className="grid grid-cols-fluid gap-12">
        {data.map((product: Product) => (
          <Link href={`/${product.id}`}>
            <div
              key={product.id}
              className="rounded-xl flex flex-col items-center
              border-gray-900 border-4 h-full"
            >
              <Image
                className="rounded-md h-36 w-auto object-cover py-4"
                src={product.image}
                alt={product.title}
                width={200}
                height={200}
              />
              <div className="bg-yellow-300 flex-1 h-full w-full flex flex-col justify-between p-4">
                <h2>{product.title}</h2>
                <br />
                <p>Price: {product.price}৳</p>
              </div>
              <AddToCart
                id={product.id}
                title={product.title}
                image={product.image}
                price={product.price}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
