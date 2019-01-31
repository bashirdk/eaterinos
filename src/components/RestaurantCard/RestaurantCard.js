import React from 'react';
import './RestaurantCard.css';

const restaurantPrice = number => {
    var valueToReturn;
    if (number === 1)
    {        
        valueToReturn =  (
        <>
            <span className="dollar dark-dollar">$</span> 
            <span className="dollar light-dollar">$$$</span> 
        </>
        )        
    }
    else if (number === 2 ) {
        valueToReturn =  (
        <>
            <span className="dollar dark-dollar">$$</span> 
            <span className="dollar light-dollar">$$</span>
        </>
        )
    }
    else if (number === 3 ) {
        valueToReturn =  (
        <>
            <span className="dollar dark-dollar">$$$</span> 
            <span className="dollar light-dollar">$</span>
        </>
        )
    }
    else if (number === 4 ) {
        valueToReturn =  (
        <>
            <span className="dollar dark-dollar">$$$$</span> 
        </>
        )
    }
    return valueToReturn;
}

const RestaurantCard = props =>
    <div className="container">
        {props.restaurants.map(restaurant => (
            <div key={restaurant.id} className="restaurant-card">
                <div>
                    <img src={restaurant.image_url} alt={'img of ' + restaurant.name} />
                </div>
                <div>
                    <span className="restaurant-name">{restaurant.name}</span> 
                    <span className="city-name"><b>City:</b> {restaurant.city} </span>
                    <span className="address-name"><b>Address:</b> {restaurant.address} </span>
                    <span className="price"> { restaurantPrice(restaurant.price) } </span>
                </div>                
            </div>
        ))}
    </div>;

export default RestaurantCard;
