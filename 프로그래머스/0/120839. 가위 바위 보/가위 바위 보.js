function solution(rsp) {
    let result = "";  // 결과를 저장하는 변수
    for (let i = 0; i < rsp.length; i++) {
        const curr = rsp[i];  // 현재 문자를 가리키는 변수
        if (curr === "2") {
            result += "0"; 
        } else if (curr === "0") {
            result += "5";
        } else if (curr === "5") {
            result += "2";
        }
    }
    return result;  // 모든 문자 처리 후 결과 반환
}

console.log(solution("502"));
