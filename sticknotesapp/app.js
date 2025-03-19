const addNoteBtn= document.querySelector('.add-note');
const notesContainer = document.querySelector('.notes-container');
document.addEventListener('DOMContentLoaded',loadNotes)
function getRandomcolor()
{
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    console.log(r,g,b)
    return `rgb(${r},${g},${b},0.5)`
}
function addNote(content)
{
    const note = document.createElement('div');
note.classList.add('note')
note.style.backgroundColor= getRandomcolor();
note.innerHTML=`<textarea>${content}</textarea>
<button class="delete-note">x</button>`;
const textarea = note.querySelector('textarea');
const deleteBtn = note.querySelector('.delete-note');
textarea.addEventListener('focus',()=>
{
    if(textarea.value==='Write Your note here')
    {
        textarea.value='';
    }
})
deleteBtn.addEventListener('click',()=>
{
    note.remove();
    saveNotes();// this will make sure to update local storage that a node is deleted so you also delete i
})
textarea.addEventListener('input',saveNotes);// whenever we enter some text in notes it will call savenotes methods which in turns save it in the local storage under name stickynotes.
notesContainer.appendChild(note);
// notesContainer.append(note);
saveNotes(); // adding it so that localstorage knows that new node is added
}
function saveNotes()
{
    //selecting all note text area using queselectorAll() and maping the only value of the textarea and taking its values and add it to a new array.
    const notes =[...document.querySelectorAll('.note textarea')].map(note=>note.value);
    localStorage.setItem('stickyNotes',JSON.stringify(notes));// setting the notes value as json in local storage under the tag sticky Notes.
}
function loadNotes()
{
    JSON.parse(localStorage.getItem('stickyNotes')||'[]').forEach(addNote
        
    ) //getting array of notes from load storage ,if null it will add default empty array
}
addNoteBtn.addEventListener('click',()=>addNote("Write Your note here"));