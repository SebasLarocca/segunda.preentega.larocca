import './Navbar.css';
import { ItemListaNavbar } from './ItemListaNavbar'
import { CartWidget } from './CartWidget';
import { DropdownItem } from './DropdownItem';


function Navbar({cart} ) {

  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary navbar-fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand ms-4" href="/"><strong>ZORKA MUEBLES</strong></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <ItemListaNavbar nombre="Nuestra filosofía" />
            <ItemListaNavbar nombre="Nuestra historia" />

            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Productos y servicios
              </a>
              <ul class="dropdown-menu">
                <DropdownItem nombre="Mesas"/>
                <DropdownItem nombre="Sillas y sillones" />
                <DropdownItem nombre="Otros" />
              </ul>
            </li>
          </ul>

        </div>
      </div>
      <CartWidget cart={cart}/>
    </nav>
  );
}

export default Navbar;
