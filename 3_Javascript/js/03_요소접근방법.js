// id 접근하기
function fnTest1(){


    // id가 div1인 요소를 얻어와 상수형 변수 div1에 저장
    const div1 = document.getElementById("div1");

    //접근한 요소의 배경색을 얻어와 변수에 저장
    const bgColor = div1.style.backgroundColor;

    if(bgColor == 'red'){
        div1.style.backgroundColor = "yellow";
    }else{
        div1.style.backgroundColor = "red";
    }
}

//class로 접근하기 
function fnTest2(){
    //요소 여러 개를 한번에 접근하는 경우 배열 형태로 반환됨
    const arr = document.getElementsByClassName("div2");

    console.log(arr[0]);
    console.log(arr[1]);
    console.log(arr[2]);

    arr[0].style.backgroundColor = "green";
    arr[1].style.backgroundColor = "yellow";
    arr[2].style.backgroundColor = "red";

    for(let i=0;i<arr.length;i++){
        arr[i].innerText = i + "번째 요소 입니다.";
    }

}


//태그명으로 접근하기
function fnTest3(){
    //문서 내에 존재하는 모든 li요소를 얻어와 배열 형식으로 반환
    const arr = document.getElementsByTagName("li");

    for(let i=0;i<arr.length;i++){
        const num = arr[i].innerText;
        arr[i].style.backgroundColor = "rgb(150,"+num+",730)";
    }

}

function fnTest4(){

    const text = document.getElementById("inputTest");


    //input 관련 태그에 작성된 값을 나타내는 속성
    // == value
    console.log(text); //<input type="text" id="inputTest">
    console.log(text.value);

    //input 요소에 작성된 값을 얻어와 alert로 출력
    alert(text.value);

    //input 요소에 ""(빈 문자열) 대입 == 값 삭제
    text.value ="";

}

function fnTest5(){
    //name 속성 값이 "hobby"인 요소
    const name = document.getElementsByName("hobby");


    console.log(name); 
    /* console.log(name.values); */

    for(let i =0; i < name.length; i++){
        console.log(name[i].value+"****");
        // .checked 속성
        // 해당 요소가 체크되엉 있다면 true / 아니면 false
        // (radio,checkbox 전용 속성)
        if(name[i].checked){
            console.log(name[i].value); 
        }

    } 

    let str = "";

    let count = 0; //체크 개수 카운트
    for(let i =0; i < name.length; i++){
        // .checked 속성
        // 해당 요소가 체크되엉 있다면 true / 아니면 false
        // (radio,checkbox 전용 속성)
        if(name[i].checked){
            str += name[i].value + " ";
            count++; // 1 증가
        }

    } 

    const result5= document.getElementById("result5");

    if(str !=""){ //체크가 된 경우
    /*  result5.innerText = str;
        result5.innerHTML += "<br><br>선택된 개수 : " + count; */
        result5.innerText = str;
        result5.innerHTML =result5.innerText + "<br><br>선택된 개수 : " + count;
    }else{
        result5.innerText = "선택된 취미가 없습니다." ;
    }    
}


//CSS 선택자로 접근하기

function fnTest6(){

    // id 속성 값이 "cssTest"인 요소를 1개 선택
    // (여러 요소가 선택된 경우 첫 번째 요소만 선택)
    if(document.querySelector("#cssTest").style.border == "3px solid green"){
        document.querySelector("#cssTest").style.border = "none";
        document.querySelector("#cssTest > div").style.backgroundColor = "white";
    }else{
        document.querySelector("#cssTest").style.border = "3px solid green";
        document.querySelector("#cssTest > div").style.backgroundColor = "gold";
    }
    
    //let 변수
    //선택자에 맞는 모든 요소를 선택해 배열 형식으로 반환 const 상수 라서 처음 지정한 값에서 변경할 수 없다
    // 상수는 변경할 수 없기 때문에 나중에 같은 이름을 사용해서 값이 변하는 걸 방지하기 위해서
    const arr = document.querySelectorAll("#cssTest > div");

    for(let i=0; i <arr.length; i++){
        arr[i].style.fontSize = "10px";
    }

}

let str10 = "";
function fnTest10(){
    const text = document.getElementById("inputTest10");
    const chatting_text = document.getElementById("chatting-bg");

    if(text.value.trim() !=""){
        chatting_text.innerHTML += "<p> <span>"+text.value+"</span> </p>";
        console.log(text.value);

        chatting_text.scrollTop = chatting_text.scrollHeight;
        
    }else{
        alert("채팅 내용을 입력해주세요");
    }

    text.value ="";

}

//엔터키가 입력되었을 때
function inputEnter1(){
    // 키보드 입력 과정
    // -키누름 -> keydown 이벤트 -> input 태그에 입력
    // -> keypress -> (손을 떼면) keyup 

    console.log(window.event.key);
    //keydown :모든 키가 눌렀을 때
    //keypress : 영어/숫자/특수문자/띄어쓰기가 눌러지고 있을 때
    // -> 꾹 누르고 있을 경우 연속적으로 함수가 호출되는 문제 발생
    // --> keyup 이용 (1회만 인식)
    if(window.event.key == "Enter"){
        //다른 함수 호출
        readValue();
    }

}

function readValue(){//입력된 값을 읽어들여 채팅

    //채팅과 관련된 요소 모두 얻어오기
    const bg =document.getElementById("chatting-bg");
    const input = document.querySelector("#inputTest10");

    // 채팅이 정상적으로 입력된 경우에만 출력
    if((input.value).trim() !=""){ //if((input.value).trim().length > 0){

        //채팅창에 입력된 값으로 채팅 추가
        bg.innerHTML +="<p> <span>"+input.value+"</span> </p>";

        // 스크롤을 제일 밑으로 내리기
        // 요소.scrollTop : 요소 내부 현재 스크롤의 위치
        // 요소.scrollTop = 위치 : 스크롤을 특정 위치로 이동
        // 요소.scrollHeight : 스크롤의 전체 높이 
        bg.scrollTop = bg.scrollHeight;

    }else{
        
        alert("채팅 내용을 입력해주세요");
    }
    input.value ="";

}



