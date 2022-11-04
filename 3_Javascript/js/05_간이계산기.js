const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const span1 = document.getElementsByTagName("span");
let result;

function plus(){
    if(input1.value !="" && input2.value !=""){
        result = (Number)(input1.value) + (Number)(input2.value);
        span1[0].innerText = result;
    }else{
        alert("숫자를 입력하세요");
    }

}

function minus(){
    result = (Number)(input1.value) - (Number)(input2.value);
    span1[0].innerText = result;
}
function mul(){
    result = (Number)(input1.value) * (Number)(input2.value);
    span1[0].innerText = result;

}
function div(){
    result = (Number)(input1.value) / (Number)(input2.value);
    span1[0].innerText = result;
}
function rem(){
    result = (Number)(input1.value) % (Number)(input2.value);
    span1[0].innerText = result;
}

// function tol(op){
//     const n1 = (Number)(input1.value);
//     const n2 = (Number)(input2.value);
//     switch(op){
//     case '+' : span1[0].innerText = n1 + n2; break;
//     case '-' : span1[0].innerText = n1 - n2; break;
//     case '*' : span1[0].innerText = n1 * n2; break;
//     case '/' : span1[0].innerText = n1 / n2; break;
//     case '%' : span1[0].innerText = n1 % n2; break;
//     }

// }

function tol(clicked){
    //console.log(clicked) //<button onclick="tol(this)">+</button> 
    const n1 = (Number)(input1.value);
    const n2 = (Number)(input2.value);
    const idd = clicked.innerText;
    switch(idd){
        case '+' : span1[0].innerText = n1 + n2; break;
        case '-' : span1[0].innerText = n1 - n2; break;
        case '*' : span1[0].innerText = n1 * n2; break;
        case '/' : span1[0].innerText = n1 / n2; break;
        case '%' : span1[0].innerText = n1 % n2; break;
    }
}