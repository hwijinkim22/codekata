function solution(box, n) {
    const DiceWidth = Math.floor(box[0] / n);
    const DiceLength = Math.floor(box[1] / n);
    const DiceHeight = Math.floor(box[2] / n );
    
    let diceNum = DiceWidth * DiceLength * DiceHeight;
    return diceNum;
}
console.log(solution[10,5,4], 3)