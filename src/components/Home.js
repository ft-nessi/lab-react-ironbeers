import {Link} from "react-router-dom"


function Home() {
    return (
        <div>
            <Link to={"/beers"}>All Beers</Link>/>
            <Link to={"/random-beers"}>All Beers</Link>/>
            <Link to={"/new-beers"}>All Beers</Link>/>
        </div>
    )

}
export default Home
