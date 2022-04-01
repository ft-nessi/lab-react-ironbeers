// import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom"
import { useEffect, useState } from 'react'
import Home from "./components/Home"
import AllBeers from "./components/AllBeers"
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import SingleBeer from './components/SingleBeer';
// import Header from "./components/Header";

const url = "https://ih-beers-api2.herokuapp.com/beers";

function App() {
const [listedBeers, setListedBeers] = useState([]);

useEffect(() => {
  async function fetchDataWithAPI() {
    const response = await fetch(url);
    const data = await response.json();
    setListedBeers(data);
  }
  fetchDataWithAPI();
}, []);

  return (
    <div className="App">
      {/* <Home /> */}
      <Routes>
        {/* <Route path="/">
        <Route index element={<Header />} /> */}
        <Route path={"/"} element={<Home />} />
        <Route
          path={"/beers"}
          element={
            <AllBeers APIBeers={listedBeers} setAPIBeers={setListedBeers} />
          }
        />
        <Route
          path="/beers/:id"
          element={
            <SingleBeer APIBeers={listedBeers} setAPIBeers={setListedBeers} />
          }
        />
        <Route path={"/random-beer"} element={<RandomBeer />} />
        <Route path={"/new-beer"} element={<NewBeer />} />
        {/* </Route> */}
      </Routes>
    </div>
  );
}

export default App;
