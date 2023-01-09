import {useQuery} from "urql";
import { GET_PRODUCT_QUERY } from "../lib/query";
import {useRouter} from "next/router";
import { DetailsStyle,PoductInfo, Quantity, Buy  } from "../styles/productDetails";
import {AiFillPlusCircle,AiFillMinusCircle} from 'react-icons/ai';




export default function ProductDetails(){
    //fetch slug
const {query}=useRouter();
    
   // fetch graphql data
    const[results] = useQuery({
        query: GET_PRODUCT_QUERY,
        variables:{slug:query.slug}
    })
    const {data, fetching, error}=results;
    if (fetching) return <p>Loading....</p>
    if(error) return <p>oh no....</p> 

    ///extracxt ur data hera
  
    const {title, description,price, image}=data.products.data[0].attributes;
return(
<DetailsStyle>
<img src={image.data.attributes.formats.medium.url} alt ={title}/>
<PoductInfo>
    <h2>{title}</h2>
    <h3>{price} cad</h3>
    <p>{description}</p>

<Quantity>
    <span>Quantity</span>
    <button><AiFillPlusCircle/></button>
    <p>0</p>
    <button><AiFillMinusCircle/></button>
</Quantity>
<Buy >Add to cart</Buy>
</PoductInfo>

</DetailsStyle>
)}