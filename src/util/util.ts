import { RandomItemResult } from './interfaces';

export const pickXRandomItems = (items: Array<any>, num: number): RandomItemResult => {
  const itemsCopy: Array<any> = [...items];
  const pickedItems: Array<any> = [];
  let i: number = 0;

  while (i < num && itemsCopy.length > 0) {
    const randomIndex = Math.floor(Math.random() * itemsCopy.length);
    pickedItems[i] = items[randomIndex];
    itemsCopy.splice(randomIndex, 1);
    i++;
  }

  return {
    pickedItems: pickedItems,
    items: itemsCopy,
  };
};

export const pickXRandomItemsForYPlayers = (items: Array<any>, num: number, numPlayers: number): Array<object> => {
  const pickedItems: Array<any> = [];
  let itemsCopy: Array<any> = items;

  for (let i: number = 0; i < numPlayers; i++) {
    const res: RandomItemResult = pickXRandomItems(itemsCopy, num);
    pickedItems.push(pickedItems);
    itemsCopy = res.items;
  }

  return pickedItems;
};

export const shuffle = (array: Array<any>): void => {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}
