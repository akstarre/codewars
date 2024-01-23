// Find intersecting values of two arrays

const intersect = (arr1, arr2) => {
  let shortest = arr1.length < arr2.length ? arr1 : arr2;
  let longest = arr1.length > arr2.length ? arr1 : arr2;
  let result = [];
  for (i = 0; i <= shortest.length; i++) {
    let found = longest.indexOf(shortest[i]);
    if (found) {
      result.push(longest[found]);
      shortest.splice(i, 1);
      longest.splice(found, 1);
    }
  }
  return result;
};

arr1 = [9, 2];
arr2 = [4, 5, 3, 8, 9, 2];

console.log(intersect(arr1, arr2));
