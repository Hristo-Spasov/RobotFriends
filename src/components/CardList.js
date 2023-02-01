import React, { Fragment } from "react";
import Card from './card.js';


const CardList = ({ robots }) => {
    const cardArray = robots.map((_user,i) => {
        return <Card key={robots[i].id} id={robots[i].id} name={robots[i].name} username={robots[i].username} email={robots[i].email} />
    })
    return (
        <Fragment>
            
            { cardArray }
            
        </Fragment>   
    );
}
export default CardList