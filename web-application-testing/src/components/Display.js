import React, { useState } from 'react';

function Display(props) {


    return (
        <div>
            <div className="strikes">
                <h2>STRIKES</h2>
                <span data-testid="strikes">{props.strikes}</span>
            </div>

            <div className="balls">
                <h2>BALLS</h2>
                <span data-testid="balls">{props.balls}</span>
            </div>
        </div>
    )
}

export default Display