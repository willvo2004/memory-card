import { useState } from "react";
const Header = ( {score} ) => {
    return (
        <>
            <div className="header-wrapper">
                <div className="header-content">
                    <h1>Memory Card Game {score}</h1>
                </div>
            </div>
        </>
    )
}

export default Header;