import { useState } from 'react';

const IngredientList = (props) => {
 
    return <ul>{props.availableIngredients.map((ingerdient)=>
        <div key={props.availableIngredients.name}>
            <li style={{ backgroundColor: ingerdient.color }}>{ingerdient.name}</li>
            <button onClick={props.addToBurger(ingerdient)}>+</button>
        </div>
        )}</ul>;
  };
  
  export default IngredientList;
  