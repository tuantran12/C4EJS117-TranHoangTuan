// B1
let ngaunhien = Math.random()
    console.log(ngaunhien)
// B2
let x = [2,5,6,9,10];
let show = x[Math.floor(Math.random() * x.length)];
console.log (show);
// B3
let a = {
    1 : 'None',
    2 : '4 legs',
    3 : '8 legs',
    4 : '12 legs',
};
// while (true) {
//     let n = Number(prompt(`How many legs does a spider have?\n` + a ))
//     if (n == null || n == undefined) {
//         aler t('GoodBye!');
//         break;
//     }
//     else if(n==3){
//         alert('Bravo, you are correct');
//         break;
//     }
//     else{
//         alert('Good luck next time');
//     }
// }
// B4
// let kol = ['to', 'be', 'that', 'of', 'elon', 'to', 'this', 'now', 'back', 'cool', 'hey', 'love', 'of',
//            'life', 'that', 'rain', 'summer', 'color', 'now', 'of', 'hat', 'late', 'sorry', 'my', 'team']
//            countData = {};
//            for (i=0; i < kol.length; i++) {
//                c = kol[i];
//                if(countData[c]){
//                    countData[c] ++;
//                }
//                else{
//                    countData[c] = 1;
//                }
//            }
// console.log(countData)
// B4 - B5
const inventory = [
    {
        name: 'HP Envy 13aq',
        price: 21000,
        brand: 'HP',
        quantity: 5,
    },
    {
        name: 'Dell XPS 9370',
        price: 30000,
        brand: 'Dell',
        quantity: 1,
    },
    {
        name: 'Dell Inspiron 3567',
        price: 9300,
        brand: 'Dell',
        quantity: 12,
    },
    {
        name: 'Dell Latitude E5450',
        price: 8600,
        brand: 'Dell',
        quantity: 2,
    },

    {
        name: 'Asus Zenbook',
        brand: 'Asus',
        price: 20000,
        quantity: 4,
    },
    {
        name: 'HP Pavilion',
        brand: 'HP',
        price: 14000,
        quantity: 7,
    },
]

let inventoryByBrand = {
    'HP': [],
    'Dell':[],
    'Asus':[],
};
for (i = 0; i < inventory.length; i++) {
    let kml = inventory[i];
    let brand = kml.brand;
    inventoryByBrand[brand].push(kml)
}
console.log(inventoryByBrand)


