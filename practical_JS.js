// let fruit = prompt("무슨 과일을 사고 싶나요?");

// switch(fruit){
//     case `사과`:
//         alert('100원 입니다');
//         break;
//     case `바나나`:
//         alert('200원 입니다');
//         break;
//     case `키위`:
//         alert('300원 입니다');
//         break;
//     case `메론`:
//         alert('400원 입니다');
//         break;
//     case `수박`:
//         alert('500원 입니다');
//         break;
//     case `아보카도`:
//     case `토마토`:
//         alert('600원 입니다');
//         break;
//     default:
//         alert('그런 과일은 없어요..');
// }

// function showError(){
//     console.log(`에러가 발생했습니다. 다시 시도해주세요.`);
// }
// showError();

// function sayHello(name){
//     console.log(name)
//     let msg = 'Hello!'
//     if(name){
//         msg += `, ${name}!!`;
//     }
//     console.log(msg);
// }

// sayHello();
// sayHello('Doyun');

// function sayGoodbye(name = 'Friend'){
//     let msg = `Goodbye..${name}..`
//     console.log(msg);
// }

// sayGoodbye();
// sayGoodbye('Doyun');
// console.log(Number(undefined));

// let sayHello = function(name){
//     name = name || 'friend'
//     console.log(`Hello ! ${name}!!`);
// }

// sayHello();
// sayHello('Doyun');

// let add = function(num1, num2){
//     return num1 + num2;
// }

// let add = (num1, num2)=>{
//     return num1 + num2;
// }

// //return이 한줄이라면 괄호 생략 가능
// let add = (num1, num2)=>(num1 + num2)

// //return이 한줄이라도 안에 코드가 있다면 괄호 생략 불가능
// let add = (num1, nume2)=>{
//     const result = num1 + num2;
//     return result;
// }

// //인수가 1개라면 괄호 생략 가능
// let sayGoodbye = name =>`Goodbye, ${name}`;

// //만약 인수가 없는 함수라면 괄호 생략이 불가능
// let showError = () => {
//     console.log('error!!');
// }

// const name = 'JIEUN';
// const age = 17;

// const superman = {
//     name,
//     age,
//     gender : 'male'
// }

// superman.age = 16
// superman.name = 'Doyun'
// superman.hobby = 'games'
// superman['hairColor'] = 'red'
// delete superman.age;

// console.log(superman);
// console.log(superman.birthDay);
// console.log('birthday' in superman);
// console.log('age' in superman);

// function makeObject(name, age){
//     return {
//         name,
//         age,
//         hobby : 'football'
//     }
// }

// const Doyun = makeObject('Doyun',11,'running');
// console.log(Doyun)

// console.log('age' in Doyun)

// function isAdult(user){
//     if(!('age' in user) || user.age < 20){
//         return false;
//     }
//     return true;
// }

// const Doyun = {
//     name : 'Doyun',
//     age : 32
// };

// const Jieun = {
//     name : 'Jieun',
// }

// console.log(isAdult(Doyun));
// console.log(isAdult(Jieun));

// const Doyun = {
//     name: `Doyun`,
//     age: 32
// }

// for(x in Doyun){
//     console.log(x)
// }
// for(x in Doyun){
//     console.log(Doyun[x])
// }

// const superman = {
//     name: 'Doyun',
//     age: 33,
//     fly(){
//         console.log(`${this.name} can fly!`)
//     }
// }

// superman.fly();

// 생성자 함수 : 상품 객체를 생성해보자.

// function Item(title, price){
//     // this = {};
//     this.title = title;
//     this.price = price;
//     this.showPrice = function() {
//         console.log(`가격은 ${price}원 입니다.`);
//     }
    
//     //return this;
// }

// const itemp1 = new Item('인형', 3000);

// console.log(itemp1.price);
// itemp1.showPrice();


// const user = {
//     [1 + 4]: 5,
//     [`안녕`+`하세요`]: `Hello!`
// }

// console.log(user)

// const user = {
//     name: `Doyun`
// }

// const user1 = {
//     age: 30
// }

// const user2 = {
//     gender : `male`
// }

// const newUser = Object.assign(user, user1, user2);
// console.log(newUser);


// function makeObj(key, val){
//     return{
//         [key]: val
//     }
// }
// const obj = makeObj("나이", 33);
// console.log(obj);

// const user = {
//     name: 'Doyun',
//     age: 32
// }

// const result = Object.entries(user);
// console.log(result);
// console.log(result[0][0]);
// console.log(result[0][1]);

// console.log(result[1][0]);
// console.log(result[1][1]);

// let arr = [
//     [`mon`, `월`],
//     [`tue`, `화`]
// ]

// const result = Object.fromEntries(arr);
// console.log(result);
// console.log(typeof(result));

// const id = Symbol('id test');
// console.log(id);

// //다른 개발자가 만들어 놓은 객체
// const user = {
//     name: "Mike",
//     age: 30
// };

// //나의 작업
// const showName = Symbol('show name');
// user[showName] = function(){
//     console.log(this.name);
// }
// user[showName]();

// //사용자가 접속하면 보는 메세지
// for(let key in user){
//     console.log(`His ${key} is ${user[key]}`)
// }

// let num1 = 5.1;
// let num2 = 5.7;

// console.log(Math.PI);

// console.log(`올림-----`);
// console.log(Math.ceil(num1));
// console.log(Math.ceil(num2));

// console.log(`내림-----`);
// console.log(Math.floor(num1));
// console.log(Math.floor(num2));

// console.log(`반올림-----`);
// console.log(Math.round(num1));
// console.log(Math.round(num2));

// console.log(`소수 둘째자리까지 표현-----`);
// let userRate = 30.12345;
// console.log(userRate.toFixed(2));

// 금칙어 : 콜라

function hasCola(str){
    //if(str.indexOf("콜라") > -1){
    if(str.includes("콜라")){
        console.log("금칙어가 있습니다");
    } else {
        console.log("통과");
    }
}

console.log("오 ㅏ사이다가 짱이야".includes("짱이"));
hasCola("와 사이다가 짱이야!");
hasCola("무슨소리, 콜라가 최고야");
hasCola("콜라");
