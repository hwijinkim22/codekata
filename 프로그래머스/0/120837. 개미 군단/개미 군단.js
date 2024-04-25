function solution(hp) {
    let needAnt = 0;
    const generalAnt = Math.floor(hp / 5 )
    needAnt += generalAnt;
    hp -= generalAnt * 5
    
    const soldierAnt = Math.floor(hp / 3);
    needAnt += soldierAnt
    hp -= soldierAnt * 3
    
    const workAnt = Math.floor (hp / 1);
    needAnt += workAnt
    hp -= workAnt
    
    return needAnt;
}
solution(26);
