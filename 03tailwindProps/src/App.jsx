import Card from "./Components/Card"


function App() {
  let myObj ={
    name:"manu",
    age:24
  }
  let newArr =[1,2,3]

  return (
  <>
  <h1 className='bg-green-400 text-black p-5 rounded-xl'>Tailwind Css</h1>
  <Card userName="chaiaurcode"/>
  <Card userName="manu" btnText="Explore"/>
  <Card/>
  <Card/>
 
  </>
 
  )

}

export default App
