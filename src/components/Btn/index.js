import React from "react";


function Btn(props) {
    return (
        <div className="btn col-3 d-inline">
            <button className="btn btn-success" onClick={props.changeButtonText}>{props.text}</button>
        </div>
    );
};

export default Btn;