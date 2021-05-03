import React from  'react';

function Card(props) {
    return (
        <div className="card">
            <img src={props.src} alt={props.name} />
            <div className="container">
                <h4><b> John Doe</b></h4>
                <ul id="info">
                    <li>John Doe</li>
                    <li>email: </li>
                    <li>Phone: </li>
                    <li>location: </li>
                </ul>
            </div>
        </div>
    )
}

export default Card;
