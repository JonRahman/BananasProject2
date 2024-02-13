import Layout from "./Layout";
import Navbar from './Components/Home/Navbar';
import Footer from './Components/Footer';
import Home from "./Pages/Home";



import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
      <div className="App">
        <Navbar />
        <Home />
            {<BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            </BrowserRouter>}
        <Footer />
      </div>
    );
}



export default App
