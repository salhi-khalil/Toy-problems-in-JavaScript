/**
 * Implement a function that sorts an array of numbers using the "mergesort" algorithm.
 *
 * Mergesort is an optimized sorting algorithm and a common alternative to quicksort or heapsort. (For example,
 * Firefox's Array.sort method uses a tuned mergesort; the WebKit engine used by Chrome and
 * Safari uses quicksort for numeric arrays, and mergesort for arrays of strings.)
 *
 * Mergesort uses a divide-and-conquer strategy. It begins with a set of sublists of length 1. Adjacent sublists are then
 * "merged" into sorted sublists of length 2, which are merged into sorted sublists of length 4, and so
 * on, until only a single sorted list remains.
 *
 *   ITERATIVE (bottom-up) approach:
 *
 *   Initial step: Input array is split into "sorted" sublists
 *   [4,7,4,3,9,1,2] -> [[4],[7],[4],[3],[9],[1],[2]]
 *
 *   Repeat merge step: Adjacent sublists are merged into sorted sublists
 *   [[4],[7],[4],[3],[9],[1],[2]] -> [[4,7],[3,4],[1,9],[2]]
 *
 *   Final product done! Return the sorted array:
 *   [1,2,3,4,4,7,9]
 *   RECURSIVE (top-down) approach:
 *
 *   1. Split the input array in half
 *   [4, 7, 4] -> [4], [7, 4]
 *
 *   2. Both sides are sorted recursively:
 *   [4] -> [4]
 *   [7, 4] -> [7], [4]
 *
 *   3. Halves are continually merged:
 *   [7], [4] -> [4, 7]
 *
 *   As you can see, all the work actually gets done in step 3, the merge
 *   step. Everything else is just splitting and recursing.
 *
 * Complexity:
 *   What is the complexity of your algorithm in time and space?
 *   The merge step can be implemented using what is conceptually an insertion sort, and yet its time
 *   complexity is (spoiler alert!) much lower. Why is that?
 *
 *
 * Extra credit: (ensure a stable sort)
 *   One of the benefits of mergesort over e.g. quicksort is that it is "stable"; i.e. 
 *   list items with the same value will remain in the same order they were
 *   in in the input. (This is academic in the case of sorting integers, but it is important
 *   when sorting more complex objects.) Is your implementation a stable sort?
 *
 * Extra credit: (take advantage of sorted runs)
 *   The naive mergesort assumes that the input array is completely unsorted, but in practice even random
 *   data will have "runs" of sorted integers. The "natural mergesort" takes advantage of this by splitting
 *   the input not into sublists of length 1, but into whatever sublists are already sorted in the input.
 *   Implement natural splitting into your mergesort. How much does it improve your average-case runtime?
 *
 */

// RECURSIVE (top-down) approach
var mergeSort = function(arr) {
  if (arr.length === 1) {return arr;}
  var midpoint = Math.floor(arr.length / 2);
  // recursively determine left and right arrays
  var left = mergeSort(arr.slice(0, midpoint)) || [];
  var right = mergeSort(arr.slice(midpoint, arr.length)) || [];
  return merge(left,right);
}

var merge = function(left, right) {
  var result = [];
  while (left.length || right.length) {
    if (left[0] === undefined) {
      result.push(right[0]);
      right.shift();
    } else if (right[0] === undefined) {
      result.push(left[0]);
      left.shift();
    } else if (left[0] > right[0]) {
      result.push(right[0]);
      right.shift();
    } else if (left[0] <= right[0]) {
      result.push(left[0]);
      left.shift();
    }
  }
  return result;
}

// ITERATIVE (bottom-up) approach: start with singles [[1],[3],[2]]
var mergeSort = function(array) {

  var singles = [];
  var makeSingles = function(array) {
    array.forEach(function(item) {
      singles.push([item]);
    });
  }
  makeSingles(array);

  var sortArrays = function(arr) {
    if (arr.length === 1) {return arr[0];}
    var idx = -1;
    var result = [];

    for (var i=0; i<arr.length; i+=2) {
      result.push([]); // pushing in one future result array for every 2 compared
      idx++;
      var left = arr[i];
      var right = arr[i+1] || [];
      while (left.length || right.length) {
        if (left[0] === undefined) {
          result[idx].push(right[0]);
          right.shift();
        } else if (right[0] === undefined) { // set right to empty arr so this will pass
          result[idx].push(left[0]); // if odd number, will just push in left
          left.shift();
        } else if (left[0] > right[0]) {
          result[idx].push(right[0]);
          right.shift();
        } else if (left[0] <= right[0]) {
          result[idx].push(left[0]);
          left.shift();
        }
      }
    }

    return sortArrays(result);
  }
  
  return sortArrays(singles);
}
  
  