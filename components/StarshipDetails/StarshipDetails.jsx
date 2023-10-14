import { Link } from "react-router-dom";

const StarshipDetails = ({ starship }) => {
  return ( 
    <main className="card">
      <div className="card-container">
        <Link className="details-link" to={`/ships/${starship.url.match(/\d+/)}`}>{starship.name}</Link>
      </div>
    </main>
  );
}
 
export default StarshipDetails;