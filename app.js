const hamburgur = document.getElementById("hamburgur");
const navlist = document.getElementById("navlist");

hamburgur.addEventListener("click", ()=>{
    navlist.classList.toggle("navlist-active")
})