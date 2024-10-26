/*
For a given array with prices of 5 items [250,645,300,900,50].All items have an offer of 10% off on them.
Change the array to store final price agter applying offer.
*/

let itemArray=[250,645,300,900,50];

for (let i=0;i<itemArray.length;i++){
    let val=itemArray[i]-(itemArray[i]*10)/100;
    itemArray[i]=val;
}
console.log(itemArray);