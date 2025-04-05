// let janji = new Promise((resolve, reject)=>{
//     try{
//         resolve("Fulfilled")
//     }catch(err){
//         reject(err)
//     }
// })

// janji.then(result => {
//     console.log(result)
// }).catch(err => {
//     console.log(err)
// })

function janjiManis(){
    return new Promise((resolve, reject) => {
        try{
            resolve("Janji manis terpenuhi")
        } catch(err){
            reject(err)
        }
    })
}

janjiManis()
.then(result => {
    console.log(result)
})
.catch(err => {
    console.log(err)
})