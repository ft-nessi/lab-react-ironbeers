import React from "react";
import Header from "./Header";
import { useState } from "react";

function NewBeer() {
  const [newBeer, setNewBeer] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: "",
  });
  const url = "https://ih-beers-api2.herokuapp.com/beers/new";

  function handelInput(event) {
    setNewBeer({ ...newBeer, [event.target.name]: event.target.value });
  }

  const handleNewBeer = async () => {
    if (newBeer.name.length === 0) {
      alert("Please enter a name for the beer!");
    }
  
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(newBeer),
      });
      const serverResponse = await response.json();
      console.log(serverResponse);
    } catch (error) {
      console.error("Error updating server!");
    }
  };

  return (
    <>
      <Header />
      Name:
      <div>
        <input
          name="name"
          type="text"
          placeholder="Insert name please!"
          value={newBeer.name}
          onChange={handelInput}
        />
      </div>
      Tagline:
      <div>
        <input
          name="tagline"
          type="text"
          placeholder="Insert tagline please!"
          value={newBeer.tagline}
          onChange={handelInput}
        />
      </div>
      Description:
      <div>
        <input
          name="description"
          type="text"
          placeholder="Insert description please!"
          value={newBeer.description}
          onChange={handelInput}
        />
      </div>
      First brewed:
      <div>
        <input
          name="first_brewed"
          type="text"
          placeholder="Insert where first brewed please!"
          value={newBeer.first_brewed}
          onChange={handelInput}
        />
      </div>
      Brewers tips:
      <div>
        <input
          name="brewers_tips"
          type="text"
          placeholder="Insert brewers tips please!"
          value={newBeer.brewers_tips}
          onChange={handelInput}
        />
      </div>
      Attenuation level:
      <div>
        <input
          name="attenuation_level"
          type="number"
          placeholder="Insert attenuation level please!"
          value={newBeer.attenuation_level}
          onChange={handelInput}
        />
      </div>
      Contributer:
      <div>
        <input
          name="contributed_by"
          type="text"
          placeholder="Insert contributer please!"
          value={newBeer.contributed_by}
          onChange={handelInput}
        />
      </div>
      <button onClick={handleNewBeer}>Add new beer!</button>
    </>
  );
}

export default NewBeer;
