function sayHi()
{
    return Promise.resolve("say Hi");
}
console.log(sayHi())

const getUserbyId=(userId)=>
{
return new Promise((resolve,reject)=>
    {
        setTimeout(()=>{
            if(userId==1)
        {
              resolve({id:userId,name:"sudo"})
        }
        else
        {
            return resolve("No User Found")
        }
    },1000)
})
}
function getAllSubcriptions(userId)
{
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>{
            resolve([{netflix:999},{hotstar:1499},{jiocinema:999},{spotify:199}])
        },1000)
    })
}

//console.log(getUserbyId(1))
const calculatePrice=(subs)=>
{
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>
        {
            let price=0;
            subs.forEach((obj)=>price+=Object.values(obj)[0]
            )
            resolve(price)
        },1000)
        
    })
}
const asyncfunc = async (id)=>
{
    const userInfo = await getUserbyId(id)
    const userSubs = await getAllSubcriptions(id)
    const price = await calculatePrice(userSubs)
    console.log(userInfo,userSubs,price)
}
asyncfunc(1)
const arr =[{name:"suso"},{age:20},{sex:"Male"}]
arr.forEach((obj)=>console.log(obj))