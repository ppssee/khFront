// script src에 defer를 함께 사용해줘야 함 
// document.querySelector("#p1").innerHTML = 1;

// function은 실행이 모두 끝나고 마지막에 실행돼서 상관없음 
// 선언적 함수
function jsFunc1(){ 
    var pTag = document.querySelector("#p1");
    pTag.innerHTML = "jsFunc1() 함수 실행완료";
}

// 변수에 함수를 담을 수 있음, JS는 자료형을 구분하지 않기때문
// 익명 함수
var jsFunc2 = function (){
    document.querySelector("#p2").innerHTML="jsFunc2() 함수 실행완료"
}

function resultJsFunc4(){
    jsFunc4(23,5,10); // value, value2, value3
}

function jsFunc4(value, value2, value3){ // 자료형 없어도 됨.
    document.querySelector("#p4").innerHTML=value+value2+value3+"<br>";
}
function resultJsFunc5(){
    var a = jsFunc5();
    document.querySelector("#p5").innerHTML = a + "<br>";
}
function jsFunc5() {
    return Math.floor(Math.random()*100 + 1);
}
function calculatePlus(num1, num2, operator){
    var result = 0;
    switch(operator){
        case '+' : result = num1 + num2; break;
        case '-' : result = num1 - num2; break;
        case '*' : result = num1 * num2; break;
        case '/' : result = num1 / num2; break;
        case '%' : result = num1 % num2; break;
    }
    return result;
}

// 콜백함수 ★★★ 동기, 비동기처리 사용 
function callFuncTenTimes(otherFunc){
    for(var i=0; i< 10; i++){
        otherFunc(i);   // calleeFunc(0,1,2...10);
    }
}
function calleeFunc(num){
    var pTag = document.querySelector("#p6");
    pTag.innerHTML += (num+1) + "번째 함수 호출 완료 <br>";
}
callFuncTenTimes(calleeFunc);
//

function jsReturnFunc(){
    var nameTag = document.querySelector("#name");
    var pTag = document.querySelector("#p7");
    //pTag.innerHTML = nameTag.value;
    return function(){
        pTag.innerHTML = nameTag.value;
    }();  // 익명함수만 적어놓으면 실행이 안됨. 그래서 즉시실행함수 ()를 넣음.
}