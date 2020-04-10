import React from 'react';

export default function Players(props){
    return(
    <div>
    <h2 data-testid='name'>Name: {props.name}</h2>
    <h3 data-testid='country'>Country: {props.country}</h3>
    <h4 data-testid='searched'>Searched: {props.searches}</h4>
    </div>
    );
}