console.log("Jello world");
let os=
{
    name:"Arch",
    kernel:"6.1",
    specs:{
        cpu:"i5",
        ram:"16gb",
        gpu:"geforce 1650",
        "gpumemory":"4gb",

    }
    
}
console.log(os);
let sub = function(num1,num2)
{
    return num1-num2;
}
let result =sub(10,3);
console.log(result);

console.log("arrow keyword");
let arrow =(user)=>
{
    console.log("Hello "+ user);
    return 1;
}
console.log(arrow("sudo"));
let  add =(a,b)=> a+b;
console.log(add(4,3));

let laptop1 = {
    name:"tuf",
    cpu:"i5",
    ram:16,
    brand:"asus",
    sayhi: function(){ console.log("hello");},
    compare: function(compareto)
    {
        if(this.cpu>compareto.cpu)
            console.log(this);
        else
            console.log(compareto)
    }
}
let laptop2 = {
    name:"tuf",
    cpu:"i7",
    ram:32,
    brand:"asus",
    sayhi: function(){ console.log("hello");}
}
console.log(laptop1);
function comparelaptops(laptop1,laptop2)
{
    if(laptop1.ram>laptop2.ram)
        console.log(laptop1)
    else
        console.log(laptop2)
}
let monitor = 
{
    name:"GW1080p",
    brand:"Benq",
    resolution:1080,
    getspecs: function()
    {
        console.log(this.name,this.brand,this.resolution);
        return 1;
    }
}
console.log(monitor.getspecs());
comparelaptops(laptop1,laptop2);
laptop1.compare(laptop2);
function constructor(Name,age)
{
    this.name=Name;
    this.age=age;
    this.work=function(){console.log("doing work")}
}
let const1= new constructor("sudo",21);
const1.work();
let data = ['guru',12,{os:"linux"},function(){console.log("I use Arch Btw")}]
console.log(data[3]())
console.log(data)
let nums = [];
nums[0]=1;
nums[99]=99;
for (n in nums)
{
    console.log(nums[n])
}
for (let n of nums)
{

    console.log(n);
}
function variableargs(x,...y)
{
    console.log(x)
    console.log(y)
}
variableargs(1,2,3,4,5,6,7,8,9);
function outer()
{
    let a="global variable"
    console.log('outer');
    function inner()
    {
        let b="local variable"
        console.log("inner function:",a);
    }
    inner();
}
outer();
function outerfunction(x)
{
    function clojure(y)
    {
        console.log(x+y);
    }
    return clojure;
}
let clojoure = outerfunction(10);
console.log(clojoure)
clojoure(8);
//document.getElementById("container").innerHTML="hi";
const medicine=()=>
{
    console.log(`D: You will be alright! Take these Medicines`);
    document.getElementById("container").innerHTML+="D: You will be alright! Take these Medicines"+'<br>'
}

const callast=()=>
{
    setTimeout(medicine,3000)
}
const calltwo=(name,callast)=>
{
    console.log(`Hello ${name}, Im Doctor How can i help you?`)
    document.getElementById("container").innerHTML+=`Hello ${name}, Im Doctor How can i help you ?`
    callast()
}

const maincall=(name)=>
{    
    console.log(`U: Hello ${name}`)
    document.getElementById("container").innerHTML+=`Hello ${name}.`
    setTimeout(calltwo,1000,name,callast)
}
maincall("vijay")

const first =(callback2)=>
{
    setTimeout(()=>
    {
        console.log('running: first')
        ,callback2()
    },3000)
}

const second=()=>
{
    setTimeout((callbacklast)=>
        {
            console.log("running: second"),
            callbacklast()
        },3000)
}
const third=()=>
    {
        setTimeout(()=>
            {
                console.log("running: second")
            },3000)
    }
first(()=>second(()=>third()))


