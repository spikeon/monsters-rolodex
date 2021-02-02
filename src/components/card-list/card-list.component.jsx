import React from 'react';
import {Card} from "../card/card.component";
import {CardListContainer} from './card-list.styles';

export const CardList = ({monsters}) => (
    <CardListContainer>
        {
            monsters.map(monster =>
                <Card key={monster.id} monster={monster}/>
            )
        }
    </CardListContainer>
);
