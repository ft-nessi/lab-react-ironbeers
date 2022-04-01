import React from "react";
// import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./Header";

function RandomBeer() {
  const url = "https://ih-beers-api2.herokuapp.com/beers/random";
  const [randomBeer, setRandomBeer] = useState([]);

  useEffect(() => {
    async function fetchRandomDataWithAPI() {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setRandomBeer(data);
      // setrandomBeer((oldValue) => {
      //   return data.find((element) => {
      //     return element._id === params.id;
      //   });
      // });
    }
    fetchRandomDataWithAPI();
  }, []);

  return (
    <>
      <Header />
      <div key={randomBeer._id}>
        <img src={randomBeer.image_url} alt={randomBeer.name + "pic"} height="500" />
        <h2>{randomBeer.name}</h2>
        <h3>{randomBeer.tagline}</h3>
        <p>{randomBeer.first_brewed}</p>
        <h4>{randomBeer.attenuation_level}</h4>
        <p>{randomBeer.description}</p>
        <p>{randomBeer.contributed_by}</p>
      </div>
    </>
  );
}

export default RandomBeer;
