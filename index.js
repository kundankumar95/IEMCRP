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


// student page
document.getElementById('user-input').addEventListener('click', function() {
    const unameValue = document.getElementById('Username').value;
    const passwordValue = document.getElementById('password').value;
    const dropdownValue = document.getElementById('dropdown').value;

    // Check for correct credentials and dropdown selection
    if (unameValue === "12022002023213" && passwordValue === "1234" && dropdownValue === "Student") {
        // Redirect to the student.html page
        window.location.href = "student.html";
    } else {
        alert("Incorrect username, password, or user type.");
    }
});


const option_btn = document.getElementById('option');




