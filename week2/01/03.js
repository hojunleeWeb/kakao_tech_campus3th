//for ~ in 문
//객체의 속성을 출력하는 방법

let person = {
    name: "John",
    age: 30,
    gender: "male",
};

//변수명 in 객체명 을 이용해 객체명의 key를 변수명으로 접근가능해진다.
for (let key in person) {
    console.log(key + " : " + person[key]);
}
