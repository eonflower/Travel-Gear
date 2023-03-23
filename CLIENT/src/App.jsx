import react from "react"
import {Route, Routes} from "react-router-dom";
import Navigation from "./Components/Navigation"; // imports the Navigation component
import HomePage from "./Pages/HomePage"; // imports the HomePage component
import TechGear from "./Pages/TechGear"; // imports the TechGear component
import Wishlist from "./Pages/WishList"; // imports the Wishlist component
import PhotoGear from "./Pages/PhotoGear"; // imports the PhotoGear component
import Footer from "./Components/Footer"; // imports the Footer component

function App() {
  return (
    <div className="App">
     <Navigation /> {/* renders the Navigation component */}
      <Routes>
        <Route path='/' exact element={<HomePage />} /> {/* defines a route for the home page */}
        <Route path='/techGear' exact element={<TechGear />} /> {/* defines a route for the TechGear page */}
        <Route path='/photography' exact element={<PhotoGear />} /> {/* defines a route for the PhotoGear page */}
        <Route path='/wishlist' exact element={<Wishlist />} /> {/* defines a route for the Wishlist page */}
      </Routes>
      <Footer/> {/* renders the Footer component */}
    </div>
  )
}

export default App