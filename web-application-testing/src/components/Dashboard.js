import React, { useState } from 'react';
import Display from './Display';

function Dashboard() {

    const [strikes, setStrikes] = useState(0)
    const [balls, setBalls] = useState(0)
    
    function handlePlay(play) {
        if (play === "strike") {
            if (strikes >= 2) {
                hit();
            }else {
                setStrikes(strikes + 1)
            }
        } else if (play === "ball") {
            if (balls >= 3) {
                hit();
            } else {
                setBalls(balls + 1)
            }
        }else if (play === "foul") {
            if (strikes < 2) {
                setStrikes(strikes + 1)
            }
        }
    }
    
    
    function hit() {
        setStrikes(0)
        setBalls(0)
    }

    return (
        <div>
            <Display balls={balls} strikes={strikes} />

            <div>
                <button data-testid="strikes-fn" onClick={() => handlePlay("strike")}>STRIKE</button>
                <button data-testid="balls-fn" onClick={() => handlePlay("ball")}>BALL</button>
                <button onClick={() => handlePlay("foul")}>FOUL</button>
                <button onClick={hit}>HIT</button>
            </div>
        </div>
    )
}

export default Dashboard