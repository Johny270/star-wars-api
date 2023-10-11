import { useEffect, useState } from 'react'
import './App.css'
// import Nav from '../components/Nav/Nav'
import { Route, Routes } from 'react-router-dom'
import StarshipCard from '../components/StarshipCard/StarshipCard'
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
      {/* <Nav /> */}
      {/* <Routes>
        <Route path='/ships' element={<Ships />} />
      </Routes> */}
      <div className='starships-container'>
        {starships.map((starship) => (
          <StarshipCard starship={starship} key={starship.name}/>
        ))}
      </div>
      
    </>
  )
}



export default App
