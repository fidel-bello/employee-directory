import React from 'react';
import './index.css'

function Card(props) {
    return (
<div className="card">
  <img src={props.src} alt={props.name} />
    
  <div className="container">
    <h4><b>John Doe</b></h4> 
    <ul>
        <li>name: {props.name}</li>
        <li>email: {props.email}</li>
        <li>phone: {props.phone}</li>
    </ul>
  </div>
</div>
   
    )
}
export default Card;