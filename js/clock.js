const clock = document.getElementById("time");
const sec = document.getElementById("sec");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const secounds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}`;
    sec.innerText = secounds;
}
getClock()
setInterval(getClock, 1000);