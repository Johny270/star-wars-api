import { Link } from "react-router-dom";
import './StarshipCard.css'

const StarshipCard = ({starship}) => {
  

  return ( 
    <div className="ship-card">
      {starship.name}
      <Link to='/details' state={{starship}}><button>View Ship Details</button></Link>
      
    </div>
  )
}
 
export default StarshipCard;