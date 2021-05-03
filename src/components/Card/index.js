import React from 'react';

function Card(props) {
    return (
    <div className="Card">
        <img alt={props.last} src={props.image}></img>
        <h4><b>John Doe</b></h4>
        <ul>
            <li>gender: {props.gender}</li>
            <li>age: {props.age}</li>
            <li>phone: {props.phone}</li>
            <li>email: {props.email}</li>
        </ul>

    </div>
    )
}
export default Card;