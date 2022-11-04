
// innerHTML로 읽어오기 (요소 내부 내용(태그,속성,내용)을 얻어와 문자열로 반환)
function getInnerHTML1(){
    
    // HTML 문서 내에서 id 속성 값이 "test1"인 요소를 얻어와
    // 상수형 변수 t1에 저장
    const t1 = document.getElementById("test1");

    // 브라우저 콘솔에 출력
    console.log(t1.innerHTML);

}

// innerHTML로 변경하기
function setInnerHTML1(){
    const t1 = document.getElementById("test1");

    t1.innerHTML = "<b class='red'>변경된 내용입니다.</b>";
    
}

// innerHTML 응용
function add(){
    // 1) id 속성값이 "area1"인 요소를 얻어와 변수에 저장
    const area1 = document.getElementById("area1");
    const area2 = "<div class='area1-box'></div>";
    /* area1.innerHTML += area2; */
    /* area1.innerHTML += "<div class='area1-box'></div>"; */
    area1.innerHTML += document.getElementsByClassName("area1-box")[0].outerHTML;
}

const t2 = document.getElementById("test2");

// InnerText로 읽어오기(내용만 얻어옴)
function getInnerText1(){
    // clg 자동 완성 -> console.log() (단, JS ES6 code snippet 필요)
    console.log(t2.innerText);
    console.log(t2.innerHTML);
}

// InnerText로 변경하기
function setInnerText1(){
    t2.innerText = "<p class='red'>변경된 내용입니다.</p>";
}

// confirm
function fnConfirm(){
    // console.log(window.confirm("테스트")); //true / false 반환 확인
    // 조건문(if, switch) 작성법은 jave와 동일

    if(confirm("배경색을 분홍색으로 바꾸시겠습니까?")){ //확인
        //document.getElementById("confirmTest").style.backgroundColor="pink";
        document.getElementById("confirmTest").style.border="yellow";
    }else{ //취소
        document.getElementById("confirmTest").style.backgroundColor="gray";
    }
}

//window.prompt("내용")
function fnPrompt(){
    const input = prompt("변경할 버튼명을 입력하세요");
                // 입력할 값 or null

    if(input != null){
        document.getElementById("promptTest").innerText = input;
    }else{
        alert("취소되었습니다.")
    }

}

