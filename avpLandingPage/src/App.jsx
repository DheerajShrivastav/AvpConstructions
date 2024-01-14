
import 'tailwindcss/base.css';
import 'tailwindcss/components.css';
import 'tailwindcss/utilities.css';
import 'tailwindcss/tailwind.css';
import Header from './components/Header';
import MainPage from './components/MainPage';
import OurServices from './components/Ourservices';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';
import NotFound from './components/NotFound.jsx'; // Add the missing import statement for NotFound component
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<MainPage/>} />
        <Route path="/services" element={<OurServices/>} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route element={<NotFound/>} />
      </Routes>
      <Footer />
      <h1 className="text-3xl bg-blue font-bold underline">Hello world!</h1>
    </Router>
  );
}

export default App
