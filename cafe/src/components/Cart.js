import React, { useState } from "react";
function Cart({coffee}){
    const [cartItems, setCartItems] = useState([])
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
        <aside className="block .col-1">
            <h2>Cart Items
            {coffee}
            </h2>
            <div>
                {cartItems.length === 0 && <div>Cart Is Empty</div>}
                {onAdd}
            </div>
            {cartItems.map((item) => {
                <div key={item.id} class="row">
                    <div className="col-2">{item.name}</div>
                <div className="col-2">
                <button onClick={() => onAdd(item)} className="add">+</button>
                {/* <button onClick={() => onRemove(item)} className="remove">-</button> */}
                </div>
                <div className="col-2 text-right">
                    {item.qty} x ${item.price.toFixed(2)}
                </div>
            </div>
            })}
        </aside>
    )
}

export default Cart