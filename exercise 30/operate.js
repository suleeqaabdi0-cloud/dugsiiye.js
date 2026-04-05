function operate(a,b ,callback){
    return  callback(a,b)
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}
console.log("multiplication" ,operate(5,3,  multiply))
console.log("divisionn" ,operate(5,3, divide))