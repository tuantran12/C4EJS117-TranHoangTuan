// 1. Pending
// var promise = new Promise(
//     function(resolve, reject) {
//         // Logic
//         // Thành công: Resolve()
//         // Thất bại: Reject()

//         resolve([
//             {
//                 id: 1,
//                 name: 'Javascript'
//             }
//         ]);
//     }
// );

// promise
//     .then(function(courses){
//         console.log(courses);
//     })
//     .catch(function() {
//         console.log('Failure');
//     })
//     .finally(function() {
//         console.log('done');
//     });

// 2. Sync / Async

// setTimeout(() => {
//     console.log('Promise is da best')
// }, 5000);

// console.log(2);  

// 3 Pendingg
var promise = new Promise(
    function(resolve, reject) {
        // Logic
        // Thành công: Resolve()
        // Thất bại: Reject()

        resolve();
    }
)
promise
    .then(function(){
        return 1;
    })
    .then(function(data){
        console.log(data)
        return 2;
    })

// BT
async function load(){
    const conn = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
    const data = await conn.json();
    console.log(data);
    console.log(data.moves[0].move);
    document.getElementById("app").innerHTML = data.moves[0].move.name;
}

load();


//1

const fetchPromise = fetch('https://pokeapi.co/api/v2/pokemon/ditto');
fetchPromise.then(connection => {
    console.log('Connected');
    console.log(connection);
    const jsonPromise = connection.json();
    console.log(jsonPromise)
});

//3

async function load() {
    const conn = await fetch('https://sheetdb.io/api/v1/s8f0skzv6fujp');
    const data = await conn.json();
    console.log(data[1].id);
    console.log(data[1].name);
    console.log(data[1].age);
}
load();

//4

function function4() {
    const x = Math.floor(Math.random() * 11);
    console.log(x);
    if (x < 0) {
        console.log('Failed: the number is smaller than 0');
    } else if (x > 10) {
        console.log('Failed: the number is bigger than 10');
    } else {
        console.log('Passed, bravo');
    }

}

function4();