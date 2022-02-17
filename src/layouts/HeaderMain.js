import React from 'react'
import logo from './../logo.png'
import { Link } from "react-router-dom";

export default function HeaderMain() {
    const menus = [
        {
            label: "Home",
            link: "/"
        },
        {
            label: "About Us",
            link: "about-us"
        },
        {
            label: "Login",
            link: "login"
        },
        {
            label: "Register",
            link: "register"
        },
        {
            label: "404",
            link: "404"
        }
    ];

    return (
        <div className="header">
            <div className="header_left">
                <img src={logo} className="site_logo" alt="logo" />
                <nav>
                    {menus.map(menu => {
                        return (
                            <Link 
                                className="menu-item"
                                to={menu.link}
                            >
                                {menu.label}
                            </Link>
                        )
                    })}
                </nav>
            </div>
            <div className="header_right">

            </div>
        </div>
    )
}
