
const BurgerStack = (props) => {
    return <ul> {props.stack.map((oneIngerdient)=>
        <div key={props.stack.name}>
            <li style={{ backgroundColor: oneIngerdient.color }}>{oneIngerdient.name}</li>
        </div>
    )}
    </ul>;
  };
  
  export default BurgerStack;
  