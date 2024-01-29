import 'tailwindcss/base.css'
import 'tailwindcss/components.css'
import 'tailwindcss/utilities.css'
import 'tailwindcss/tailwind.css'
import Header from './components/Header.jsx'
import OurServices from './components/Ourservices.jsx'
import Footer from './components/Footer.jsx'
import ContactUs from './components/ContactUs.jsx'
import HomePage from './components/HomePage.jsx'
import NotFound from './components/NotFound.jsx' // Add the missing import statement for NotFound component
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import MoreInfoAboutUs from './components/MoreInfoAboutUs.jsx'

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/AvpConstructions/" element={<HomePage />} />
        <Route path="/AvpConstructions/services" element={<OurServices />} />
        <Route path="/AvpConstructions/contactUs" element={<ContactUs />} />
        <Route path="/OurWork" element={<NotFound />} />
        {
          // Add the missing route for OurWork component
        }
        <Route path="/more-information" element={<MoreInfoAboutUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
