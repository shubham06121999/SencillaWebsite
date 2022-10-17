import {BrowserRouter as Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/Navigation/NavBar'
import ContactView from './view/ContactView'
import AboutView from './view/AboutView'
import HomeView from './view/HomeView'


function App() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route exact path='/contact' component ={ContactView} />
      <Route exact path='/about' component ={AboutView} />
      <Route exact path='/' component ={HomeView} />
    </Routes>
    </>
    );
}

export default App;
