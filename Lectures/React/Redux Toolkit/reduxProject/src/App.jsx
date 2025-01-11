import {useDispatch,useSelector} from 'react-redux'
import './App.css'
import { decrement, increment ,reset} from './features/counter/counterSlice';

function App() {
  const count= useSelector((state =>state.counter.value));
  const dispatch=useDispatch();

  function handleIncreamentClick(){
    dispatch(increment());

  }

  function handleDecrementClick(){
    dispatch(decrement());

  }
  function handleResetClick(){
    dispatch(reset());
  }

  

  return (
    <div className='container'>
      <button onClick={handleIncreamentClick}>+</button>
      <p>Count:{count}</p>
      <button onClick={handleDecrementClick}>-</button>
      <button onClick={handleResetClick}>!</button>
    </div>
  )
}

export default App
