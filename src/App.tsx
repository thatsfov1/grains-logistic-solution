import './App.css'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import {useEffect, useState} from "react";
import FontFaceObserver from 'fontfaceobserver'
import loading from './assets/others/loading.svg'
import Fleet from "./pages/Fleet/Fleet";

function App() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const font1 = new FontFaceObserver("Poppins");
        const font2 = new FontFaceObserver("Syne");
        const image = new Image();

        Promise.all([font1.load(),font2.load(), image.onload])
            .then(() => {
                setLoaded(true);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

  return (
      <>
      {loaded ? (<div className="app">
        <Header/>
        <div className='pages'>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/fleet' element={<Fleet/>}/>
            </Routes>
        </div>
        <Footer/>
    </div>) : <div className="loading">
          <img alt='Loading...' src={loading}/>
      </div> }
      </>
  )
}

export default App
