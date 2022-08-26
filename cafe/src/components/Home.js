import React, { useState, useEffect} from "react";
import MenuCard from "./MenuCard";
function Home(){
        const [coffees, setCoffee] = useState([])
        const [cartItems, setCartItems] = useState([])
        useEffect(() => {
          fetch("http://localhost:3001/coffee")
          .then(resp => resp.json())
          .then(setCoffee)
        },[])
        const onAdd = (coffee) => {
            const exist = cartItems.find(x => x.id === coffee.id)
            if(exist) {
              setCartItems(cartItems.map(x => x.id === coffee.id ? {...exist, qty: exist.qty +1} : x
                )
              );
            } else {
              setCartItems([...cartItems, {...coffee, qty: 1}])
            }
          }
    return(
        <main className="block col-2">
        <h2>Menu</h2>
        <div className="row">
        {coffees.map(coffee => <MenuCard coffee={coffee} key={coffee.id} onAdd={onAdd} />)}
        {onAdd}
        </div>
        
        </main>
    )
}

export default Home