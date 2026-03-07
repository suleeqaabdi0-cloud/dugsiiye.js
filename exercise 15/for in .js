const people =[
    { name: "alice",age:25,city:"wonderland ---" },
    {name:"bob",age:30,city:"builderland --- "},
    
    {name:"charlie",age:35,city:"chocolate factory "}
]

console.log("properties and values of each person");

for (const person of people) { 
   console.log(`Name: ${person.name}, Age: ${person.age}, City: ${person.city}`);
}