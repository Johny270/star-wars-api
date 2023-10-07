import { useEffect, useState } from 'react'
import './App.css'
import { getAllStarships } from '../services/sw-api'
import { Link } from 'react-router-dom'

function App() {
  const [starships, setStarships] = useState([])

  useEffect(() => {
    const fetchStarships = async () => {
      const starshipsData = await getAllStarships()
      setStarships(starshipsData)
    }
    fetchStarships
  }, [])

  if(!starships.length) return <h1>Loading Starships...</h1>



  return (
    <>
      <h1>This is an H1</h1>
      {starships.map(starship => 
        <div>
          
        </div> 
      )}
    </>
  )
}

export default App
