import React from "react";
import Cart from "./Cart";
function MenuCard({coffee}) { 
    return(
        <div className="coffee-card">
            <div className="image">
                <img alt="img" src={coffee.image} />
            </div>
            <div className="content">
                <div className="header">{coffee.name}</div>
            </div>
                <div className="description">{coffee.description}</div>
                <p className="coffee-price">${coffee.price}0</p>
            <button className="add-to-cart" onClick= {<Cart coffee={coffee} />}>Add To Cart</button>
        </div>
    )
}

export default MenuCard