import { CartWidget } from '../CartWidget/CartWidget'
import './NavBar.scss'

export const NavBar = () => {

return (

<div className="header">
        
<h1>LOGO</h1>

<nav>
  
  <ul>
    
    <li>HOME</li>
    
    <li>PRODUCTOS</li>
    
    <li>SUCURSALES</li>
    
    <li>NOSOTROS</li>

  </ul>

</nav>

  <CartWidget/>


</div>
)
}


