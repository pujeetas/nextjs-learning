import { connectDB } from '@/lib/db'
import Product from '@/lib/models/Product'
import Image from 'next/image'

export default async function ProductsPage() {
  await connectDB()
  const products = await Product.find()

  return (
    <main>
        <Image src="/image.png" alt='"product' width={300} height={300}/>
      <h1>Products</h1>
      {products.map((product) => (
        <div key={product._id}>
          <h2>{product.name}</h2>
          <p>${product.price}</p>
        </div>
      ))}
    </main>
  )
}