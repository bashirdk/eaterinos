import React from 'react';
import './RestaurantCard.css';

const restaurantPrice = number => {
    let dollar_state = { 
        dark: number === 1 ? '$' : number === 2 ? '$$' : number === 3 ? '$$$' : '$$$$',
        light: number === 1 ? '$$$' : number === 2 ? '$$' : number === 3 ? '$' : ''
    };
    return (
        <>
            <span className="dollar dark-dollar">{dollar_state.dark}</span> 
            <span className="dollar light-dollar">{dollar_state.light}</span> 
        </>
    );
}

const RestaurantCard = props =>
    <div className="container">
        Showing results for "{props.query}"
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
