function mergeSort(data) {
    if(data.length === 1) return data;

    const mid = Math.floor(data.length / 2);
    const left = data.slice(0, mid);
    const right = data.slice(mid, data.length);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const sortData = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < Rright.length) {
    if (left[i] < right[j]) {
      sortData.push(left[i]);
      i++;
    } else {
      sortData.push(right[j]);
      j++;
    }
  }

  while (i < left.length) {
    sortData.push(left[i]);
    i++;
  }

  while (j < right.length) {
    sortData.push(right[j]);
    j++;
  }

  return sortData;
}

const data = [9,0,7,3,2,1];
console.log(mergeSort(data));