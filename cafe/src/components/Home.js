import React, { useState, useEffect} from "react";
import MenuCard from "./MenuCard";
function Home(){
        const [coffees, setCoffee] = useState([])
        useEffect(() => {
          fetch("http://localhost:3001/coffee")
          .then(resp => resp.json())
          .then(setCoffee)
        },[])
    return(
        <div className="wrapper">
        <h1 className="home-header">Welcome to Double A Cafe</h1>
        <h1 className="order-here">Order here</h1>
        {coffees.map(coffee => <MenuCard coffee={coffee} key={coffee.id} />)}
        </div>
    )
}

export default Home