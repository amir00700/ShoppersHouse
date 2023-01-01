import Head from 'next/head'
import Link from "next/link";
import {useQuery} from 'urql';
import Product from '../components/Products';
import { PRODUCT_QUERY } from '../lib/query';



export default function Home() {
  //Fetch produtcs from strapi
const[results]=useQuery({query: PRODUCT_QUERY})
const {data, fetching, error}=results;
if (fetching) return <p>Loading....</p>
if(error) return <p>oh no....</p> 

const products=data.products.data;
console.log(products);

  return (
    <div>
      <Head> 
        <title>Create Next App</title>
      </Head>
      <main >
    <h1>Helllo world</h1>
    { products.map ((product) => (
      <Product product = {product} key={product.attributes.slug} />
    ))}
      </main>
    </div>
  )
}
