import React from "react";
function NavBar({onChangePage}){

    const handleLinkClick = (e) => {
        e.preventDefault()
        onChangePage(e.target.pathname)
    }
    return(
        <header>
        <nav>
            <a onClick={handleLinkClick} href="/">Home</a>
            <a onClick={handleLinkClick} href="/cart">Cart</a>
        </nav>
        </header>
    )
}
export default NavBar