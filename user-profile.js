const userInfo = (userId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId)
                resolve({ userName: "sudo", userEmail: "sudo7@gmail.com" })
            else
                reject(`No user Found against Id: ${userId}`)
        }, 1000)
    })
}
const userPost = (userId) => {
    return new Promise((resolve, reject) =>
        setTimeout(() => {
            if (userId)
                resolve([{ title: "Learn javascript", content: "Hey everyone learn javascript its very fun to learn" },
                { title: "Hail Linux", content: "Windows sucks Linux is superior than windows fuck windows hail linux and I use arch btw" }])
        }, 1000))
}
const userComment = (userId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId)
                resolve([{ comment: "Say My Name,", timestamp: Date.now() },
                { comment: "Im not the one who is danger skyler, Im the danger, Im the one Who knocks", timestamp: Date.now() },
                { comment: "Better call saul!", timestamp: Date.now() },
                {comment:"Barotta Naley athu Maran Barotta Kadai than",timestamp:Date.now().valueOf()}
            ])
        }, 1000)
    })
}
const fetchAllData=(userid)=>
{
    return Promise.all([userInfo(userid),userPost(userid),userComment(userid)])
    .then(([userInfo,userPost,userComment])=>{return{userInfo,userPost,userComment}
}).catch((failure)=>failure)
}   
const fetchAllData1 = async (userId)=>
{
    const userinfo = await userInfo(userId);
    const userpost = await userPost(userId);
    const usercomment= await userComment(userId);
    console.log(userinfo,userpost,usercomment);
    return {userInfo:userinfo,userPost:userpost,userComment:usercomment}
    
}

/*const fetchAllData1 = (userId)=>
{
    return Promise.all(([userInfo(userId),userPost(userId),userComment(userId)]))
    .then((response)=>response)
}*/
/*function success1([userInfo,userContent,[comment,timestamp]])
{
    console.log(userContent)
    document.querySelector('#user-name').textContent=userInfo.userName
    document.querySelector('#user-email').textContent=userInfo.userEmail
    //fetching userPost
    const postTemplate =userContent.map((post)=>
                ` <div class="border p-4 rounded-lg">
                    <h4 class="text-lg font-semibold">${post.title}</h4>
                    <p class="text-gray-600 mt-2">${post.content}</p>
                    <div class="text-sm text-gray-400 mt-2">Posted on December 20, 2024</div>
            `).join('')
    document.querySelector('#posts').innerHTML=postTemplate;
}*/
function success({userInfo,userPost,userComment})
{
    console.log(userInfo);
    console.log(userPost)
    console.log(userComment)
    //fetchin usery details
    document.querySelector('#user-name').textContent=userInfo.userName
    document.querySelector('#user-email').textContent=userInfo.userEmail
    //fetching userPost
    const postTemplate = userPost.map((post)=>
                ` <div class="border p-4 rounded-lg">
                    <h4 class="text-lg font-semibold">${post.title}</h4>
                    <p class="text-gray-600 mt-2">${post.content}</p>
                    <div class="text-sm text-gray-400 mt-2">Posted on December 20, 2024</div>
                </div>`).join('')
    document.querySelector('#posts').innerHTML=postTemplate;
    //fetching user comments
    const commentTemplate=userComment.map((comment)=>
    
       ` <div class="border p-4 rounded-lg">
        <div class="flex items-center space-x-4">
            <img src="https://dummyimage.com/40" alt="User Avatar"
                class="w-10 h-10 rounded-full object-cover">
            <div>
                <p class="font-semibold"id='comment'>User</p>
                <p class="text-sm text-gray-500"id='timestamp'>${comment.timestamp}December 19, 2024</p>
            </div>
        </div>
        <p class="mt-2 text-gray-600">${comment.comment}.</p>
    </div>` 
    ).join('')
    document.querySelector('#comments').innerHTML=commentTemplate;
}
function failure(reason)
{
    console.log(reason);
    document.body.innerHTML='<h1>'+'Some error '+'</h1>'
}
//fetchAllData(1).then(success).catch(failure).finally(finalMsg)
function finalMsg()
{
    console.log("Hey I finished Execution (●'◡'●)")
}
console.log("fetching data!!!")

fetchAllData1(1).then(success).catch(failure)
//console.log(fetchAllData1(1))