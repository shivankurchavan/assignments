import { useState } from 'react'
import './App.css'
import { Assignment1 } from './component/Assignment1'
import { Assignment2 } from './component/Assignment2'
import { Assignment4 } from './component/Assignment4'
import { Assignment5 } from './component/Assignment5'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Assignment1 details={
        {
          name: "Name",
          link: "https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg",
          location: "mumbai",
          followers: "500K",
          following: 500,
          posts:100
        }
      }/> */}
      {/* <Assignment2 /> */}
      {/* <Assignment4/> */}
      {/* <Assignment5 username="shivankurchavan"/> */}
    </>
  )
}

export default App
