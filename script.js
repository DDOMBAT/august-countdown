
const target=new Date("2026-08-10T00:00:00");

function updateCountdown(){
    let diff=target-new Date();
    if(diff<0) diff=0;

    const days=Math.floor(diff/86400000);
    const hours=Math.floor((diff%86400000)/3600000);
    const minutes=Math.floor((diff%3600000)/60000);
    const seconds=Math.floor((diff%60000)/1000);

    daysEl.textContent=days;
    hoursEl.textContent=String(hours).padStart(2,"0");
    minutesEl.textContent=String(minutes).padStart(2,"0");
    secondsEl.textContent=String(seconds).padStart(2,"0");
}

const daysEl=document.getElementById("days");
const hoursEl=document.getElementById("hours");
const minutesEl=document.getElementById("minutes");
const secondsEl=document.getElementById("seconds");

updateCountdown();
setInterval(updateCountdown,1000);
