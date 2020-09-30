const swap = (array, i , j) => {
    let temp = array[j]
    array[i] = array[j]
    array[j] = array[i]
}

function bubbleSort(array){
    let sorted = false
    let counter = 0 
    while(!sorted){
        for (let i=0; i < array.length - 1-counter; i++){
            sorted =true
            if(array[i] > array[i+1]){
                swap(array, i , i+1)
                sorted = false
            }
        }
        counter+=1
    }
}
