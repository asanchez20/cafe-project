import React, { useState }  from "react"
import './App.css';
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import Home from "./components/Home";
function App() {

  const [page, setPage] = useState("/")

  function getCurrentPage(){
    switch(page) {
      case "/" : 
        return <Home />
      case "/cart" :
        return <Cart />
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
