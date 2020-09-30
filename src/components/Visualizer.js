import React, {useEffect, useState} from 'react'
import "../css/Visualizer.css"
import Button from '@material-ui/core/Button';
import {bubbleSort} from "../utils.js"

function Visualizer() {
    const [array, setArray] = useState(Array(200).fill().map(() => Math.round(Math.random() * 200)))
    

    return (
        <div className="visualizer">
            <div className="visualizer__bars">
                {array.map((value, index) =>(
                    <div className="visualizer__rectangles" key={index} style={{height:`${value}px`}} >
                    </div>
                ))}
            </div>
            <div className="visualizer__buttonTest">
            
            </div> 
        </div>
    )
}

export default Visualizer
