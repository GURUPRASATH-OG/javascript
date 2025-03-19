const button = document.getElementById('inBtn')
const input = document.getElementById("user-input")
const output = document.getElementById('output')
button.addEventListener('click',()=>
    {
        document.getElementById('op').innerHTML+=`<li>${input.value}</li>`
        input.value=''   
        
    }
)
const submitbtn = document.getElementById('submit')
const form = document.getElementById('input-form')
const username = document.getElementById('user-name')
const userage = document.getElementById('user-age')
const list = document.getElementById('op')
console.log(form,userage,username)
form.onsubmit=()=>{
    const li = document.createElement('li')
    submitbtn.role='ADD';
    submitbtn.innerText='ADD';
    list.append(li);
    li.innerText=username.value;
    li.innerText=userage.value;
    console.log(username.value,userage.value)
    username.value='';
    userage.value='';
    li.onclick.remove(list)
}
