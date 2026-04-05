function fetchUserData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const success = true;
            if (success){
                resolve("that is grade!");
            }else{
                reject("failed to fech data.");
            }
        }, 2000);
    })
}
//  fetchUserData()
//   .then(messege => console.log(messege))
//   .catch(error =>console.error(error));

async function displayUserData(){
    try{
        const user = await fetchUserData();
        console.log(user)
    }
    catch(err){
        console.log(err)
    }
}
displayUserData();