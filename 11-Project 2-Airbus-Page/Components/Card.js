import React from 'react';
import star from "../images/Star 1.png";
import kate from "../images/kate.png";

export default function Card() {
    return (
        <div className='card'>
            <img src={kate} className='card--image' />

            <div className='card--stats'>
                <img src={star} className='card--star' />
                <span>5.0</span>
                <span className='gray'>(6)</span>
                <span className='gray'>USA</span>
            </div>
            <p>Life lesson with kate Zafrees</p>
            <p><span className='bold'>From $136</span> /person</p>
        </div>
    );
}
