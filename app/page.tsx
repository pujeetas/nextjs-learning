import Product from "@/lib/models/Product";
import MyButton from "./components/MyButton";
import { connectDB } from "@/lib/db";

export default async function Home() {

  await connectDB();

  const products = await Product.find()

  return (
   <main>
   <h1>Products</h1>
   {
    products.map((product) => (
      <div key={product._id}>
        <h2>{product.name}</h2>
        <p>$ {product.price}</p>
      </div>
    ))
   }
   </main>
  );
}
