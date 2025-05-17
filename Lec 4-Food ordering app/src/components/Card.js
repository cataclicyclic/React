import React from "react";
import {CDN_URL} from "../utils/constants"

const styleCard = {
    backgroundColor: "#f0f0f0",
};

const Card = (props) => {

    const {resData} = props

    const  {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        deliveryTime,
    } = resData?.data;
    return (
    <div className="card" style={styleCard}>
        <img 
        className="card-logo"
        src={ CDN_URL+ cloudinaryImageId
        }/>
        <h3>{name}</h3>
        <p>{cuisines.join(", ")}</p>
        <p>{avgRating}</p>
        <p>{costForTwo / 100} for Two</p>
        <p>{deliveryTime} mins</p>
    </div>
)};

export default Card;