const waterGlasscontainer = document.querySelector('.water-glasses');
const progressText =document.querySelector('.progress-text')
const resetBtn = document.querySelector('.reset-water');
const addWaterBtn= document.querySelector('.add-water');
const goalPopup = document.querySelector('.popup');
const closePopupBtn = document.querySelector('.close-popup');
const goalSelect = document.querySelector('.goal-select');
//variables
let totalGlasses = parseInt(goalSelect.value);
let currentGlasses = 0;
function createGlassses()
{
    waterGlasscontainer.innerHTML='';
    for(let i=0; i<totalGlasses;i++)
    {
        const glass = document.createElement('div');
        glass.classList.add('glass');
        waterGlasscontainer.appendChild(glass);
    }
}
function updateTracker() 
{
    const glasses = document.querySelectorAll('.glass');
    console.log(glasses);
    glasses.forEach((glass,index)=>
    {
        if(index<currentGlasses)
        {
            glass.classList.add('filled');
        }
        else
        {
            glass.classList.remove('filled');
        }
    })
    progressText.textContent=`${currentGlasses} /${totalGlasses} Glasses.`;
    if(currentGlasses===totalGlasses)
    {
        goalPopup.style.display='flex';
    }
}
goalSelect.addEventListener('change',()=>
{
    totalGlasses=parseInt(goalSelect.value);
    currentGlasses=0;
    createGlassses();
    updateTracker();
}
)
addWaterBtn.addEventListener('click',()=>
{
    if(currentGlasses<totalGlasses)
    {
        currentGlasses++;
        updateTracker();
    }
});
resetBtn.addEventListener('click',()=>
{
    currentGlasses=0;
    updateTracker();
});
closePopupBtn.addEventListener('click',()=>
{
    goalPopup.style.display='none';
})



