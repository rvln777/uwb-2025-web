/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function playVideo() {
    document.getElementById("myVideo").play();
}

function pauseVideo() {
    document.getElementById("myVideo").pause();
}

function restartVideo() {
    let video = document.getElementById("myVideo");
    video.currentTime = 0;
    video.play()

}

function takeInfo() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => {
            document.getElementById("text-container").innerText = JSON.stringify(json, null, 2);
        });
}