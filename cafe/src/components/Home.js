import React, { useState, useEffect} from "react";
import MenuCard from "./MenuCard";
import Cart from "./Cart";
import SearchBar from "./SearchBar";
import MenuForm from "./MenuForm";
function Home(){
        const [coffees, setCoffee] = useState([])
        const [cartItems, setCartItems] = useState([])
        const [searchString, setSearchString] = useState ('')
 
 
      
       const filteredCoffees = coffees.filter(coffee => coffee.name.toLowerCase().includes(searchString.toLowerCase()))
 
       const addDrinkToState = (drink) => {
         setCoffee([...coffees,drink])
       }
    




        useEffect(() => {
          fetch("http://localhost:3001/coffee")
          .then(resp => resp.json())
          .then(setCoffee)
        },[])



        const onAdd = (filteredCoffees) => {
            const exist = cartItems.find(x => x.id === filteredCoffees.id)
            if(exist) {
              setCartItems(cartItems.map(x => x.id === filteredCoffees.id ? {...exist, qty: exist.qty +1} : x
                )
              );
            } else {
              setCartItems([...cartItems, {...filteredCoffees, qty: 1}])
            }
          }
          const onRemove = (filteredCoffees) => {
            const exist = cartItems.find((x) => x.id === filteredCoffees.id)
            if(exist.qty === 1){
              setCartItems(cartItems.filter((x) => x.id !== filteredCoffees.id))
            } else {
              setCartItems(
                cartItems.map((x) => x.id === filteredCoffees.id ? {...exist, qty: exist.qty - 1} : x
                )
              );
            }
          }


    return(
        <main className="block col-2">
        <h2>Menu</h2>
        <SearchBar searchString ={searchString} setSearchString = {setSearchString}/>
        <div className="row">
        {filteredCoffees.map(coffee => <MenuCard coffee={coffee} key={coffee.id} onAdd={onAdd} />)}
        <Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} /> 
        <MenuForm addDrinkToState={addDrinkToState}/>

        </div>
        </main>
        
    )
}

export default Home