let numbers = [1, 2, 3, 4, 5];

//매개 변수 사이에 함수를 넣는 것 : 콜백 함수
numbers.forEach(function (item) {
    //item : numbers의 원소 하나하나
    console.log(item);
});

//map : 기존에 있었던 배열을 가공해서 새로운 배열을 리턴하는 메소드
let newNumbers = numbers.map(function (item) {
    return item * 2;
}); //[2,4,6,8,10]
//map의 콜백함수가 리턴하는 횟수는 기존 배열의 길이 만큼 -> 즉, return이 undefined라면 기존 배열의 길이만큼 undefiend가 채워지게 된다

let filteredNumbers = numbers.filter(function (item) {
    return item === 5;
}); //[5]
//return이 true인 것만 기존 배열에서 필터링해서 배열을 반환하는 함수..? -> 기존 배열의 길이 만큼 리턴하지 않는다

numbers.find(function (item) {
    return item > 3;
}); //4
//return이 true인 조건문에 대해 가장 처음으로 만족하는 요소를 반환
