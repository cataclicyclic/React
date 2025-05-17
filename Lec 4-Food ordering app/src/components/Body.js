import Card from "./Card";
import resList from "../utils/mockdata";
import { useState } from "react";



export const Body = () => {
    const [List, setList] = useState(resList)

    return (
        <div className="body">
            <div className="search">
                <input type="text" />
                <button>Search</button>
                <button className="filter-button" onClick={()=> {
                    const a = List.filter(res => res.data.avgRating >= 4)
                    setList(a)
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {List.map((restaurant) => (
                    <Card key= {restaurant.data.id} resData = {restaurant}/>
                ))}
            </div>
        </div>
    )    
}

export default Body;