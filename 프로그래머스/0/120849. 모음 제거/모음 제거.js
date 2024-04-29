function solution(my_string) {
    let vowel = "aeiou"
    let newStr = my_string.split('').filter((str)=>
    !vowel.includes(str)).join("");
    
    return newStr;
}