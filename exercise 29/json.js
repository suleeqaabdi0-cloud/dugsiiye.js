const user = {
    id: 1,
    name: "osmoha",
    city: "mogadishu"
};

// const jsonString = JSON.stringify(user);
// console.log("JSON String:", jsonString);

// const parsedData = JSON.parse(jsonString);
// console.log("Parsed Object:", parsedData);
async function fetchData() {
    console.log("Start fetching data...");

    
    // const response = await fetch('data.json'); 
    const response = await fetch('https://jsonplaceholder.typicode.com/users'); 
    const data = await response.json(); 

    console.log("Fetched Data:", data);
   
}

fetchData();



