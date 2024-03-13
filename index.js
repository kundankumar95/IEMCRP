function ShowTime() {
    const CurrentTime = new Date();
    const time = `${CurrentTime.getHours()}:${CurrentTime.getMinutes()}:${CurrentTime.getSeconds()}`;
    console.log(time);
    document.getElementById('time').innerHTML = time
}

function ShowCurrentDate() {
    const currentDate = new Date();
    const dateString = currentDate.toDateString();
    document.getElementById('date').innerText = dateString;
}
setInterval(ShowTime, 1000);
ShowCurrentDate();

