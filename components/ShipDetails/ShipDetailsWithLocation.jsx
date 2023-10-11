import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ShipDetails from "./ShipDetails";

const ShipDetailsWithLocation = () => {
  const location = useLocation()
  const [shipDetails, setShipDetails] = useState(location.state.starship)

  return ( 
    <ShipDetails shipDetails={shipDetails} />
  )
}
 
export default ShipDetailsWithLocation;