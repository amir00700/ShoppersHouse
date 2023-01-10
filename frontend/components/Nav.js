import Link from 'next/link';
import {FiShoppingBag} from 'react-icons/fi';
import { NavStyles, NavItems } from '../styles/NavStyles';

export default function  Nav()
{

return (<NavStyles>
<div>
    <Link href={`/`}>KA Bastro Bitan</Link></div>
    < div>
        <FiShoppingBag/>
        <h3>Cart</h3>
        </ div>

        </NavStyles>
)
}
