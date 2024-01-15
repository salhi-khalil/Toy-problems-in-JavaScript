/*
Quicksort
Quicksort (sometimes called partition-exchange sort) is an efficient sorting algorithm. 
When implemented well, it can be about two or three times faster than its main competitors, merge sort and heapsort.
It is a comparison sort, meaning that it can sort items of any type for which a "less-than" relation is defined.
Quicksort uses these steps.
  1. Choose any element of the array to be the pivot. There are multiple ways of selecting a pivot; 
  explore the options and note their advantages.
  2. Divide all other elements (except the pivot) into two partitions.
  3. All elements less than the pivot must be in the first partition.
  4. All elements greater than the pivot must be in the second partition.
  5. Recursively apply the above process to the two partitions
  6. Join the first sorted partition, the pivot, and the second sorted partition.
The best pivot creates partitions of equal length (or lengths differing by 1). 
The worst pivot creates an empty partition (for example, if the pivot is the first or last element of a sorted array).
Extra Credit: Perform the sort in place. Watch how at https://www.youtube.com/watch?v=ywWBy6J5gz8
NOTE: DO NOT use JavaScript’s built-in sorting function (Array.prototype.sort).
*/

function quickSort(arr) {
 if(arr.length <= 1)return arr
 var pivot=arr[Math.floor(arr.length/2)],left=[],right=[]
 for(var i=0;i<arr.length;i++){
  if(i===Math.floor(arr.length/2))continue
  if(arr[i]<pivot)left.push(arr[i])
  else right.push(arr[i])
 }
  var sorted=quickSort(left).concat(pivot,quickSort(right));
  return sorted
  }