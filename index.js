import { pipe, always, applySpec } from 'ramda';

const getValue = (o, sortKey) => sortKey ? o[sortKey] : o


// Quick sort
const sort = (list, sortKey) => {
  // SHOULD IMPLEMENT

  let left = 0;
  let right = list.length - 1;
  list = quickSort(list, left, right, sortKey);

  return list;


};

const findIndex = (list, sortKey) => value => {

  let left = 0;
  let right = list.length - 1;
  let mid = Math.floor((left + right) / 2);

  while (getValue(list[mid], sortKey) !== value && left <= right) {
    if (value < getValue(list[mid], sortKey)) {
      right = mid - 1
    } else {
      left = mid + 1
    }
    mid = Math.floor((left + right) / 2);
  }
  if (getValue(list[mid], sortKey) === value) {
    return mid;
  } else {
    return -1
  }


}


const insert = (list, sortKey, item) => {
  // SHOULD IMPLEMENT a preserving order insertion

  let left = 0;
  let right = list.length - 1;
  let mid = Math.floor((left + right) / 2);

  while (getValue(list[mid], sortKey) !== item && left <= right) {
    if (item < getValue(list[mid], sortKey)) {
      right = mid - 1
    } else {
      left = mid + 1
    }
    mid = Math.floor((left + right) / 2);
  }
  list.splice(mid + 1, 0, item);

  return list;


}


const remove = (list, sortKey, value) => {
  // SHOULD IMPLEMENT

  let left = 0;
  let right = list.length - 1;
  let mid = Math.floor((left + right) / 2);

  while (getValue(list[mid], sortKey) !== value && left <= right) {
    if (value < getValue(list[mid], sortKey)) {
      right = mid - 1
    } else {
      left = mid + 1
    }
    mid = Math.floor((left + right) / 2);
  }

  if (getValue(list[mid], sortKey) === value) {
    list.splice(mid, 1);
    return list;
  } else {
    return -1
  }

}



//Functions 
function partition(items, left, right, sortKey) {
  

  let pivot = getValue(items[Math.floor((right + left) / 2)], sortKey),
    i = left, //left pointer
    j = right; //right pointer

  while (i <= j) {
    //increment left pointer if the value is less than the pivot
    while (getValue(items[i], sortKey) < pivot) {
      i++;
    }

    //decrement right pointer if the value is more than the pivot
    while (getValue(items[j], sortKey) > pivot) {
      j--;
    }

    //else we swap.
    if (i <= j) {
      [items[i], items[j]] = [items[j], items[i]];
      i++;
      j--;
    }
  }

  //return the left pointer
  return i;
}

function quickSort(items, left, right, sortKey) {
  let index;

  if (items.length > 1) {
    index = partition(items, left, right, sortKey); //get the left pointer returned

    if (left < index - 1) {
      //more elements on the left side
      quickSort(items, left, index - 1, sortKey);
    }

    if (index < right) {
      //more elements on the right side
      quickSort(items, index, right, sortKey);
    }
  }

  return items; //return the sorted array
}


export const List = ({ sortKey, initial, initialOrder}) => {
  const items = initialOrder ? initial : sort(initial, sortKey);

  return {
    items,
    findIndex: findIndex(items, sortKey),
    remove: value => List({
      sortKey,
      initial: remove(items, sortKey, value),
      initialOrder: true
    }),

    insert: item => List({
      sortKey,
      initial: insert(items, sortKey, item),
      initialOrder: true
    })
  }
}
