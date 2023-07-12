import { Product } from '@/types/ProductTypes'
import Image from 'next/image'
import AddToCartFull from '../components/AddToCartFull'

async function getProduct(id: string) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function ProductDetails({
  params,
}: {
  params: { id: string }
}) {
  const { id } = params
  const data: Product = await getProduct(id)
  return (
    <div>
      <Image
        className="rounded-md h-72 w-auto object-cover py-4"
        src={data.image}
        alt={data.title}
        width={500}
        height={500}
      />
      <h1 className="text-2xl font-bold mb-2">{data.title}</h1>
      <p className="text-gray-500 text-xl mb-1">{data.description}</p>
      <p className="text-gray-800 text-xl font-medium">Price: {data.price}৳</p>
      <AddToCartFull
        id={data.id}
        title={data.title}
        image={data.image}
        price={data.price}
      />
    </div>
  )
}
