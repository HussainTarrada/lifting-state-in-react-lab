import { useState } from 'react';
import './App.css';
import BurgerStack from './components/BurgerStack/BurgerStack';
import IngredientList from './components/IngredientList/IngredientList';

const App = () => {
  const availableIngredients = [
    { name: 'Kaiser Bun', color: 'saddlebrown' },
    { name: 'Sesame Bun', color: 'sandybrown' },
    { name: 'Gluten Free Bun', color: 'peru' },
    { name: 'Lettuce Wrap', color: 'olivedrab' },
    { name: 'Beef Patty', color: '#3F250B' },
    { name: 'Soy Patty', color: '#3F250B' },
    { name: 'Black Bean Patty', color: '#3F250B' },
    { name: 'Chicken Patty', color: 'burlywood' },
    { name: 'Lettuce', color: 'lawngreen' },
    { name: 'Tomato', color: 'tomato' },
    { name: 'Bacon', color: 'maroon' },
    { name: 'Onion', color: 'lightyellow' },
    { name: 'Cheddar Cheese', color: '#FDE18B' },
    { name: 'Swiss Cheese', color: '#F1E1A8' },
  ];

  
  const [stack, setStack] = useState([{name: '', color: ''}])

  async function addToBurger(event){
    event.preventDefault();
      setStack([{name: event.name, color: event.color}])
      console.log(event)
    }


  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
       <IngredientList availableIngredients = {availableIngredients} stack = {stack} addToBurger = {addToBurger}/>
       <BurgerStack availableIngredients = {availableIngredients} stack = {stack}/>
      </section>
    </main>
  );
};

export default App;
