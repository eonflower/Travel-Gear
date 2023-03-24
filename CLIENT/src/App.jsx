import react from "react"
import {Route, Routes} from "react-router-dom";
import Navigation from "./Components/Navigation";
import HomePage from "./Pages/HomePage";
import TechGear from "./Pages/TechGear";
import Wishlist from "./Pages/WishList";
import PhotoGear from "./Pages/PhotoGear";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />
        <Routes>
          <Route path='/' exact element={<HomePage />} />
          <Route path='/techGear' exact element={<TechGear />} />
          <Route path='/photography' exact element={<PhotoGear />} />
          <Route path='/wishlist' exact element={<Wishlist />} />
        </Routes>
      <Footer/>
      
    </div>
  )
}

export default App
