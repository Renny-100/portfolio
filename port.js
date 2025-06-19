

const button1 = document.getElementById("click");
const header = document.querySelector('.header');

button1.addEventListener('click', () =>{

    button1.innerHTML = "clicked";
    button1.style.backgroundColor ="red";
})

date =new Date();

const today =date.toLocaleTimeString();
header.append(today)


