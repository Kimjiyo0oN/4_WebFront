const btn1 = document.getElementById("btn1")

btn1.addEventListener("click", function(){
    const arr1 = new Array();
    const arr2 = new Array(3);
    const arr3 = [];
    const arr4 = ['사과','딸기','바나나'];

    console.log(arr1);
    console.log(arr2);
    console.log(arr3);
    console.log(arr4);

    // 배열에 존재하지 않는 인덱스에 값 대입
    //-> 자동으로 추가되면서 길이 증가
    arr1[0] = "김밥"; 
    arr1[1] = 5000; 
    arr1[2] = true; 

    //중간 인덱스 건너뛰면, 건너 뛴 부분은 empty로 남음
    // 비어있는 인덱스 말고도 마찬가지
    arr1[7] = "참치김밥"; 
    arr1[8] = "오늘 뭐먹지지요"; 
    console.log(arr1);
    // (9) ['김밥', 5000, true, 비어 있음 × 4, '참치김밥', '오늘 뭐먹지지요']
    // 0: "김밥"
    // 1: 5000
    // 2: true
    // 7: "참치김밥"
    // 8: "오늘 뭐먹지지요"
    // length: 9
    // [[Prototype]]: Array(0)

    //for문으로 배열요소 반복 접근하기 
    //1.일반 for문 - 배열,컬렉션
    for(let r =0; r < arr4.length; r++){
        console.log("arr4["+r+"]"+ arr4[r]);
    }

    //2.배열.forEach(function(item,index){반복수행 코드}) - 배열에서만 쓸수 있음 (컬렉션에는 X)
    //-item : 현재 접근중인 요소
    //-index : 현재 인덱스

    //* 여러 요소를 얻어온 경우(HTMLCollection, NodeList)는 
    // 배열이 아니므로 forEach()문을 쓸 수 없다!
    arr4.forEach(function(a,i){
        console.log(i + " : " + a)
    });
    //0 : 사과
    //1 : 딸기
    //2 : 바나나

    //3. for(item of 배열(또는 컬렉션)){} - 배열, 컬렉션 
    //       (Symbol.iterator가 존재하는 객체에 사용가능)
    // == Java 향상된 for문가 비슷
    for(let item of arr4){
        console.log(item);
    }

    //document.getElementsByTagName("li")
    //document.querySelectorAll("#test >li");
    // li 태그에 작성된 값 얻어와서 합 구하기
    // const list = document.getElementsByTagName("li"); //HTMLCollection
    const list = document.querySelectorAll("#test >li"); //NodeList

    let sum =0;
    for(let item of list){
        sum += Number(item.innerText);
                // 문자열 이라서 숫자로 변환하는 작업 필요
    }
    console.log("sum : " + sum);

    //4. for(let key in 객체) - JS객체용 for문

})


//배열 관련 함수 확인
document.getElementById("btn2").addEventListener("click",function(){
    //비어 있는 배열 생성
    const arr = []; // == new Array()

    //배열.push(값) : 배열 마지막 요소로 추가 
    arr.push("초밥");
    arr.push("우육면");
    arr.push("쌀국수");
    arr.push("삼겹살");

    //배열.toString() : 배열 요소 사이 "," 추가한 문자열로 반환
    console.log(arr.toString()); // .toString() 생략 가능

    //배열.pop() : 배열의 마지막 요소를 꺼내와 반환
    const temp = arr.pop(); // 마지막 요소("삼겹살")를 꺼내와 temp 변수에 대입

    console.log("arr : "+ arr.toString());
    console.log("temp : "+ temp);

    //배열.indexOf("값") : 일치하는 값을 가진 요소와 index를 반환 없으면 -1 반환
    console.log("초밥 인덱스 : " + arr.indexOf("초밥"));



    console.log("갈비가 arr에 포함되어 있는가? : " + (arr.indexOf("갈비") != -1 )); // 갈비는 포함되어 있지 않기 때문에 -1를 반환  -1 != -1 는 false

    //배열.sort() : 배열내 요소를 오름차순으로 정렬(문자열 기준)
    console.log(arr.sort());
    console.log("================");
    //숫자 정렬의 문제점과 해결 방법
    const numArr = [5,3,2,10,1]; // -> 오름차순 정렬 : 1,2,3,4,10
    //console.log(numArr.sort()); //문자열 기준 정렬 : 1, 10, 2, 3, 5  / 1, 100, 2  맨앞 숫자로 따짐
    console.log(numArr.sort(function(a,b){return a-b;}));
    // -> 숫자 기준 정렬 : 1,2,3,5,10
    console.log("================");
    //*  sort() 함수는 원본 배열의 순서를 정렬함
    // -> 원본 훼손 발생(깊은 복사를 이용해 해결 가능 for문 주소랑 + 데이터까지 복사) - 얇은 복사는 주소만 복사
    console.log(numArr);

    // 배열.join("구분자")
    console.log(numArr.join("//"));

});

//로또 번호 생성 
document.getElementById("btn3").addEventListener("click",function(){
    const lotto = []; //빈 배열 
    while(lotto.length < 6){ //  배열 요소가 6개 미만이면 반복
        const ran = Math.floor(Math.random() * 45 +1 ); //1~45 난수
        if(lotto.indexOf(ran)== -1){ //배열에 난수 값이 없다면
            lotto.push(ran); //마지막 요소로 추가

        }

    }
    lotto.sort(function(a,b){return a-b;});
    console.log("로또번호 : " + lotto);

})