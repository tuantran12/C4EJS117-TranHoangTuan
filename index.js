// B1
//1
// var và const dùng để khai báo biến
//2,3,4
// var vs let vs const
//
// Var
// Phạm vi chức năng
// Không xác định khi truy cập một biến trước khi nó được khai báo
//
// Let
// Phạm vi khối
// Lỗi tham chiếu khi truy cập một biến trước khi nó được khai báo
//
// Const
// Phạm vi khối
// Lỗi tham chiếu khi truy cập một biến trước khi nó được khai báo 
// không thể được chỉ định lại

// // B3 a
let x = 0
while (x < 7) {
    console.log(x);
    x++;
}

// // B3 b
{
let x = prompt('What is number do you want')
for ( i = 0; i<x; i++ ) {
    console.log(i)
}
}

// // B3 c
{
    let x = prompt('What is number next?')
    for ( i = 3; i<x; i++)
    console.log(i)
}

// // B3 d
{
    let c = prompt ('The number start?')
    let n = prompt ('The number end?')
    for ( i = c; i<n; i++)
    console.log(i)
}

// B3 e
{
let c = Number(prompt('Enter c'));
let n = Number(prompt('Enter n'));
for(i=c; i<n;i+=3){
    console.log(i);
    }
}

// B3 f
{
    let n = Number(prompt('Enter n'));
    let c = Number(prompt('Enter c'));
    let s = Number(prompt('Enter s'));
    for(i=c; i<n;i+=s){
        console.log(i);
        }
    }
    
// B4
{
    let n = prompt("Enter a number");
    let gt = 1;
	for (i = 1; i <= n; i++) {
	gt = gt*i
	}
    alert('The factorial of '+ gt)
}
// // B5
{
    let x = prompt('nhập tuổi của bạn?')
    if (x <= 14){
        alert ('bạn chưa đủ tuổi tham gia')
    }else{
        alert ('tuyệt bạn đủ tuổi rồi đó')
    }
}
// // B6
{
    let x = prompt('nhập số cần nhập')
    if (x < 4.5){
        alert('lower half of 9')
    }else{
        alert('higher half of 9')
    }
}
//B7
{
    let x = prompt('Nhập số đầu');
    let s = prompt('Nhập số thứ 2');
    if (s<=x/2) {
        alert(`${s} lower half of ${x}`)
    }else{
        alert(`${s} higher half of ${x}`)
    }
}
//B8
{
    let x = prompt('Nhập số đầu');
    if (x % 2 == 0) {
        alert('even number')
    }else{
        alert('odd number')
    }
}
// B9 a
{
    for (let x = 1; x <=7; x++) {
        if (x <= 7/2){
        console.log('H')
        }else{
        console.log('L')
        }
    }
}
// B9 b
{
    let x = prompt('điền số cần thiết');
    for (let i = 1; i <= x; i++){
        if(i <= x/2){
            console.log('H');
        }else{
            console.log('L');
        }
    }
}
// B9 c
{
    let x = prompt('Một số bất kì');
    for (let i = 1; i <= x; i++) {
        if(i <= x/2) {
            console.log(0);
            console.log(1);  
        }
        
    }
    if (x % 2 != 0){
        console.log(0);
    }
}
// B10
{
let x = prompt('Your weight in Kg');
let y = prompt('Your height in M');
let BMI = `${x/(y*2)}`
alert(`Your BMI is ${BMI}`)
if(BMI<16){
    alert('You are severely underweight')
}
else if(BMI<=18.5){
    alert('You are underweight')
}
else if(BMI<=25){
    alert('You are normal')
}
else if(BMI<=30){
    alert('You are overweight')
}
else{
    alert('You are obese')
}
}