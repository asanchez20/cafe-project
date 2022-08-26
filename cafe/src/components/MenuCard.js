import React from "react";
// import Cart from "./Cart";
function MenuCard({coffee, onAdd}) { 
    return(
        <div>
            <img  className = "small" alt="img" src={coffee.image} />
            <h3>{coffee.name}</h3>
            <h3>{coffee.description}</h3>
            <div>${coffee.price}</div>
            <button onClick={() => onAdd(coffee)}>Add To Cart</button>
        </div>
    )
}

export default MenuCard