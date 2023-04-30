import React from 'react'

export const ItemListaNavbar = ({nombre}) => {
  return (
    <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">{nombre}</a>
            </li>
  )
}
