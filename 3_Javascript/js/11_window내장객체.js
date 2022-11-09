//window.setTimeout(함수, 지연시간(ms))

const btn1 = document.getElementById("btn1");

btn1.addEventListener("click",function(){

    // 이벤트 핸들러에서 this == 이벤트가 발생한 html 요소

    // 0초(클릭 하자마자)
    this.style.backgroundColor ="red";

    // 3초 후 orange로 변경
    window.setTimeout(function(){

        // window.setTimeout()에서 this == window 객체 

        console.log(this);
        btn1.style.backgroundColor ="orange";

    }, 3000)

    console.log("중간 출력");

    // 3초 후 orange로 변경 
    // 코드 해석은 순서대로 실행되지만  함수 진행 후 3초이니까 늦게 일어진 뒤에 함수로 실행해서 블루색  
    window.setTimeout(function(){

        // window.setTimeout()에서 this == window 객체 

        console.log(this);
        btn1.style.backgroundColor ="blue";

    }, 3000)

    // 함수가 실행했을 때부터 6초 후 
    window.setTimeout(function(){

        // window.setTimeout()에서 this == window 객체 

        console.log(this);
        btn1.style.backgroundColor ="grenn";

    }, 6000)

    // 함수가 실행했을 때부터 9초 후 
    window.setTimeout(function(){

        // window.setTimeout()에서 this == window 객체 

        console.log(this);
        btn1.style.backgroundColor ="pink";

    }, 9000)
})

//.getFullYears()
// #div에 현재 시간을 반환 하는 함수
function currentTime(){
    const now = new Date(); // 현재 시간 정보를 저장하고 있는 객체 생성

    let hour = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();

    // 얻어온 시간 값이 10 미만일 경우 앞에 0 추가
    if(hour < 10) hour = "0" + hour;
    if(min < 10) min = "0" + min;
    if(sec < sec) hour = "0" + sec;

    return hour + " : " + min + " : " + sec;
}


const clock = document.getElementById("clock");
//페이지가 로딩되자마자 현재시간을 출력하도록 하고 싶을때
clock.innerText = currentTime();

//#clock에 1초마다 현재 시간을 출력하도록 하는 코드 작성
const interval= window.setInterval(function(){
    clock.innerText = currentTime();
    console.log(1);
},1000);

//window.clearInterval(setInterval()이 저장된 변수)
document.getElementById("stop").addEventListener("click",function(){
    window.clearInterval(interval);
})


