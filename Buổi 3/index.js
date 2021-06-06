// let item1 = 'keo cao su'
// let item2 = 'keo bong'
// let item3 = 'keo keo dai'
// let item4 = 'keo gom'

// let menu = [];
// console.log(menu);

// let menu = ['keo ca su'];
// console.log (menu);

let menu = ['keo ' , 'banh' , 'kem' , 'bim'];
console.log(menu);

// Create
// let newItem = prompt('them 1 loai keo moi');
// menu.push(newItem);
// console.log(menu);

// Read
// let i = prompt('điền số cần')
// console.log(menu[i]);

// Update
// console.log(menu[1]);
// menu[1] = 'chao long tiet canh'
// console.log(menu[1])
// console.log(menu);

// Delete
// let i = prompt('số bất kì')
// let a = prompt('số cần tiếp')
// menu.splice(a, i);
// console.log(menu);

// Read all
// for(let i = 0; i < menu.length; i++){
// console.log(menu[i]);
// }

// Update all
// for(let i = 0; i < menu.length; i++){
//     menu[i] = prompt('điền bất kì');
//     menu[i] = menu[i].toUpperCase();
// }
// console.log(menu)

// White
// let n;
// while (true) {
//     n = Number(prompt('điền só cần?'))
//     if (n) {
//         //n is valid 
//         break;
//     }

// }
// console.log(n);

let shop = ['Jeans', 'T-Shirt', 'Socks'];
let init;
let item, index;
while(true){
    init = prompt('Hi there, welcome to shop admin panel, what do you want (C, R, U, D)?');
    if(init == undefined){
        alert("Thanks");
        break;
    }
    else if(init == "r"){
        for(let i = 0; i < shop.length; i++) console.log((i + 1) + ". " + shop[i]);
        break;
    }
    else if(init == "c"){
        item = prompt('Enter the name of the new item');
        shop.push(item);
        alert("Done");
    }