import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { GlobalStyles } from './styles/GlobalStyles'
import { Navbar } from './components/layout/Navbar'
import { Home } from './components/pages/Home'
import News from './components/pages/News'
import AboutContact from './components/pages/AboutContact'

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/about" element={<AboutContact />} />
      </Routes>
    </Router>
  )
}

export default App
