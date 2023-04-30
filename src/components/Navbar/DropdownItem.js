import React from 'react'

export const DropdownItem = ({nombre}) => {
  return (
    <li><a class="dropdown-item" href={`/category/${nombre}`}>{nombre}</a></li>
  )
}
