import React, { useState }  from "react"
import './App.css';
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
function App() {

  const [page, setPage] = useState("/")

  function getCurrentPage(){
    switch(page) {
      case "/" : 
        return <Home />
      case "/About" :
        return <AboutUs/>
      default:
        return <h1>404 Not Found</h1>
    }
  }

  
  return (
    <div className="App">
      <NavBar onChangePage={setPage} />
      {getCurrentPage()}
    </div>
  );
}

export default App;
