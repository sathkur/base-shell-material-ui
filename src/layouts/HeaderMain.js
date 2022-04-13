import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import logo from './../logo.png'
import { Link } from "react-router-dom";
import { Info as InfoIcon, Favorite as FavoriteIcon } from '@mui/icons-material';

const menus = [
        {
            label: "Home",
            link: "/",
            icon: FavoriteIcon
        },
        {
            label: "About Us",
            link: "about-us",
            icon: InfoIcon
        },
        {
            label: "Register",
            link: "register"
        },
        {
            label: "404",
            link: "404"
        },
        {
            label: "Sign In",
            link: "login",
            variant: "contained"
        }
    ];
export default function HeaderMain() {
    

    return (
        <header className={'site_content header_main'}>
            <h1>
                <picture>
                    <img src={logo} className="site_logo" alt="logo" />
                </picture>
            </h1>
            <nav>
                {menus.map(menu => {
                    return (
                        <Button 
                            className="menu-item"
                            to={menu.link}
                            component={Link}
                            startIcon={menu.icon ? <menu.icon/> : ""}
                            variant={menu.variant ? menu.variant : "text"}
                        >
                            {menu.label}
                        </Button>
                    )
                })}
            </nav>
        </header>
    )
}



