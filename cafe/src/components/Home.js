import React, { useState, useEffect} from "react";
import MenuCard from "./MenuCard";
import Cart from "./Cart";
function Home(){
        const [coffees, setCoffee] = useState([])
        const [cartItems, setCartItems] = useState([])
        useEffect(() => {
          fetch("http://localhost:3001/coffee")
          .then(resp => resp.json())
          .then(setCoffee)
        },[])
        const onAdd = (coffees) => {
            const exist = cartItems.find(x => x.id === coffees.id)
            if(exist) {
              setCartItems(cartItems.map(x => x.id === coffees.id ? {...exist, qty: exist.qty +1} : x
                )
              );
            } else {
              setCartItems([...cartItems, {...coffees, qty: 1}])
            }
          }
          const onRemove = ( coffees) => {
            const exist = cartItems.find((x) => x.id === coffees.id)
            if(exist.qty === 1){
              setCartItems(cartItems.filter((x) => x.id !== coffees.id))
            } else {
              setCartItems(
                cartItems.map((x) => x.id === coffees.id ? {...exist, qty: exist.qty - 1} : x
                )
              );
            }
          }
    return(
        <main className="block col-2">
        <h2>Menu</h2>
        <div className="row">
        {coffees.map(coffee => <MenuCard coffee={coffee} key={coffee.id} onAdd={onAdd} />)}
        <Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} /> 
        </div>
        </main>
        
    )
}

export default Home