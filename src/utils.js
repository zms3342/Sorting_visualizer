// import { colors } from "@material-ui/core";

const swap = (array, i , j) => {
    let temp = array[j]
    array[j] = array[i]
    array[i] = temp
}

// const setColor = (pointOne, pointTwo, color) => {
// 	pointOne.style.backgroundColor = color
// 	pointTwo.style.backgroundColor = color
// }

// export function bubbleSort(array) {
// 	let sorted = false;
// 	let counter = 0;
// 	const currentBars = [...document.querySelectorAll('.visualizer__rectangles')];
// 	while (!sorted){
// 		sorted=true;
// 		for (let i = 0; i < array.length - 1 - counter; i++) {
// 			if (array[i] > array[i+1]) {
// 				swap(array, i, i+1);
// 				currentBars[i].style.backgroundColor = "green"
// 				sorted = false;
// 			}
// 		}
// 		counter+=1;
//     }
//     let final = [...array]
// 	return final;
// }

	
export function getBubbleSortAnimations(array) {
  let animations = [];
  let helperArray = array.slice();
  bubbleSort(helperArray, animations);
  return animations;
}

function bubbleSort(helperArray, animations) {
  const length = helperArray.length;
  let x = length - 1;
  while (x > 0) {
    let swapped = false;
    for (let i = 0; i < x; ++i) {
      animations.push(["comparison1", i, i + 1]);
      animations.push(["comparison2", i, i + 1]);
      if (helperArray[i] > helperArray[i + 1]) {
        swapped = true;
        animations.push(["swap", i, helperArray[i + 1]]);
        animations.push(["swap", i + 1, helperArray[i]]);
        swap(helperArray, i, i + 1);
      }
    }
    if (!swapped) break;
    x--;
  }
}


  




