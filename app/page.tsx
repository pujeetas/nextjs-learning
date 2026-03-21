import { Suspense } from 'react'
import { connectDB } from '@/lib/db'
import Product from '@/lib/models/Product'

async function ProductList() {
  await connectDB()
  const products = await Product.find()

  return (
    <div>
      {products.map((product) => (
        <div key={product._id}>
          <h2>{product.name}</h2>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  )
}

export default function Home() {
  return (
    <main>
      <h1>Products</h1>      
      <Suspense fallback={<p>Loading products...</p>}>
        <ProductList />            
      </Suspense>
    </main>
  )
}