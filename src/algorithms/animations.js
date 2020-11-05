import {BubbleSortAnimations, InsertionSortAnimations, QuickSortAnimations} from "./algorithms"

// Globals
// bubble sort colors
let primaryBubble ="#08D8FC"
let secondBubble = "#E31D75"

// insertion sort colors
let primaryInsert ="#E31D75"
let secondInsert = "#E9D735"

// quick sort colors
let primaryQuick ="#E9D735"
let secondQuick = "#E31D75"





//Bubble sort Animation
export const bubbleSort =  (arr, animationSpeed) => {
    const animations = BubbleSortAnimations(arr);
    for (let i = 0; i < animations.length-1; i++) {
        const isColorChange = animations[i][0] === "pointA" || animations[i][0] === "pointB";
        const arrayBars = document.getElementsByClassName("visualizer__rectangles");
        if (isColorChange) {
            const color = animations[i][0] === "pointA" ? secondBubble : primaryBubble;
            const [, barOneIndex, barTwoIndex] = animations[i];
            setTimeout(() => {
                arrayBars[barOneIndex].style.backgroundColor = color;
                arrayBars[barTwoIndex].style.backgroundColor = color;
            }, i * animationSpeed);
        } 
        else {
            const [, barIndex, newHeight] = animations[i];
            if (barIndex === -1) {
                continue;
            }
            setTimeout(() => {
                arrayBars[barIndex].style.height = `${newHeight}px`;
            }, i * animationSpeed);
        }
    }
}

//Insertion Sort Animation
export const insertionSort = (array, animationSpeed) => {
    const animations = InsertionSortAnimations(array);
    for (let i = 0; i < animations.length; i++) {
      const isColorChange = animations[i][0] === "pointA" || animations[i][0] === "pointB";
      const arrayBars = document.getElementsByClassName("visualizer__rectangles");
      if (isColorChange) {
        const color = animations[i][0] === "pointA" ? secondInsert : primaryInsert;
        const [, barOneIndex, barTwoIndex] = animations[i];
        setTimeout(() => {
            arrayBars[barOneIndex].style.backgroundColor = color;
            arrayBars[barTwoIndex].style.backgroundColor = color;
        }, i * animationSpeed);
      } 
      else {
        const [, barIndex, newHeight] = animations[i];
        setTimeout(() => {
            arrayBars[barIndex].style.height = `${newHeight}px`;
        }, i * animationSpeed);
      }
    }
  }


// Quick Sort Animation function
export const quickSort = (array, animationSpeed) => {
    const animations = QuickSortAnimations(array);
    for (let i = 0; i < animations.length; i++) {
      const isColorChange = animations[i][0] === "pointA" || animations[i][0] === "pointB";
      const arrayBars = document.getElementsByClassName("visualizer__rectangles");
      if (isColorChange) {
        const color = animations[i][0] === "pointA" ? secondQuick : primaryQuick;
        const [, barOneIndex, barTwoIndex] = animations[i];
        setTimeout(() => {
            arrayBars[barOneIndex].style.backgroundColor = color;
            arrayBars[barTwoIndex].style.backgroundColor = color;
        }, i * animationSpeed);
      } 
      else {
        const [, barIndex, newHeight] = animations[i];
        setTimeout(() => {
            arrayBars[barIndex].style.height = `${newHeight}px`;
        }, i * animationSpeed);
      }
    }
  }



