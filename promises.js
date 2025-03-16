const checkLicense =(age)=>
{
    return new Promise((resolve,reject)=>
    {
        
    setTimeout(()=>
    {
        if(age>18)
        {
            resolve("Your are 18+ you can drive bike")
        }
        else
        {
            reject("You cannot drive bike you are under 18")
        }
    },1000)
})
}
const sucess=(msg)=>
{
    console.log(`Sucess: ${msg}`)
}
const failure=(err)=>
{
    console.log(`Error: ${err}`)
}
const send=()=>
{
    console.log("Alright You can leave!")
}
console.log("I started my bike going...")
checkLicense(19).then(sucess,failure).finally(send)
console.log("Ah Shitt police ")
console.log("hey take the licence!")

console.log("Promise API")

console.log("promise.race")
const promise = new Promise((resolve,reject)=>{
    return setTimeout(()=>resolve("Im promize 1"),1100)})
const promise1 =new Promise((resolve,reject)=>{
    setTimeout(()=>{
        return reject("Im second promise")
    },1000)
})
const promise3 =Promise.reject("Im rejected promise 3")
Promise.race([promise,promise1]).then((msg)=>console.log(msg)).catch((err)=>console.error(err)).finally(()=>console.log("Bye race complete"))
Promise.allSettled([promise,promise1,promise3]).then((msg)=>console.log(msg)).catch((err)=>console.error(err)).finally(()=>console.log("promise.allsettled() completed"))
Promise.any([promise,promise1,promise3]).then((msg)=>console.log(msg)).catch((err)=>console.log(err)).finally(()=>console.log("promise.any() completed!!"))