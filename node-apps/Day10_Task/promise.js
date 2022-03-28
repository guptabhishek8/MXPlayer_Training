var promise = new Promise((resolve, reject) =>{
    const marks = 75;
    if(marks>=70){
        resolve("You are hired");
    }
    reject("You are rejected");
})

promise.then((res)=>{console.log(res)}).catch((err)=>{
    console.log(err);
})