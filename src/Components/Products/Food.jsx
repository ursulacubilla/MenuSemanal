import React from 'react';
import { FoodList } from './FoodList';

export const Food = () => {

  return (
    <>
        {FoodList.map(({ food }, index) => {
            console.log(NewList);
            return(
                <div key={index}>
                <p>{food}</p>
                </div>
            )
        })}
    </>
  )
}
