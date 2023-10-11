import { NavLink } from "react-router-dom";

const StarshipCard = (props) => {

 console.log(props.starships.results)

  return ( 
    <div>
      <h1>I am a starship</h1>
      {props.starships.map(starship => (
        <NavLink to={`starships/${starship.name}`}>
          <div key={starship.hypderdrive_rating}>
            {starship.name}
          </div>
        </NavLink>
      ))}
    </div>
  )
}
 
export default StarshipCard;