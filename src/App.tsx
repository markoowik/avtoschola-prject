
import {BrowserRouter, Route, Routes} from "react-router-dom";

import "../src/styles/main.css"

import Navbar from "./conponents/NavBar/Navbar.tsx";
import Footer from "./conponents/footer/footer.tsx";
import Header from "./conponents/header/header.tsx";
import Contact from "./page/contact.tsx";
// import Sale from "./page/sale.tsx";
import Courses from "./page/Courses.tsx";



function App() {


  return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/home" element={<Header />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/sale" element={<Courses />} />
            </Routes>
            <Footer/>
        </BrowserRouter>
  )
}

export default App
