import React from 'react'
import { Link } from 'react-router-dom';

export default function NavbarApp() {
    const myStyle = {
        width: '100%',
        display: "flex",
        backgroundColor: 'blue',
        padding: '20px',
    };
    const aStyle = {
        color:"white",
        padding: '0px 10px',
        textDecoration: 'none' ,
        margin:"0px 10px",
        hover: true,
    };
    return (
        <nav className='container-fluid' style={myStyle}>
            <Link to="/aboutUs" style={aStyle}>About</Link>
            <Link to="/projects" style={aStyle}>Projects</Link>
            <Link to="/service" style={aStyle}>Service</Link>
            <Link to="/contactUs" style={aStyle}>Contact</Link>
        </nav>
    )
}
