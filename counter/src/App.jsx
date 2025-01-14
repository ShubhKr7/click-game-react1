import {useState} from 'react'
import './App.css'

function App() {
  let [count, setCounter]=useState(0);
  const addvalue = ()=>{
    count+=1;
    setCounter(count);
  }

  const decvalue = () => {

    //This code is for making counter only count positive clicks
    // count<0?setCounter(0):

    //We can remove above ternary operation to make the counter count positive number and negative numbers both
    setCounter(count-1);
  }

  return (
    <>
    <h1>Counter Game!</h1>
    <h2>Net Clicks:{count}</h2>
    <p>Make 1 million clicks and win $1,000,000</p>
    <br />
    <button
      onClick={addvalue}>
      Value UP
    </button>
    <button
    onClick={decvalue}>
    Value DOWN</button>
    </>
  )
}

export default App;
