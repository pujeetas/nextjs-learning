const products  = [
     { id: '1', name: 'Adidas Shoes', price: 100 },
  { id: '2', name: 'Nike Shoes', price: 120 },
  { id: '3', name: 'Puma Shoes', price: 90 },

]

export async function GET() {

    return Response.json(products)
}


export async function POST(request: Request) {
    const body = await request.json()

    return Response.json({
        message: "Product created",
        product: body
    })
}