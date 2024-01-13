
// import './App.css'
import 'tailwindcss/base.css';
import 'tailwindcss/components.css';
import 'tailwindcss/utilities.css';
import 'tailwindcss/tailwind.css';
import Header from './components/Header';
import MainPage from './components/MainPage';
import OurServices from './components/Ourservices';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';
function App() {

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <Header />
      <MainPage />
      <OurServices />
      <ContactUs />
      <Footer />
      <h1 className="text-3xl bg-blue font-bold underline">Hello world!</h1>

    </>
  )
}

export default App
