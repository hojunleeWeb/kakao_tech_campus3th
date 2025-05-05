let s = "Pyy";
s = s.toLowerCase();

let p_cnt = 0;
let y_cnt = 0;
for (let i = 0; i < s.length; i++) {
    if (s[i] === "p") p_cnt++;
    else if (s[i] === "y") y_cnt++;
}

if (p_cnt === y_cnt) {
    console.log(true);
} else {
    console.log(false);
}
