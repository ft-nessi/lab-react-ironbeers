// import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom"
import Home from "./components/Home"
import AllBeers from "./components/AllBeers"
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
// import Header from "./components/Header";


function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <Routes>
        {/* <Route path="/">
        <Route index element={<Header />} /> */}
        <Route path={"/"} element={<Home />} />
        <Route path={"/beers"} element={<AllBeers />} />
        <Route path={"/random-beer"} element={<RandomBeer />} />
        <Route path={"/new-beer"} element={<NewBeer />} />
        {/* </Route> */}
      </Routes>
    </div>
  );
}

export default App;
