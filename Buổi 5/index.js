const s = 'Tao thích ăn kẹo. Bạn có thích không'
const countData = {};
for (let i = 0; i < s.length; i++){
    const c = s[i].toLocaleLowerCase();
    if (countData[c]){
        countData[c]++;
    }
    else{
        countData[c] = 1
    }
}
console.log(countData)