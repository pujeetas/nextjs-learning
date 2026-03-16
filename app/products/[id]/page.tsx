
const products = [
  { id: '1', name: 'Adidas Shoes', price: '$100' },
  { id: '2', name: 'Nike Shoes', price: '$120' },
  { id: '3', name: 'Puma Shoes', price: '$90' },
]

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {

    const {id} = await params;
    const product = products.find(p => p.id === id)
  return (
    <div>
      <h1>{product?.name}</h1>
            <h1>{product?.price}</h1>

    </div>
  )
}