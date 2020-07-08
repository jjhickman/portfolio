import React from 'react';
import Background from './pages/Background/Background'
import Experience from './pages/Experience/Experience';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Portfolio from './pages/Portfolio/Portfolio';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Header/>
        <Home/>
        <Experience/>
        <Portfolio/>
        <Background/>
      <Footer/>
      </React.Fragment>
  );
}

export default App;
