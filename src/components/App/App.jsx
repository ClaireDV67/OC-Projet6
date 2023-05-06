import { BrowserRouter, BrowserRouter as Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home/Home'
import Error from '../../pages/Error/Error'
import Accommodation from '../../pages/Accommodation/Accommodation'
import About from '../../pages/About/About'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import '../../style/global-style.css'

function App() {
  return (
    <BrowserRouter basename="/OC-Projet6">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accommodation/:id" element={<Accommodation />} errorElement={<Error />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
