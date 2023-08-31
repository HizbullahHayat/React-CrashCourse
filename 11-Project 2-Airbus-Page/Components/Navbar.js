import React from 'react';
import airlogo from "../images/airlogo.png"
export default function Navbar() {
    return (
        <nav>
            <img src={airlogo} className='nav--logo' />
        </nav>
    );
}
