import { useState, useEffect } from "react";
import * as apiService from '../../services/sw-api'
import StarshipDetails from "../StarshipDetails/StarshipDetails";
import './StarshipList.css'

const StarshipList = () => {
  const [starshipList, setStarshipList] = useState([])

  useEffect(() => {
    const fetchStarshipList = async () => {
      const starshipData = await apiService.getAllStarships()
      setStarshipList(starshipData.results)
    }
    fetchStarshipList()
  }, [])

  if (!starshipList.length) return <h2>Loading Ships</h2>

  return ( 
    <main>
      <h1>STAR WARS STARSHIPS</h1>
      <div className="divs-container">
        {starshipList.map(starship => (
          <StarshipDetails key={starship.name} starship={starship} />
        ))}
      </div>
    </main>
  );
}
 
export default StarshipList;