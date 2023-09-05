import React from "react";
export default function Card(props) {
    // {/*Second Way Conditional Rendering*/}
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    }else if(props.location === "Online") {
        badgeText ="ONLINE"
    }

    return (
        <div className='card'>
            {/* {props.openSpots === 0 && <div className="card--badge">SOLD OUT</div>}  One Way */}
            {badgeText && <div className="card--badge">{badgeText}</div>}  

            <img src={props.coverImg} className='card--image' />

            <div className='card--stats'>
                <img src="images/Star 1.png" className='card--star' />
                <span>{props.stats.rating}</span>
                <span className='gray'>({props.stats.reviewCount}) • </span>
                <span className='gray'>{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className='bold'>From ${props.price}</span> /person</p>
        </div>
    );
}