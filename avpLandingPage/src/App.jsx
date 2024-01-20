import 'tailwindcss/base.css'
import 'tailwindcss/components.css'
import 'tailwindcss/utilities.css'
import 'tailwindcss/tailwind.css'
import Header from './components/Header'
import MainPage from './components/MainPage'
import OurServices from './components/Ourservices'
import Footer from './components/Footer'
import ContactUs from './components/ContactUs'
import NotFound from './components/NotFound.jsx' // Add the missing import statement for NotFound component
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MoreInfoAboutUs from './components/MoreInfoAboutUs.jsx'

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <MainPage />
              <OurServices />
              <ContactUs />
            </>
          }
        />
        <Route path="/services" element={<OurServices />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/work" element={<NotFound />} />
        <Route path="/more-information" element={<MoreInfoAboutUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
