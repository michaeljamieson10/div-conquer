function findRotatedIndex(arr, num, low = 0, high = arr.length - 1) {
    var pivot = findPivot(array)
    if (pivot > 0 && num >= array[0] && num <= array[pivot - 1]) {
        return binarySearch(array, num, 0, pivot - 1);
    } else {
        return binarySearch(array, num, pivot, array.length - 1);
    }
}
function binarySearch(array, num, start, end) {
    if (array.length === 0) return -1;
    if (num < array[start] || num > array[end]) return -1;

    while (start <= end) {
        var mid = Math.floor((start + end) / 2);
        if (array[mid] === num) {
            return mid
        } else if (num < array[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1
        }
    }
    return -1;
}
function findPivot(arr){
    if (arr.length === 1 || arr[0] < arr[arr.length - 1]) return 0;
    var start = 0
    var end = arr.length - 1;
    while (start <= end){
        var mid = Math.floor((start + end) / 2);
        if (arr[mid] > arr[mid + 1]) return mid + 1
        else if (arr[start] <= arr[mid]) {
            start = mid + 1
        } else {
            end = mid - 1
        }
    }

}

module.exports = findRotatedIndex

//   function findPivot(arr) {
//     if (arr.length === 1 || arr[0] < arr[arr.length - 1]) return 0;
//     var start = 0
//     var end = arr.length - 1;
//     while (start <= end) {
//       var mid = Math.floor((start + end) / 2);
//       if (arr[mid] > arr[mid + 1]) return mid + 1
//       else if (arr[start] <= arr[mid]) {
//         start = mid + 1
//       } else {
//         end = mid - 1
//       }
//     }
//   }
  
//   module.exports = findRotatedIndex
  
//   // function findFloor(arr, num, low = 0, high = arr.length - 1) {
//   //   if (low > high) return -1;
//   //   if (num >= arr[high]) return arr[high];
//   //   let mid = low + Math.floor((high - low) / 2);
    
//   //   if (arr[mid] === num) return arr[mid];
//   //   // if (mid === 0)
//   //   if (mid > 0 && arr[mid - 1] <= num && num < arr[mid]) {
//   //       return arr[mid - 1];
//   //     };
//   //   if (num < arr[mid]) {
//   //       console.log(arr[mid])
//   //       return findFloor(arr, num, low, mid - 1);
//   //   }
//   //   return findFloor(arr, num, mid + 1, high)
  
//   // }
//   // console.log(findFloor([1, 2, 8, 10, 10, 12, 19], 5))