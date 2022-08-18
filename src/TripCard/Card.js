import './style.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStarHalf, faStar } from '@fortawesome/free-solid-svg-icons';

export default function Card(props){
    let rateEl = [];
    for(let i = 0; i < props.rate; i++){
        rateEl.push(
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
        )}
    
    return(
        <div className='trip--card'>
            <div className='trip--img'>
                <img src={props.img} alt='tripOne' />
            </div>
            <div className='trip--body'>
                <h3>{props.placeName}</h3>
                <p>{props.description}</p>
                <div className="trip--rate">
                    {rateEl}
                </div>
                <div className="trip--location">
                    <span>Location: {props.city} / {props.country}</span>
                    <p>For details <a href={props.googleLink}>here</a></p>
                </div>
            </div>
        </div>


    )
}