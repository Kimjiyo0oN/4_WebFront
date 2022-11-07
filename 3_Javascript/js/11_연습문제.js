const inputId = document.getElementById("inputId");

const inputPw = document.getElementById("inputPw");
const inputPwConfirm = document.getElementById("inputPwConfirm");
const pwMessage =document.getElementById("pwMessage");

const inputName = document.getElementById("inputName");
const nameMessage = document.getElementById("nameMessage");

const button = document.querySelector(".btn-area > button:nth-of-type(2)");

//console.log(button);



//console.log(radio[0].checked);



inputId.addEventListener("change",function(){
    const regEx = /^[a-z]{1}[a-zA-Z0-9\-\_]{5,13}$/;
    if(regEx.test(this.value)){
        this.style.backgroundColor= "springgreen";
    }else{
        this.style.backgroundColor= "red";
        this.style.color ="white";
    }
});



inputPwConfirm.addEventListener("keyup",function(){
    if(inputPw.value.trim().length == 0){
        alert("비밀번호를 입력해주세요.");
        inputPwConfirm.value ="";
        inputPw.focus();
    }else{
        if(inputPw.value == inputPwConfirm.value){
            pwMessage.innerText = "비밀번호 일치"
            pwMessage.classList.remove("error");
            pwMessage.classList.add("confirm");

        }else{
            pwMessage.innerText = "비밀번호 불일치"
            pwMessage.classList.remove("confirm");
            pwMessage.classList.add("error");
        }


    }

});

inputPw.addEventListener("keyup",function(){
    if(inputPw.value == inputPwConfirm.value){
        pwMessage.innerText = "비밀번호 일치"
        pwMessage.classList.remove("error");
        pwMessage.classList.add("confirm");
    }else{
        pwMessage.innerText = "비밀번호 불일치"
        pwMessage.classList.remove("confirm");
        pwMessage.classList.add("error");
    }
});


inputName.addEventListener("input", function(){
    const regEx = /^[가-힣]{2,5}$/;
    if(regEx.test(this.value)){
        nameMessage.innerText ="정상입력";
        nameMessage.classList.remove("error");
        nameMessage.classList.add("confirm");
    }else{
        nameMessage.innerText ="한글만 입력하세요.";
        nameMessage.classList.remove("confirm");
        nameMessage.classList.add("error");
    }


});

/* const gender = document.getElementsByName("gender") */
const radio = document.querySelectorAll("input[type=radio]");
/* const gender = document.querySelector("input[name='gender':checked]"); */
const inputTel = document.getElementById("inputTel")
function validate(){
    const regEx = /^[0][0-9]{1,2}-[0-9]{3,4}-[0-9]{4}/;
    if(!radio[0].checked && !radio[1].checked){
        alert("성별을 선택해주세요");
        return false;
    }
    /* 
    if(gender == null){
        alert("성별을 선택해주세요");
        return false;
    } 
    */

    if(!regEx.test(inputTel.value)){
        alert("전화번호의 형식이 올바르지 않습니다");
        return false;
    }

    return true;
}