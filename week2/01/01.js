//배열

//배열 생성 - 원소 지정
let fruits = ["사과", "바나나", "오렌지"];
//배열 생성 - 크기 지정
let number = new Array(5);

console.log(fruits[0]); //배열값에 접근 : [index] 를 사용

//push 메소드
fruits.push("포도"); //["사과", "바나나", "오렌지", "포도"];
//배열에 가장 뒤에 원소를 추가

//pop 메소드
fruits.pop(); // ["사과", "바나나", "오렌지"]
//배열에서 가장 마지막의 요소를 제거하고 반환 -> 배열의 length를 재계산하는 과정이 추가되어 알고리즘 과정상에 시간이 오래 걸리게 하는 요인

//shift
fruits.shift(); // [ "바나나", "오렌지"]
//배열에서 가장 앞의 요소를 제거하고 반환

fruits.unshift("수박"); // ["수박", "바나나" ,"오렌지"]
//배열의 가장 앞에 원소를 추가

fruits.splice(1, 1, "포도"); //startindex부터 length만큼의 길이의 배열 내용을 3번째 값으로 바꾼다.
//["수박", "포도","오렌지"]

//slice 메소드
let sliceFruits = fruits.slice(1, 2); //["포도"]
//startindex부터 endindex 값 앞까지의 배열만을 반환
