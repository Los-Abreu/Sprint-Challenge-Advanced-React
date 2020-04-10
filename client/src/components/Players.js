import React from 'react';

export default function Players(props){
    return(
    <div>
    <h2>Name: {props.name}</h2>
    <h3>Country: {props.country}</h3>
    <h4>Searched: {props.searches}</h4>
    </div>
    );
}