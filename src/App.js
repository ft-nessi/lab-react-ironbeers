import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Home/>
      <Routes>
        
       <Route path={"/beers"} element={<AllBeers />}/>
        
      </Routes>
    </div>
  );
}

export default App;
