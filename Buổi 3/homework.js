// B1
// {
//     let a = 5;
//     let b = 6;
//     let temp;
//     {
//     console.log(a,b)
//     }
//     temp = a;
//     a = b;
//     b = temp;

//     console.log(a,b)
// }
// B2 cách 1
// {
//     let s = 'Hello beauty there';
//     let a = ['Hello','beauty','there'];
//     let temp;
//     {
//     console.log(a)
//     }
//     temp = s;
//     a = s;
//     a = temp;
//     console.log(s);
// }
// B2 cách 2
// {
//     var s = "Hello beauty there";
//     var a = s.split(" ");
//     console.log(a)
// }
// B3
// {
//     let a = [4 , 5 , 6, -8];
//     console.log(...a);
// }
// Gợi ý
// let menu = ['C','R','U','D'];
// for (let x = 0; x<menu.length; x++) {
//     if (menu[x] == 'C') {
//         menu[x] = 'com';
//     }
// }
// console.log(menu);
// B4 console.log
// {
//     let shop = ['Jeans', 'Black shirt', 'Tie'];
//     let menu;
//     let n, newItem;
//     while (true){
//         menu = prompt('Chọn bất kì ký tự C,R,U,D');
//             if(menu == 'r'){
//                 for(let i = 0; i < shop.length; i++) console.log((i + 1) + ") ." + shop[i]);
//                 break;
//             }
//             else if (menu == 'c'){
//                 newItem = prompt('Sản phẩm cần nhập');
//                 shop.push(newItem);
//                 alert ('done');
//             }
//             else if (menu == 'u'){
//                 n = Number(prompt ('bạn muốn thay đổi sản phẩm thứ mấy'));
//                 newItem = prompt('tên mới cho sản phẩm cần thay đổi')
//                 shop[n-1] = newItem;
//                 alert ('done');
//             }
//             else if (menu == 'd'){
//                 n = Number(prompt('bạn muốn xóa sản phẩm thứ bao nhiêu?'));
//                 shop.splice(n-1, 1);
//             }
//             else{
//                 alert('vui lòng nhập chính xác')
//             }
//     }
// }
// B4 alert
// {
//     let shop = ['Jeans', 'Black shirt', 'Tie'];
//     let menu;
//     let n, newItem;
//     while (true){
//         menu = prompt('Chọn bất kì ký tự C,R,U,D');
//             if(menu == 'r'){
//                 for(var i = 0; i < shop.length; i++) alert((i + 1) + ") ." + shop[i] + '\n');
//                 break;
//             }
//             else if (menu == 'c'){
//                 newItem = prompt('Sản phẩm cần nhập');
//                 shop.push(newItem);
//                 alert ('done');
//             }
//             else if (menu == 'u'){
//                 n = Number(prompt ('bạn muốn thay đổi sản phẩm thứ mấy'));
//                 newItem = prompt('tên mới cho sản phẩm cần thay đổi')
//                 shop[n-1] = newItem;
//                 alert ('done');
//             }
//             else if (menu == 'd'){
//                 n = Number(prompt('bạn muốn xóa sản phẩm thứ bao nhiêu?'));
//                 shop.splice(n-1, 1);
//             }
//             else{
//                 alert('vui lòng nhập chính xác')
//             }
//     }
// }
// B5
    // let b = [];
    // let tong = prompt("điền các số cần tính giãn cách nhau theo dấu (,) "); 
    // b = tong.split(",");
    // total = 0;
    // for (let i = 0; i < b.length; i++) total += Number(b[i]);
    //     alert(`tổng dãy số = ${total}`)
// B6
    // let b = prompt('điền các số cần tính giãn cách nhau theo dấu (,)');
    // let tong = b.split(',');
    // alert('The smallest number is ' + Math.min(...tong));
// B7
    // const arr = [3,4,6,-9,10,-88,2];
    // let num = Number(prompt('Điền 1 số bất kì'));
    // for (i = 0; i<arr.length; i++){
    //     if (num == arr[i]) {
    //         alert (`${num} là số thuộc chuỗi hệ thống nằm ở vị trí thứ ` + i);
    //         break;
    //     }
    //     else if(num != arr[i]){
    //         alert(`${num} không phải số thuộc chuỗi hệ thống`);
    //         break;
    //     }
    // }
