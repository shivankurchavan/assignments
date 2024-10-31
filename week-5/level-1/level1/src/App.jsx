import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BusinessCard } from './components/BusinessCard'

function App() {

  return (
    <>
      <BusinessCard cards={[
        {
          id:1,
          name : "shiv",
          description: "handsome young man",
          interests : [
            "skating ",
            "swimming ",
            "bakchodi "
          ],
        }
      ]} socials={[
          {
            title:"Twitter",
            link:"https://x.com/"
          },
          {
            title: "LinkedIn",
            link:"https://linkedin.com"
          }
      ]}/>
    </>
  )
}

export default App
