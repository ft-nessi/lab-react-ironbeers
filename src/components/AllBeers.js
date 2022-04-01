import Header from "./Header";
import { useEffect, useState } from "react";

const url = "https://ih-beers-api2.herokuapp.com/beers";

function AllBeers() {
  const [listedBeers, setListedBeers] = useState([]);

  useEffect(() => {
    async function fetchDataWithAPI() {
      const response = await fetch(url);
      const data = await response.json();
      setListedBeers(data);
    }
    fetchDataWithAPI();
  }, []);

  console.log(listedBeers);
  return (
    <>
      <Header />
      {listedBeers.map((beerObj) => {
          console.log("HEllo from line 23", beerObj);
          return <div key={beerObj._id}>
          <img src={beerObj.image_url} alt={beerObj.name + "pic"}/>
          <h2>{beerObj.name}</h2>
          <h3>{beerObj.tagline}</h3>
          <p>{beerObj.contributed_by}</p>
          </div>
      })}
    </>
  );
}

export default AllBeers;
