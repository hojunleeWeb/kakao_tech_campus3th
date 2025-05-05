let absolutes = [4, 7, 12];
let signs = [true, false, true]; //true면 양수, false면 음수

let sum = 0;
for (let i = 0; i < absolutes.length; i++) {
    if (signs[i]) {
        sum += absolutes[i];
    } else {
        sum -= absolutes[i];
    }
}
console.log(sum);
