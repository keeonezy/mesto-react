import React from "react";
import logo from "../images/icon/logo.svg"

function Header() {
    return(
        <header className="header">
            <img src={logo} alt="Логотип Место" className="header__logo" />
        </header>
    )
}

export { Header };