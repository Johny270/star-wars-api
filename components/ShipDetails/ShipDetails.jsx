import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const ShipDetails = () => {
  const location = useLocation()
  const [shipDetails, setShipDetails] = useState(location.state.starship)

  return ( 
    <div>
      <h2>Name: {shipDetails.name}</h2>
      <h2>Model: {shipDetails.model}</h2>
      <Link to='/'><button>Return</button></Link>
      <button>Return</button>
    </div>
  )
}
 
export default ShipDetails;