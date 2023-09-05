import React, { useState } from 'react';
import { Week } from './Week';
import { FoodList } from './FoodList';
import { DinnerList } from './DinnerList';

export const Products = () => {
const [isActive, setIsActive] = useState(false);

const handleOnClick = () => {
  setIsActive(isActive + 1);
}
const Aleatorio = (food) => {
  return [...food]
  .sort(() => Math.random() > 0.5 ? 1 : -1)
  .slice(0, 7);
}
const guardado = Aleatorio(FoodList);

const dinnerAleatorio = (dinner) => {
  return [...dinner]
  .sort(() => Math.random() > 0.5 ? 1 : -1)
  .slice(0, 7);
}
const dinnerGuardado = dinnerAleatorio(DinnerList);



console.log(guardado[0].food, "arreglo");
// console.log(FoodList[0], "Comidas");

  return (
    <div>
    <button onClick={handleOnClick}>Generar Menu</button>
    <h1>Almuerzos</h1>
      
     {Week.map(({ dia }, index) => {
      console.log(index, "Holaaaaaaaaa");
     return (
       <div key={index}>
       {isActive && <h3>{dia}: </h3>}
       
       {isActive && <p>{guardado[index].food}</p>}
       
       
       {isActive && <button>Cambiar solo este menu</button>}
       </div>
       )
      })}
      <h1>Cenas</h1>
      {Week.map(({ dia }, index) => {
        console.log(index, "Holaaaaaaaaa");
       return (
         <div key={index}>
         {isActive && <h3>{dia}: </h3>}
         
         {isActive && <p>{dinnerGuardado[index].dinner}</p>}
         
         {isActive && <button>Cambiar solo este menu</button>}
         </div>
         )
        })}
    </div>
    )
  }
  
  
  