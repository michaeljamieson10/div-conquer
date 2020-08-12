// function countZeroes(arr, val) {
 
//     let leftIdx = 0;
//     let rightIdx = arr.length - 1;
//     let zeroCount = 0;
  
//     while (leftIdx <= rightIdx) {
//       // find the middle value
//       let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
//       let middleVal = arr[middleIdx];
// //   if val is 0 add to zeroCount
//       if (middleVal < val) {
//         // middleVal is too small, look at the right half
//         leftIdx = middleIdx + 1;
//       } else if (middleVal > val) {
//         // middleVal is too large, look at the left half
//         rightIdx = middleIdx - 1;
//       } else {
//         // we found our value!
//         // return middleIdx;
        
//         // We are done
//         return zeroCount
//       }
//     }
    
//     // left and right pointers crossed, val isn't in arr
//     return -1;


//   } 
// }

// module.exports = countZeroes

// function countZeroes(arr) {
//     // add whatever parameters you deem necessary - good luck!
//     let firstZero = findFirst(arr)
//     if (firstZero === -1) return 0;
  
//     return arr.length - firstZero
//   }
  
//   function findFirst(arr, low = 0, high = arr.length - 1) {
//     if (high >= low) {
//       let mid = low + Math.floor((high - low) / 2)
//       if ((mid === 0 || arr[mid - 1] === 1) && arr[mid] === 0) {
//         return mid;
//       } else if (arr[mid] === 1) {
//         return findFirst(arr, mid + 1, high)
//       }
//       return findFirst(arr, low, mid - 1)
//     }
//     return -1;
//   }
  
//   module.exports = countZeroes
function countZeroes(arr) {
    let firstZero = findFirst(arr);
    if (firstZero === -1) return 0;
    console.log(arr.length - firstZero)
    return arr.length - firstZero;
    function findFirst(arr, low = 0, high = arr.length - 1){
        let mid = low + Math.floor((high - low) / 2)
        if (mid === 0 || arr[mid - 1] === 1 && arr[mid] === 0) {
            console.log(mid, ' this is mid')
            return mid;
        } else if (arr[mid] === 1){
            console.log(high,' high ruled')
            return findFirst(arr, mid + 1, high)
        }
        console.log(low,' low ruled')
        return findFirst(arr, low, mid - 1)
    }
    return -1;
}
countZeroes([1,1,1,1,0,0]) // 2

module.exports = countZeroes;