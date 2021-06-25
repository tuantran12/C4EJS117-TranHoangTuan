// B1
// let str_input = prompt('điền chữ muốn đảo lộn')
// let text = str_input.length - 1;
// let str_output = '';
// while(text > -1){
//     str_output +=str_input[text];
//     text--;
// }
// console.log(str_output);

// B2
// var str = prompt('điền chữ cần')
// function a(str) {
//     return str
//         .toLowerCase()
//         .split(' ')
//         .map(function(Word) {
//             return Word[0].toUpperCase() + Word.substr(1);
//         })
//         .join(' ');
//      }
//      alert(a(str))
// B3
// function unique(b) {
//     var newArr = []
//     for (var i = 0; i < b.length; i++) {
//       if (newArr.indexOf(b[i]) === -1) {
//         newArr.push(b[i])
//       }
//     }
//     return newArr
//   }
// B4

{
let newname,newtuoi,newbug;
let mindx = [
    {
        name: 'Nguyễn Thị Hà',
        tuoi: 23,
        bug: '2.000.000đ',
    },
    {
        name: 'Nguyễn Thị Vân',
        tuoi: 21,
        bug: '4.000.000đ',
    },
    {
        name: 'Nguyễn Thị linh',
        tuoi: 23,
        bug: '8.000.000đ',
    }
]
white (true){
    let data = prompt('Create, Read, Upload, Delete ')
            if(data == 'r'){
                for(var i = 0; i < mindx.length; i++) alert((i + 1) + ") ." + mindx[i] + '\n');
                break;
            }
            else if (data == 'c'){
                newname = prompt('Sản phẩm cần nhập');
                newtuoi = prompt('Sản phẩm cần nhập');
                newbug = prompt('Sản phẩm cần nhập');
                mindx.push(newname);
                alert ('done');
            }
            else if (data == 'u'){
                n = Number(prompt ('bạn muốn thay đổi sản phẩm thứ mấy'));
                newname = prompt('Sản phẩm cần nhập');
                newtuoi = prompt('Sản phẩm cần nhập');
                newbug = prompt('Sản phẩm cần nhập');
                mindx[n-1] = newItem;
                alert ('done');
            }
            else if (data == 'd'){
                n = Number(prompt('bạn muốn xóa sản phẩm thứ bao nhiêu?'));
                mindx.splice(n-1, 1);
            }
            else{
                alert('vui lòng nhập chính xác')
            }
        }
    }
