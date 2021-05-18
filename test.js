var array=[1,2,3,4,5,6]
function reverseArray(array,firstIndex,lastIndex) {
    if(firstIndex>lastIndex){
        return 
    }
    var temp=array[firstIndex]
    array[firstIndex]=array[lastIndex]
    array[lastIndex]=temp
    reverseArray(array,firstIndex+1,lastIndex-1)
    return array
}
var result = reverseArray(array,0,array.length-1)
console.log(result);
