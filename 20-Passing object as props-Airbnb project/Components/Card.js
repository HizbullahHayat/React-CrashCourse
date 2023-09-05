import React from "react";
export default function Card(props) {
    // {/*Second Way*/}
    let badgeText
    if (props.i.openSpots === 0) {
        badgeText = "SOLD OUT"
    }else if (props.i.location === "Online") {
        badgeText ="ONLINE"
    }

    return (
        <div className='card'>
            {/* {props.openSpots === 0 && <div className="card--badge">SOLD OUT</div>}  One Way */}
            {badgeText && <div className="card--badge">{badgeText}</div>}  

            <img src={props.i.coverImg} className='card--image' />

            <div className='card--stats'>
                <img src="images/Star 1.png" className='card--star' />
                <span>{props.i.stats.rating}</span>
                <span className='gray'>({props.i.stats.reviewCount}) • </span>
                <span className='gray'>{props.i.location}</span>
            </div>
            <p className="card--title">{props.i.title}</p>
            <p className="card--price"><span className='bold'>From ${props.i.price}</span> /person</p>
        </div>
    );
}