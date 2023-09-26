import React, { useState } from 'react';
import { Week } from './Week';
import { FoodList } from './FoodList';
import { DinnerList } from './DinnerList';
import {  DivAlmuerzos, DivCenas, DivTabla, Parrafo } from './ReturnDiv';

export const Products = () => {
const [isActive, setIsActive] = useState(false);
const [change, setChange] = useState(false);

const handleOnClick = () => {
  setIsActive(isActive + 1);
}
const Aleatorio = (food) => {
  return [...food]
  .sort(() => Math.random() > 0.5 ? 1 : -1)
  .slice(0, 7);
}
const guardado = Aleatorio(FoodList);
console.log(guardado);

const dinnerAleatorio = (dinner) => {
  return [...dinner]
  .sort(() => Math.random() > 0.5 ? 1 : -1)
  .slice(0, 7);
}
const dinnerGuardado = dinnerAleatorio(DinnerList);

const handleOnClickChange = () => {
  
// setChange(change);
// esto esta malo, no funciona, me cambia el menu de todos los dias.!!!
}

  return (
    <DivTabla>
    <div>
    <button onClick={handleOnClick}>Generar Menu</button>
    </div>
    <DivAlmuerzos>
    <h1>Almuerzos</h1>
      
     {Week.map(({ dia }, index) => {
     return (
       <div key={index}>
       {isActive && <h3>{dia}: </h3>}
       
       {isActive && <Parrafo>{guardado[index].food}</Parrafo>}
      
       </div>
       )
      })}
      </DivAlmuerzos>
      <DivCenas>
      <h1>Cenas</h1>
      {Week.map(({ dia }, index) => {
       return (
         <div key={index}>
         {isActive && <h3>{dia}: </h3>}
         
         {isActive && <Parrafo>{dinnerGuardado[index].dinner}</Parrafo>}
         
         </div>
         )
        })}
        </DivCenas>
    
    </DivTabla>
    )
  }
  
  
  // {isActive && <button onClick={handleOnClickChange}>Cambiar solo este menu</button>}