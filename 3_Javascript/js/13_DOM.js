// Node 확인하기
document.getElementById("btn1").addEventListener("click",function(){
    // 부모
    // 요소.parentNode : 요소의 부모 노드를 탐색해서 반환 

    // 지식
    // 요소.childNodes : 요소의 자식 노드를 모두 반환(NodeList 형태)
    // 요소.firstChild : 첫 번째 자식 노드 탐색해 반환
    // 요소.lastChild : 마지막 자식 노드 탐색해 반환
    // 요소.childNodes[인덱스] : 인덱스 번째 자식 노드를 탐색해서 반환

    // 형제
    // 요소.previousSibling : 요소의 이전 형제 노드를 반환
    // 요소.nextSibling : 요소의 다음 형제 노드를 반환 

    // #test의 자식 노드를 모두 얻어와서 확인
    const testNodeList = document.getElementById("test").childNodes;

    console.log(testNodeList);

    // 노드 탐색
    const li1 =  document.getElementById("li1");
    console.log(li1.parentElement); // 부모 노드 탐색 (ul#test)

    // #li1의 부모의 배경색을 orange로 변경 
    li1.parentNode.style.backgroundColor ="orange";

    //#li1의 부모 노드의 마지막 부분에 "ABCD" 라는 text node 추가 
    //요소.append(요소 또는 노드)  : 마지막 자식으로 추가(덧붙이다.)
    li1.parentNode.append("ABCD");

    console.log("li1.parentNode : " + li1.parentNode + " ?? " + document.getElementById("li1").parentNode.nodeValue);

    console.log(li1.parentNode);
    const test = document.getElementById("test");
    // #test의 첫번째 자식 노드 찾기
    console.log(test.firstChild);

    // #test의 마지막 자식 노드 찾기
    console.log(test.lastChild);

    // #test의 자식 노드 중 5번 인덱스 노드 찾기
    console.log(test.childNodes[5]);

    // #test의 자식 노드 중 5번 인덱스 노드의 마지막 자식으로 "ZZZ" 추가하기 
    test.childNodes[5].append("ZZZ");

    // #test의 자식 노드 중 인덱스의 이전 형제 노드
    console.log(test.childNodes[5].nextSibling); // 

    // #test의 자식 노드 중 5번 인덱스의 다음 형제 노드
    console.log(test.childNodes[5].nextSibling); // 6번

    //
})



