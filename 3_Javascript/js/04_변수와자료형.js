var str = " JS 코드를 함수가 아닌 "
        + " JS 파일 또는 script 태그 내부에 바로 작성하면 "
        + " HTML 랜더링 시 바로 수행된다.";

console.log(str);

//변수 선언 위치에 따른 구분 
var num1 = 100; // 전역 변수
num2 = 200;     // 전역 변수 

console.log("num1 : "+num1);
console.log("num2 : "+num2);

function test(){
    var num3 = 300; // function 지역 변수 
    num4 = 400;     // 전역 변수 

    console.log("함수 내부 num3 : " + num3);
    console.log("함수 내부 num4 : " + num4);

    if(num3 == 300){
        var num5 = 500;
        num6 = 600;
    }

    console.log("if문 종료 후 num5 : " + num5); // function 지역 변수 
    console.log("if문 종료 후 num6 : " + num6); // 전역 변수 
}

test(); //함수 호출

//console.log("함수 외부 num3 : " + num3); // num3 is not defined
//함수 종료 후에는 사용 불가
//*** script 언어는 중간에 에러가 발생하면 해석을 멈춤 ***
console.log("함수 외부 num4 : " + num4); // 전역 변수 //함수 종료 후에도 사용 가능 

//console.log("function 종료 후 num5 : " + num5); // function 지역 변수 
// num5 is not defined
console.log("function 종료 후 num6 : " + num6); // 전역 변수 

// var 변수명 중복 확인
var num1 = 999;
console.log("var num1 중복 확인 : " + num1);

//num5;
//console.log("var num5 중복 확인 : " + num5);


// 자료형 확인 (+ 변수 선언 방법)
function typeTest(){

    let temp1 = 100;

    //let temp1 = 200; 변수명 중복 X //블록 범위 변수 'temp1'을(를) 다시 선언할 수 없습니다.

    if(temp1 == 100){
        let temp2 = 200;
        const temp3 = 300;
        //temp3 = 400; //Assignment to constant variable at typeTest
    }
    console.log(temp1);
    //onsole.log(temp2); //onsole is not defined
    //onsole.log(temp3); //onsole is not defined


    // -----------------------------------------------------------------------
    // 자료형 확인 
    const typeBox = document.getElementById("typeBox");

    typeBox.innerHTML =""; // typeBox 요소 내부의 내용을 빈 문자열로 바꿔라
                            // == 내부 내용 삭제
    

    let name;
    typeBox.innerHTML += " name : " + name + " / " + typeof name + "<br>";

    name ="홍길동"; // undefined -> string
    //const name2; // 상수는 선언과 동시에 초기화가 필수 값 -- 대입을 해주지 않아 에러
    // typeof 변수명 : 해당 변수의 자료형을 반환하는 연산자
    typeBox.innerHTML += " name : " + name + " / " + typeof name + "<br><br>";

    let name1;
    typeBox.innerHTML += " name1 : " + name1 + " / " + typeof name1+ "<br><br><hr>";

    //number
    const age = 20;
    const height = 178.9;
    typeBox.innerHTML += " age : " + age + " / " + typeof age + "<br>";
    typeBox.innerHTML += " height : " + height + " / " + typeof height + "<br><br><hr>";

    //boolean
    const isTrue = true;
    typeBox.innerHTML += " isTrue : " + isTrue + " / " + typeof isTrue + "<br><br><hr>";

    //object(배열, JS객체)

    // 배열 선언과 동시에 초기화
    // (Java)
    // int[] arr = {10, 20, 30, 40, 50}

    // JS([] 사용)
    const arr = [10, 20, 30, 40, 40];
    
    typeBox.innerHTML += " arr : " + arr + " / " + typeof arr + "<br><br><hr>";

    for(let i= 0; i < arr.length; i++){
        typeBox.innerHTML += "<br>arr[" + i +"]" +  arr[i];
    }

    // ** JS 객체 **
    // - K:V 쌍으로 이루어짐(Map 형식)
    // - Key는 무조건 String
    // - 리터럴 표기법 : {}

    // const user = {"K":V ,"K":V};

    const user = {"K":"V" ,"id":"user01" , "pw":"pass01", "a":arr};

    typeBox.innerHTML += "<hr><br> user : " + user + " / " + typeof user + "<br><br><hr>";

    console.log(user);

    //객체에 저장된 값 출력 
    typeBox.innerHTML += "<br>user.K : " + user.K; 
    typeBox.innerHTML += "<br>user.id : " + user.id; 
    typeBox.innerHTML += "<br>user.pw : " + user.pw; 
    typeBox.innerHTML += "<br>user.a : " + user.a; 
    typeBox.innerHTML += "<br>user.a[2] : " + user.a[2]+ "<br><br><hr>"; 

    //function
    const fnSun= function(n1, n2){ //익명 함수
        return n1 +n2;
    }

    //함수명만 작성하는 경우 -> 함수에 작성된 코드 자체가 반환
    typeBox.innerHTML += " arr : " + fnSun + " / " + typeof fnSun + "<br><br><hr>";
    // function(n1, n2){ //익명 함수
    //     return n1 +n2;
    // }  그대로 출력


    //함수명(매개변수) == 함수 호출(함수 코드가 수행됨)
    typeBox.innerHTML += " arr : " + fnSun(1,3) + " / " + typeof fnSun(1,3) + "<br><br><hr>";
    
    //함수명(매개변수) == 함수 호출(함수 코드가 수행됨)
    typeBox.innerHTML += " arr : " + fnSun("dd","fdsf") + " / " + typeof fnSun("dd","fdsf") + "<br><br><hr>";

    // 2) 함수를 매개변수로 전달하는 형태

    function plusFn(num, fn){
        // num : number 
        // fn : function
        return num +fn();
    }

    const result = plusFn(100, function(){
        return 30 -10;
    })

    typeBox.innerHTML += "result : " + result + " / " + typeof result + "<br><br><hr>";


}