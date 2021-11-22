import { CartWidget } from '../CartWidget/CartWidget'
import './NavBar.scss'
import { Link } from 'react-router-dom'

export const NavBar = () => {

return (

<div className="header">

<Link to="/"><h1>LOGO</h1></Link>       


<nav>
  
  <ul>
    
    <li><Link to="/producto/nacional">PRODUCTO NACIONAL</Link></li>
    
    <li><Link to="/producto/importado">PRODUCTO IMPORTADO</Link></li>

  </ul>

</nav>

<Link to="/cart"> <CartWidget/> </Link>
  


</div>
)
}


