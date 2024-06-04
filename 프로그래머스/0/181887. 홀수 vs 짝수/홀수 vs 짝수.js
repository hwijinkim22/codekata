function solution(num_list) {
    let evenNumber = 0;
    let oddNumber = 0;
    
    for(let i = 0; i < num_list.length; i++) {
        if((i + 1) % 2 === 0) {
            evenNumber += num_list[i]
        } else {
            oddNumber += num_list[i]
        };
    }
    return evenNumber > oddNumber ? evenNumber : oddNumber;
}
