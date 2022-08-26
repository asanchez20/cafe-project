import React from "react";
function NavBar({onChangePage, countCartItems}){

    const handleLinkClick = (e) => {
        e.preventDefault()
        onChangePage(e.target.pathname)
    }
    
    return(
        <header className="topnav">
        <nav>
            <a onClick={handleLinkClick} href="/">Home</a> 
            <a onClick={handleLinkClick} href="/About">About Us</a>
        </nav>
        
        </header>
    )
}
export default NavBar