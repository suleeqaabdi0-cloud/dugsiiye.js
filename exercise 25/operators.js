const numbers =[1,2,3];
const Allnumbres =[...numbers ,5,8,6]
console.log(Allnumbres)



function sum(...numbers){
    return numbers.reduce((total,sum)=>total*sum,1)
}
console.log(sum(20,90,65))