import React from 'react'
import "../css/Menu.css"
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

function Menu() {
    return (
        <div className="menu">
            <ButtonGroup className="menu__buttons" variant="text" color="secondary" aria-label="text secondary button group" orientation="vertical">
                <Button>Merge Sort</Button>
                <Button>Bubble Sort</Button>
                <Button>Insertion Sort</Button> 
                <Button>Heap Sort</Button> 
                <Button>Quick Sort</Button>
            </ButtonGroup>

            
        </div>
    )
}

export default Menu
