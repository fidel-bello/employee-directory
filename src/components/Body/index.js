import React from 'react';
import './index.css'

function Body(){ 
    return (
        <div className="formContainer">
        <div className="centerMe largerText">
            <input className="radio" type="radio" value="firstName" name="name" /> Alphabetize
            <input className="radio" type="radio" value="lastName" name="name" />   Unalphabetize
        </div>
        <form>
            <div className="centerMe largerText">
                <p className="inline">Search Employee:</p>
                <input type="text" id="employeeName" className="input" placeholder="name here"/>
            </div>
            <div className="custom-flex flex-parent">
                <input className="btn submitBtn" type="submit" />
                <button className="btn dangerBtn">Clear Filter</button>
            </div>
        </form>
    </div>
    )
}
export default Body;