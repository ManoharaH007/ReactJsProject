import { useState } from "react";
function App() {
  let [counter,setCounter] = useState(15)

  const addValue=()=>{
    console.log("clicked",counter);
    counter =  counter+1 
    setCounter(counter)
  }

  const removeValue = () =>{
    setCounter(counter-1)
  }
  

  return (
  
      <>
      <h1>Projects</h1>
      <h1>Counter Value</h1>
      <button onClick={addValue}>Add Value{counter}</button>
      <br/>
      <button onClick={removeValue}>Remove Value{counter}</button>
      <p>footer:{counter}</p>
      </>
  )

}

export default App
