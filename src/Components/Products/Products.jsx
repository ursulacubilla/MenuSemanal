import React, { useState } from 'react';
import { ListProducts } from './ListProducts';

export const Products = () => {
const [isActive, setIsActive] = useState(false);

const handleOnClick = () => {
  setIsActive(!isActive);
}
  return (
    <div>
    <button onClick={handleOnClick}>Generar Menu</button>
      {ListProducts.map(({ dia, food }, index) => {
        return (
          <div key={index}>
          {isActive && <h3>{dia}: </h3>}
          {isActive && <p>{food}</p>}
            {isActive && <button>Cambiar solo este menu</button>}
          </div>
        )
      })}
    </div>
  )
}
