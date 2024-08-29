import { Route, Routes } from 'react-router-dom';
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Home from './components/home/Home';
import AboutUs from './components/aboutUs/AboutUs';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
