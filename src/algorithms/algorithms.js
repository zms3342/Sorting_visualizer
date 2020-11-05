// Swap values at 2 indicies 
const swap = (array, i , j) => {
    let temp = array[j]
    array[j] = array[i]
    array[i] = temp
}

//Random number generator 
const rando = (lower, upper) => {
    return Math.floor(Math.random() * (upper - lower + 1) + lower);
  }
  

//Bubble Sort
export function BubbleSortAnimations(array) {
    let animations = [];
    let copy = [...array];
    bubbleSort(copy, animations);
    return animations;
  }

//Sorting algorithm
function bubbleSort(copy, animations) {
    const length = copy.length;
    let x = length - 1;
    let swapped = true;
    while (swapped) {
        let swapped = false;
        for (let i = 0; i < x; ++i) {
            animations.push(["pointA", i, i + 1]);
            animations.push(["pointB", i, i + 1]);
            if (copy[i] > copy[i + 1]) {
                swapped = true;
                animations.push(["swap", i, copy[i + 1]]);
                animations.push(["swap", i + 1, copy[i]]);
                swap(copy, i, i + 1);
            }
        }
        if (!swapped) break;
        x--;
    }
}

// Insertion Sort 

export function InsertionSortAnimations(array) {
    let animations = [];
    let copy = [...array];
    insertionSort(copy, animations);
    return animations;
  }
  
function insertionSort(copy, animations) {
    const length = copy.length;
    for (let i = 1; i < length; i++) {
        let position = copy[i];
        let j = i - 1;
        animations.push(["pointA", j, i]);
        animations.push(["pointB", j, i]);
        while (j >= 0 && copy[j] > position) {
            animations.push(["change", j + 1, copy[j]]);
            copy[j + 1] = copy[j];
            j = j - 1;
            if (j >= 0) {
                animations.push(["pointA", j, i]);
                animations.push(["pointB", j, i]);
            }
        }
        animations.push(["change", j + 1, position]);
        copy[j + 1] = position;
    }
}


//Quick Sort Function

export function QuickSortAnimations(array) {
    let animations = [];
    let copy = [...array];
    doQuickSort(copy, 0, copy.length - 1, animations);
    return animations;
  }
  
function doQuickSort(copy, start, end, animations) {
    let pivot;
    if (start === end){
        return;
    } 
    if (start < end) {
      pivot = partitionArray(copy, start, end, animations);
      doQuickSort(copy, start, pivot - 1, animations);
      doQuickSort(copy, pivot + 1, end, animations);
    }
  }
  
function partitionArray(copy, start, end, animations) {
    let pivot = rando(start, end); // get a random index in array for pivot
  
    animations.push(["pointA", pivot, end]);
    animations.push(["change", pivot, copy[end]]);
    animations.push(["change", end, copy[pivot]]);
    animations.push(["pointB", pivot, end]);
    swap(copy, pivot, end);
  
    let x = start;
  
    for (let i = start; i < end; ++i) {
      animations.push(["pointA", i, end]);
      animations.push(["pointB", i, end]);
      if (copy[i] <= copy[end]) {
        animations.push(["pointA", i, x]);
        animations.push(["change", i, copy[x]]);
        animations.push(["change", x, copy[i]]);
        animations.push(["pointB", i, x]);
        swap(copy, i, x);
        x++;
      }
    }
    animations.push(["pointA", x, end]);
    animations.push(["change", end, copy[x]]);
    animations.push(["change", x, copy[end]]);
    animations.push(["pointB", x, end]);
  
    swap(copy, x, end);
    return x;
  }
  

