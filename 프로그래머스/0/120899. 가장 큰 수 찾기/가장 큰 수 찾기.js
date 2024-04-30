function solution(array) {
    let answer = [];
    let Mathmax = 0;
    
    for(let i = 0; i < array.length; i++) {
        if (array[i] > Mathmax) {
            Mathmax = array[i];
        }
    }
    
    for(let j = 0; j < array.length; j++) {
        if (array[j] === Mathmax) {
            answer.push(Mathmax);
            answer.push(j);
        }
    }
    
    return answer;
}
