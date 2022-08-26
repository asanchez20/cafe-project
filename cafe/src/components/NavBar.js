import React from "react";
function NavBar({onChangePage, countCartItems}){

    const handleLinkClick = (e) => {
        e.preventDefault()
        onChangePage(e.target.pathname)
    }
    
    return(
        <header className="row block center">
        <nav>
            <a onClick={handleLinkClick} href="/">Home</a> 
            <a onClick={handleLinkClick} href="/cart">Cart</a>
        </nav>
        
        </header>
    )
}
export default NavBar