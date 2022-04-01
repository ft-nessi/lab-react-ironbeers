import './App.css';
import {Route, Routes} from "react-router-dom"
import Home from "./components/Home"
import AllBeers from "./components/AllBeers"


function App() {
  return (
    <div className="App">
      <Home/>
      <Routes>
       {/* <Route path={"/"} element={<Home />}/> */}
       <Route path={"/beers"} element={<AllBeers />}/>
        
      </Routes>
    </div>
  );
}

export default App;
