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

// function hasCola(str){
//     //if(str.indexOf("콜라") > -1){
//     if(str.includes("콜라")){
//         console.log("금칙어가 있습니다");
//     } else {
//         console.log("통과");
//     }
// }

// console.log("오 ㅏ사이다가 짱이야".includes("짱이"));
// hasCola("와 사이다가 짱이야!");
// hasCola("무슨소리, 콜라가 최고야");
// hasCola("콜라");

// let arr = ["Mike", "Doyun", "Jieun"];

// arr.forEach((name, index) => {
//     console.log(name);
// });

// arr.forEach((name, index) => {
//     console.log(`${name}, ${index}`);
// });

// let arr = [1, 2, 3, 4, 5, 6];

// const result = arr.filter( (item) => {
//     return item % 2 === 0;
// })

// console.log(result);

// let userList = [
//     { name: "Mike", age: 30},
//     { name: "Doyun", age: 27},
//     { name: "Jieun", age: 10}
// ];

// let newUserList = userList.map((user, index)=>{
//     return Object.assign({}, user,{
//         id: index + 1,
//         isAdult: user.age > 19,
//     })
// });

// console.log(newUserList);
// console.log(userList);

// 객체와 배열 구분하기

// let user = {
//     name: 'Doyun',
//     age: 32,
// };

// let userList = ['Doyun', 'Jieun', 'Yuna']

// console.log(typeof(user));
// console.log(typeof(userList));

// console.log(`배열확인 : ${Array.isArray(user)}`);
// console.log(`배열확인 : ${Array.isArray(userList)}`);


// let arr = [1, 2, 3, 4, 5, 6];
// let result = 0;
// let result_reduce;

// arr.forEach((num) => {
//     result += num;
// })

// // prev는 누적값이고, cur는 현재값이다.
// result_reduce = arr.reduce( (prev, cur) => {
//     return prev + cur;
// }, 20); // 초기값을 설정할 수 있다.

// console.log(result);
// console.log(result_reduce);

// let userList = [
//     {name: "Mike", age: 30},
//     {name: "Joe", age: 20},
//     {name: "Tomi", age: 14},
//     {name: "Bubury", age: 27},
//     {name: "Guzi", age: 33},
//     {name: "Nike", age: 17}
// ];

// let result = userList.reduce( (prev, cur) => {
//     if(cur.age > 19){
//         prev.push(cur.name);
//     }
//     return prev;
// },[])

// let userList_sum_age = userList.reduce( (prev, cur) => {
//     return prev + cur.age;
// }, 0);

// console.log(result);
// console.log(userList_sum_age);

let users = ["Doyun", "Jieun", "IU"];

/*
let user1 = users[0];
let user1 = users[1];
let user1 = users[2];
*/


//    let str = "Doyun-Jieun-IU";
//    let [user1, user2, user3] = str.split("-");

//    console.log(user1);
//    console.log(user2);
//    console.log(user3);

// function User(name, age, ...skills) {
//     this.name = name;
//     this.age = age;
//     this.skills = skills;
// }

// const user1 = new User('Doyun',32, 'html','css');
// const user2 = new User('Jieun',31, 'JS','React');
// const user3 = new User('IU',10, 'English');

// console.log(user1);
// console.log(user2);
// console.log(user3);

/*****
 * 전개 구문
 * arr1 을 [4, 5, 6, 1, 2, 3] 으로
 *****/
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let arr3 = [1, 2, 3];
// let arr4 = [4, 5, 6];


// //reverse를 하는게 핵심이지만..
// arr2.reverse().forEach((num) => {
//     arr1.unshift(num);
// });

// console.log(arr1); // 6,5,4,1,2,3 으로 출력

// arr3 = [...arr4, ...arr3];
// console.log(arr3);

// let user = { name: `Doyun` };
// let info = { age: 30 };
// let fe = [`JS`, `React`]
// let lang = [`Korea`, `English`]
// //console.log(user);
// //console.log(fe);

// user = Object.assign({}, user, info, {skills: []});

// fe.forEach((item) => {
//     user.skills.push(item);
// });

// lang.forEach((item) => {
//     user.skills.push(item);
// })
// console.log(user);

// let user1 = {
//     ...user,
//     ...info,
//     skills: [...fe, ...lang],
// };
// console.log(user1);


// let num = 1;

// function showTime() {
//     console.log(`안녕하세요. 접속하신지 ${num++}초 만큼 지났습니다.`);
//     if (num > 5) {
//         clearInterval(tId);
//     }
// }

// const tId = setInterval(showTime, 1000);

// const doyun = {
//     name: "Doyun",
// };

// const jieun = {
//     name: "Jieun",
// };

// function showThisName(){
//     console.log(this.name);
// }
// // showThisName();
// // showThisName.call(doyun);
// // showThisName.call(jieun);

// function update(birthYear, occupation){
//     this.birthYear = birthYear;
//     this.occupation = occupation;
// }

// const updateDoyun = update.bind(doyun);
// updateDoyun(19992, "IT DEVELOPER");

// console.log(doyun);


// const nums = [3, 10, 1, 6, 4];
// // const minNum = Math.min(...nums);
// // const maxNum = Math.max(...nums);

// //const minNum = Math.min.apply(null, nums);
// const minNum = Math.min.call(null, ...nums);

// //const maxNum = Math.max.apply(null, nums);
// const maxNum = Math.max.call(null, ...nums);

// console.log(minNum);
// console.log(maxNum);


// const user = {
//     name: "Doyun",
//     showname: function() {
//         console.log(`hello, ${this.name}`);
//     },
// };

// user.showname();

// // 아래 3가지의 case의 차이점을 이해해야한다.
// console.log("---- ↓")
// let fn = user.showname;
// fn();
// fn.call(user);
// fn.apply(user);

// let boundFn = fn.bind(user);
// boundFn();

// const car = {
//     wheels: 4,
//     driver() {
//         console.log("driver...");
//     },
// };

// const bmw = {
//     color: "red",
//     navigation: 1,
// };

// const benz = {
//     color: "balck",
// };

// const audi = {
//     color: "blue",
// }

// bmw.__proto__ = car;
// benz.__proto__ = car;
// audi.__proto__ = car;

// const bmw_x5 = {
//     color: "white",
//     name: "x5",
// };

// bmw_x5.__proto__ = bmw;

// const car = {
//     wheels: 4,
//     driver() {
//         console.log("driver..");
//     },
// };

// const Bmw = function(color){
//     this.color = color;
// };

// Bmw.prototype.wheels = 4;
// Bmw.prototype.dirve = function() {
//     console.log("drive..");
// }
// Bmw.prototype.stop = function() {
//     console.log("stop!!!");
// }

// const bmw_x5 = new Bmw("red");
// const bmw_x4 = new Bmw("blue");


// bmw_x5.__proto__ = car;
// bmw_x4.__proto__ = car;


