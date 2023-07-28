export const quickSort: QuickSort = (
  arr,
  sortBy = "id",
  isDescending = false
) => {
  if (arr.length < 2) return arr;
  let pivot = arr[0];

  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (
      isDescending
        ? pivot[sortBy] < arr[i][sortBy]
        : pivot[sortBy] >= arr[i][sortBy]
    ) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return quickSort(left, sortBy, isDescending).concat(
    pivot,
    quickSort(right, sortBy, isDescending)
  );
};
