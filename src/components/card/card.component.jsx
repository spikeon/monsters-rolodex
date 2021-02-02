import React from 'react';
import {CardContainer} from './card.styles';

export const Card = ({monster: {id, name, email}}) => (
    <CardContainer>
        <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt="monster"/>
        <h2>{name}</h2>
        <p>{email}</p>
    </CardContainer>
)