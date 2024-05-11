import {useState} from 'react'
import './App.css'

function App() {
  let [counter, setCounter]=useState(0);
  const addvalue = ()=>{
    counter+=1;
    setCounter(counter);
  }

  const decvalue = () => {
    setCounter(counter-1);
  }

  return (
    <>
    <h1>Counter Game!</h1>
    <h2>Net Clicks:{counter}</h2>
    <p>Make 1 million clicks and win $1,000,000</p>
    <br />
    <button
      onClick={addvalue}>
      Value UP
    </button>
    <button
    onClick={decvalue}>
    Value down</button>
    </>
  )
}

export default App
