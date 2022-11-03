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

function sayHello(name){
    console.log(name)
    let msg = 'Hello!'
    if(name){
        msg += `, ${name}!!`;
    }
    console.log(msg);
}

sayHello();
sayHello('Doyun');

function sayGoodbye(name = 'Friend'){
    let msg = `Goodbye..${name}..`
    console.log(msg);
}

sayGoodbye();
sayGoodbye('Doyun');
console.log(Number(undefined));