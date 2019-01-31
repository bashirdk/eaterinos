import React, { Component } from 'react';
import './RestaurantCard.css';

const RestaurantCard = props =>

    <div className="container">
        {props.restaurants.map(restaurant => (
            <div key={restaurant.id} className="restaurant-card">
                <div>
                    <img src={restaurant.image_url} />
                </div>
                <div>
                    <span className="restaurant-name">{restaurant.name}</span> 
                    <b>City:</b> {restaurant.city} <br/>
                    <b>Address:</b> {restaurant.address} <br/>
                    <b>Price:</b> {restaurant.price} <br/><br/>
                </div>                
            </div>
        ))}
    </div>;

export default RestaurantCard;
