
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
 


const RestaurantMenu =()=>{

    

     const {resId}= useParams()
    //   console.log(params)

     const resInfo =useRestaurantMenu(resId)

    
    if(resInfo === null) return <Shimmer/>;
    

      const {name,cuisines,costForTwoMessage, 
      }= resInfo?.cards[0]?.card?.card?.info;

        const  {itemCards}= resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;
      console.log(itemCards)
    return ( 
        <div className="menu">
            <h1> {name}</h1>
            <h3> {cuisines.join(", ")}-{costForTwoMessage}</h3>
            <h3> </h3>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item) => (<li key={item.card.info.id}> {item.card.info.name} -------------- {"   "}<b>{item.card.info.price/100 ||item.card.info.defaultPrice/100  }Rs</b></li>) )}
                 
            </ul>
        </div>
    )
}

export default RestaurantMenu;