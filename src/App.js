import React, {useReducer} from 'react';
import reducer from "./Redusers/count.reducer";


const App = () => {
  const [state, dispatch] = useReducer(reducer, {count_1: 0, count_2: 0});
  let {count_1, count_2} = state;

  console.log(state)
  return (
      <div>

        <h1> state1: {count_1}</h1>
          <button onClick={() => dispatch({type: 'inc'})}>inc</button>
          <button onClick={() => dispatch({type: 'dec'})}>dec</button>
          <button onClick={() => dispatch({type: 'reset'})}>reset</button>
          <button onClick={() => dispatch({type: 'install', payload: 10})}>install_10</button>
          <hr/>
        <h1> state2: {count_2}</h1>
          <button onClick={() => dispatch({type: 'inc2'})}>inc</button>
          <button onClick={() => dispatch({type: 'dec2'})}>dec</button>
          <button onClick={() => dispatch({type: 'reset2'})}>reset_2</button>
          <button onClick={() => dispatch({type: 'install5', payload: 'Putin huylo'})}>install_5</button>
          <hr/>

      </div>
  );
};

export default App;
