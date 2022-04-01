import Header from "./Header";
import { Link } from "react-router-dom";

function AllBeers({APIBeers, setAPIBeers}) {

  return (
    <>
      <Header />
      {APIBeers.map((beerObj) => {
          return (
            <Link to={beerObj._id} key={beerObj._id}>
              <div>
                <img src={beerObj.image_url} alt={beerObj.name + "pic"} />
                <h2>{beerObj.name}</h2>
                <h3>{beerObj.tagline}</h3>
                <p>{beerObj.contributed_by}</p>
              </div>
            </Link>
          );
      })}
    </>
  );
}

export default AllBeers;
