'use strict';

let i = 1;
while (i < 65536) {
    i = i * 2;
    console.log(i);
}

let allCones = Math.floor(Math.random() * 50) + 50;
// our total number of cones
let conesBought = 0
// cones bought
do {
    let customerPurchase = Math.floor(Math.random() * 5) + 1;
    // random number of cones customer will buy
    if( allCones >= customerPurchase) {
        conesBought++;
        console.log(`${customerPurchase} cones sold...`);
        // log number of cones sold
        allCones -= customerPurchase;
    } else {
        console.log(`cannot sell you ${customerPurchase} cones I only have ${allCones} left...`)
        // tell customer we cant sell cones requested due to lack of inventory
    }
} while (allCones > 0);
console.log('Yay! I sold them all!');
// log once all cones are sold