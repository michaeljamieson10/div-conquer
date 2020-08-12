function findFloor(arr, num, low = 0, high = arr.length - 1) {
    if (low > high) return -1;
    if (num >= arr[high]) return arr[high];
    let mid = low + Math.floor((high - low) / 2);
    
    if (arr[mid] === num) return arr[mid];
    // if (mid === 0)
    if (mid > 0 && arr[mid - 1] <= num && num < arr[mid]) {
        return arr[mid - 1];
      };
    if (num < arr[mid]) {
        console.log(arr[mid])
        return findFloor(arr, num, low, mid - 1);
    }
    return findFloor(arr, num, mid + 1, high)

}
console.log(findFloor([1, 2, 8, 10, 10, 12, 19], 5))
// function countZeroes(arr) {
//     let firstZero = findFirst(arr);
//     if (firstZero === -1) return 0;
//     console.log(arr.length - firstZero)
//     return arr.length - firstZero;
//     function findFirst(arr, low = 0, high = arr.length - 1){
//         let mid = low + Math.floor((high - low) / 2)
//         if (mid === 0 || arr[mid - 1] === 1 && arr[mid] === 0) {
//             console.log(mid, ' this is mid')
//             return mid;
//         } else if (arr[mid] === 1){
//             console.log(high,' high ruled')
//             return findFirst(arr, mid + 1, high)
//         }
//         console.log(low,' low ruled')
//         return findFirst(arr, low, mid - 1)
//     }
//     return -1;
// }
// countZeroes([1,1,1,1,0,0]) // 2
module.exports = findFloor