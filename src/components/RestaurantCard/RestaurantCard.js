import React, { Component } from 'react';
import './RestaurantCard.css';

const RestaurantCard = props =>

    <div>
        {props.restaurants.map(restaurant => (
            <div key={restaurant.id}>
                <b>Name:</b> {restaurant.name} <br/>
                <b>City:</b> {restaurant.city} <br/>
                <b>Address:</b> {restaurant.address} <br/>
                <b>Price:</b> {restaurant.price} <br/><br/>
            </div>
        ))}
    </div>;

export default RestaurantCard;
