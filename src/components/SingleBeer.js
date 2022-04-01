import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./Header";

const url = "https://ih-beers-api2.herokuapp.com/beers";

function SingleBeer() {
  const params = useParams();
  const [singleBeer, setSingleBeer] = useState();

  useEffect(() => {
    async function fetchDataWithAPI() {
      const response = await fetch(url);
      const data = await response.json();
      setSingleBeer((oldValue) => {
        return data.find((element) => {
          return element._id === params.id;
        });
      });
    }
    fetchDataWithAPI();
  }, [params]);

  return (
    <>
      <Header />
      <div key={singleBeer._id}>
        <img src={singleBeer.image_url} alt={singleBeer.name + "pic"} />
        <h2>{singleBeer.name}</h2>
        <h3>{singleBeer.tagline}</h3>
        <h4>{singleBeer.attenuation_level}</h4>
        <p>{singleBeer.first_brewed}</p>
        <p>{singleBeer.description}</p>
        <p>{singleBeer.contributed_by}</p>
      </div>
    </>
  );
}

export default SingleBeer;
