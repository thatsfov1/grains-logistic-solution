import './App.css'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="app">
        <Header/>
        <div className='pages'>
            <Routes>
             <Route path='/' element={<Home/>}/>
            </Routes>
        </div>
        <Footer/>
    </div>
  )
}

export default App
