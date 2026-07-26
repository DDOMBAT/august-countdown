
const target = new Date("2026-08-10T00:00:00");

function updateCountdown(){
  const now=new Date();
  let diff=target-now;
  if(diff<0) diff=0;
  const days=Math.floor(diff/(1000*60*60*24));
  const hours=Math.floor(diff%(1000*60*60*24)/(1000*60*60));
  const minutes=Math.floor(diff%(1000*60*60)/(1000*60));
  const seconds=Math.floor(diff%(1000*60)/1000);

  document.getElementById("days").textContent=days;
  document.getElementById("hours").textContent=String(hours).padStart(2,"0");
  document.getElementById("minutes").textContent=String(minutes).padStart(2,"0");
  document.getElementById("seconds").textContent=String(seconds).padStart(2,"0");
}
updateCountdown();
setInterval(updateCountdown,1000);
