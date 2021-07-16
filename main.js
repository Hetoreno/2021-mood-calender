const moodChoice = document.querySelectorAll(".face");
const dates = document.querySelectorAll(".day");
const circleDates = document.querySelectorAll(".circle");
let activeColor = '';


moodChoice.forEach(colors =>{
    colors.addEventListener('click',()=>{
        for (let i=0; i<=moodChoice.length; i++){
            colors.classList.add('selected');
            activeColor = getComputedStyle(colors).getPropertyValue('color');
            moodChoice[i].classList.remove('selected');
        }
    })
})

circleDates.forEach(event =>{
    event.addEventListener('click',()=>{
        event.style.backgroundColor= activeColor;
        event.classList.add("storage");
    })
})

//local storage
/* document.addEventListener("DOMContentLoaded", (save)=>{
    let keep;
    if (localStorage.getItem("selected") === null){
        keep =[];
    } else {
        keep = JSON.parse(localStorage.getItem("selected"));
    }

    keep.push(save);
    localStorage.setItem("selected",JSON.stringify(keep));
    
}) */
localStorage.setItem("asdasd");