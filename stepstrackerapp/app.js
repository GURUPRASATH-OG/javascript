document.addEventListener('DOMContentLoaded',()=>
{
    const goalInput = document.getElementById('goal-input');
    const setGoalBtn = document.getElementById('set-goal');
    const stepInput = document.getElementById('step-input');
    const addStepBtn = document.getElementById('add-step');
    const goalCountEl = document.getElementById('goal-count');
    const resetBtn = document.getElementById('reset');
    const stepCountEl = document.getElementById('step-count');
    const popup = document.getElementById('popup');
    const closePopupBtn = document.getElementById('close-popup');
    const progressBar = document.getElementById('progress-bar');
    let totalSteps =localStorage.getItem('totalSteps')?parseInt(localStorage.getItem('totalSteps')):0;
    let goal=localStorage.getItem('goal')?parseInt(localStorage.getItem('goal')) :10000;

    function updateUI()
    {
        stepCountEl.textContent = totalSteps;
        goalCountEl.textContent = goal;
        let progress = (totalSteps/goal)*100; //=>100/1000 =>1/10*10 =>100steps
        console.log(totalSteps,goal,progress)
        progressBar.style.width=`${progress>100 ? 100:progress}%`
        if(totalSteps>=goal)
        {
            popup.style.display='flex';
        }
    }
    console.log(goalInput,setGoalBtn,stepInput,addStepBtn,goalCountEl,resetBtn,stepCountEl,popup,closePopupBtn,progressBar)

    setGoalBtn.addEventListener('click',()=>
    {
        let newGoal = parseInt(goalInput.value);
        //checking goal input is number and greater than zero
        if(!isNaN(newGoal) && newGoal>0)
        {
            goal = newGoal;
            localStorage.setItem('goal',goal);
            updateUI();
        }
        goalInput.value='';
    })
    addStepBtn.addEventListener('click',()=>
    {
        let steps = parseInt(stepInput.value);
        if(!isNaN(steps) && steps>0)
        {
            totalSteps += steps;
            localStorage.setItem("totalSteps",totalSteps);
            updateUI();
        }
        stepInput.value='';
    })
    resetBtn.addEventListener('click',()=>
    {
        totalSteps =0;
        localStorage.setItem("totalSteps",totalSteps);
        updateUI();
    })
    closePopupBtn.addEventListener('click',()=>
    {
        popup.style.display='none';
    })
    updateUI();
})