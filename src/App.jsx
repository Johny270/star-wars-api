
import { Routes, Route } from 'react-router-dom'
import Starship from '../components/Starship/Starship'
import StarshipList from '../components/StarshipList/StarshipList'
import './App.css'



function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<StarshipList />} />
        <Route path='/ships/:shipId' element={<Starship />}  />
      </Routes>
      
    </>
  )
}



export default App
