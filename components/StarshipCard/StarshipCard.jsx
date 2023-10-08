import { useEffect, useState } from "react";
import { getAllStarships } from "../../services/sw-api";

const StarshipCard = () => {
  const [starships, setStarships] = useState([])

  useEffect(() => {
    const fetchStarships = async () => {
      const starshipData = await getAllStarships()
      setStarships(starshipData)
    }
    fetchStarships()
  }, [])
  
  if(!starships.length) return <h1>Loading Starships...</h1>
  console.log(starships.length)

  return ( 
    <h1>I am a starship</h1>
  )
}
 
export default StarshipCard;