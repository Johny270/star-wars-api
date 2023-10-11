import { useEffect, useState } from 'react'
import './App.css'
import Nav from '../components/Nav/Nav'
import { Route, Routes } from 'react-router-dom'
// import { Link } from 'react-router-dom'
// import StarshipCards from '../components/StarshipCards/StarshipCards'
import { getAllStarships } from '../services/sw-api'

function App() {
  const [starships, setStarships] = useState([])

  useEffect(() => {
    const fetchStarships = async () => {
      const starshipData = await getAllStarships()
      setStarships(starshipData.results)
    }
    fetchStarships()
  }, [])
  

  return (
    <>
      <Nav />
      {/* <StarshipCards starships={starships} /> */}
      <div className='starships-container'>
        {starships.map((starship) => (
          <div key={starship.name}>{starship.name}</div>
        ))}
      </div>
      
    </>
  )
}



export default App
