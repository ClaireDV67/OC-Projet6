import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Error from './pages/Error/Error'
import Accomodation from './pages/Accomodation/Accomodation'
import About from './pages/About/About'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import './style/global-style.css'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/accommodation/:accomodationId"
          element={<Accomodation />}
        />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
