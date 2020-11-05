import React, {useState, useEffect} from 'react';
import "../css/Visualizer.css" ; 
import Button from '@material-ui/core/Button';
import {bubbleSort, insertionSort, quickSort} from "../algorithms/animations"
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';


function Visualizer() {

  // const screenWidth = window.innerWidth;

  const [arr, setArr]= useState([])
  const [animationSpeed, setAnimationSpeed]= useState(5)
  const [arrSize, setArrSize]= useState(50)

  let resetArray= (array_size) =>{
    let array = []
    while(array.length < array_size){
        let number = Math.floor(Math.random() * Math.floor(500))
        if (!array.includes(number) && number>10){
          array.push(number)
        }
    }
    setArr(array)
  }
  


  useEffect(() => {
    resetArray(arrSize)
  }, [])

  const changeSize = (arrSize) =>{
    setArrSize(arrSize)
    resetArray(arrSize)
  }



    return (
      <div className="visualizer">
        <div className="visualizer__buttons">
          <Button variant="outlined" color="primary" onClick={()=> bubbleSort(arr, animationSpeed)} className="visualizer__sorter">Bubble Sort</Button>
          <Button variant="outlined" color="primary" onClick={()=> insertionSort(arr, animationSpeed)} className="visualizer__sorter">Insertion Sort</Button>
          <Button variant="outlined" color="primary" onClick={()=> quickSort(arr, animationSpeed)} className="visualizer__sorter">Quick Sort</Button>
          <Button variant="outlined" color="secondary" onClick={()=>resetArray(arrSize)}>Shuffle</Button>
        </div>
        <div className ="visualizer__window">
          <div className="visualizer__values">
              {arr.map((value, index) => (
                  <div className="visualizer__rectangles" style={{height:`${value}px`, width:"10px"}} key={index}></div>
                  ))}
          </div>
        </div>
        <div className="visualizer__sliders">
             <div> 
              <Typography id="discrete-slider" gutterBottom>
                Array Size
              </Typography>
              <Slider
                defaultValue={arrSize}
                valueLabelDisplay="auto"
                step={50}
                min={25}
                marks
                max={200}
                onChange={(e,value)=>changeSize(value)}
              />
            </div>  
            <div>
              <Typography id="discrete-slider" gutteBottom>
                Animation speed
              </Typography>
              <Slider
                defaultValue={animationSpeed}
                valueLabelDisplay="auto"
                step={1}
                min={1}
                marks
                max={9}
                onChange={(e,value)=>setAnimationSpeed(10-value)}
                />
              </div>
        </div>
      </div>
    )
}

export default Visualizer
