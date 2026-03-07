function fetchDatWithPromise(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const success = true;
            if (success){
                resolve("good point to fech data!");
            }else{
                reject("failed to fech data.");
            }
        }, 2000);
    })
}
  fetchDatWithPromise()
  .then(messege => console.log(messege))
  .catch(error =>console.error(error));
