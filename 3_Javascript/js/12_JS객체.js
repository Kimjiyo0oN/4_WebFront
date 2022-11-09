//객체 
document.getElementById("btn1").addEventListener("click",function(){
    // {} 객체 생성 및 다루기

    // ** (중요) **
    // JS 객체의 key는 무조건 string (묵시적으로 string)
    // -> key 작성 시 "",'', (따옴표 X)든 모두 string으로 인식

    const brand ='스타벅스';
    const product = {
        "pName" : "텀블러",
        'brand' : "투썸플레이스",
        color : ["red","black","silver"],
        price : 30000,

        'information': function(){ //객체의 기능
            const brand = "메가커피"; //함수 안에 지역변수가 우선순위
            
            console.log(brand); //전역변수 지역변수가 있으면 지역변수가 우선순위!!! 
            // 객체 내부 함수에서 변수명을 작성하면 
            // 해당 객체의 변수(key)가 아닌
            // 전역변수가 선택된다.
            // 왜? 같은 객체의 변수(key)를 선택하는 방법이 별도 존재해서

            console.log(this.brand);
            //** 객체 내부에서 this == 현재 객체 **
            //-- 함수 안의 범위가 아니고 !!!!!!!**객체 내부**에서 this!!!!!!!
        }
    }

    console.log(product);

    

    console.log(product)

    //객체 기능 호출하기
    product.information()

    //객체가 가지고 있는 값 출력하기
    const div1 = document.getElementById("div1");

    div1.innerHTML = ""; //이전 내용 모두 삭제

    // 객체의 값을 얻어오거나 대입하는 방법
    // 1) 얻어오기 : 객체명.key 또는 
    //              객체명['key']

    // 2) 대입하기 : 객체명.key = 값; 
    //              객체명['key'] = 값;

    div1.innerHTML += "product.pName : " + product.pName + "<br>";
    div1.innerHTML += "product.brand : " + product.brand + "<br>";
    div1.innerHTML += "product.color : " + product.color + "<br>";
    div1.innerHTML += "product.price : " + product.price + "<br>";
    div1.innerHTML += "product.information : " + product.information + "<br>";
    div1.innerHTML += "<hr>";

    // product.price 값 변경 
    product.price = 25000;
    div1.innerHTML += "product.price : " + product.price + "<br>";
    div1.innerHTML += "<hr>";

    // JS 객체에 없는 key에 값 대입하기!
    product.capacity = "550ml";
    console.log(product);
    div1.innerHTML += "product.capacity : " + product.capacity + "<br>";
    div1.innerHTML += "<hr>";


    // const obj1 = {};
    // obj1.a =10;
    // obj1.b =20;
    // delete obj1.b;
    // console.log(obj1);

    // 객체의 key 제거방법
    // -> delete 객체변수명.key


    div1.innerHTML += "product['pName','brand','color','price'] : " + product['pName','brand','price','color'] + "<br>"
    // 위에 코드는 제일 맨 마지막키의 값을 들고 옴
    div1.innerHTML += "<hr>";

    // 객체명['key']방법으로
    // 객체가 가지고 있는 모든 값 출력하기
    // -> for in 구문(객체 전용 for문)

    div1.innerHTML += "product['capacity'] : " + product['capacity'] + "<br>";
    div1.innerHTML += "<hr>";

    //for(let key in 객체명) : 매 바퀴마다 객체의 k를 하나씩 얻어와
    //                       key 변수에 저장
    for(let key in product){
        //객체의 K는 모두 string == 'pName','price'
        div1.innerHTML += product[key] + "<br>";
    } 
    


});


//생성자 함수 
document.getElementById("btn2").addEventListener("click",function(){
    const div2 =document.getElementById("div2");

    const stdList = [];

    stdList.push(new Student(1,2,"홍길동"));
    stdList.push(new Student(2,1,"이길동"));
    stdList.push(new Student(3,3,"회언더"));
    stdList.push(new Student(3,4,"가언아"));

    console.log(stdList);

    div2.innerHTML = "";
    // for of : 배열/컬렉션 요소 반복 접근용 for문
    for(let std of stdList){
        // for in : 객체의 키 반복 접근용 for문
        for(let key in std){

            // std[key]의 자료형이 'function'이면 실행 후 출력
            if(typeof std[key] == 'function'){
                div2.innerHTML += key + " : " + std[key]() + "<br>"
            }else{
                div2.innerHTML += key + " : " + std[key] + "<br>"
            }   
        }

        div2.innerHTML += "<hr>";
    }
});

// 1. 생성자 함수 정의 : 생성자 함수의 시작은 반드시 대문자!!!!!!!!!!!!!!!!!!!!!!! 
function Student(grade, ban, name){
    // JS함수의 매개변수는 let,const,var를 적지 않음!
    //-> 안 적어도 해당 함수의 지역변수로 취급 

    //속성
    this.grade = grade;
    // 매개변수 grade값을 생성되는 객체의 grade에 대입
    this.ban = ban;
    this.name = name;

    // 생성자 함수에서의 this
    // == new 연산자를 통해 만들어지는 객체

    //기능
    this.introduce = function(){
        return this.grade + "학년 " + this.ban + "반 " + this.name;
    }


    this.talk = "정말 학원에서 탈출하고 싶다. 놀러가고 싶다. 아무것도 하기 싫어"
    //const str1 = new Student(1, 2, "김지윤");
    //str1
    //Student {grade: 1, ban: 2, name: '김지윤', talk: '정말 학원에서 탈출하고 싶다. 놀러가고 싶다. 아무것도 하기 싫어', introduce: ƒ}
    //str1.introduce();
    //'1학년 2반 김지윤'
}

//JSON
document.getElementById("btn3").addEventListener("click",function(){
    //JSON.stringify(JS객체) : JS객체 -> JSON문자열 변환
    //JSON.parse(JSON문자열) : JSON문자열 -> JS 객체 변환

    const std = new Student(5,7,"오칠이");
    console.log(std); //객체
    console.log(JSON.stringify(std)); //객체 -> JSON 변환

    // ** JSON 변환 시 객체의 기능은 포함하지 않는다!! **
    // -> JSON은 데이터 전달에 특화된 형태

    const member = '{"memberId":"user01","memberPw":"pass01","age":20}';

    console.log(member); //JSON 문자열 
    console.log(JSON.parse(member)); // JSON -> 객체
})