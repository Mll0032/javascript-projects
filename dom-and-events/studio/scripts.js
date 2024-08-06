// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {
    const takeoffButton = document.getElementById("takeoff");
    const landingButton = document.getElementById("landing");
    const abortButton = document.getElementById("missionAbort");

    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    const rocket = document.getElementById("rocket");

    const upButton = document.getElementById("up");
    const downButton = document.getElementById("down");
    const rightButton = document.getElementById("right");
    const leftButton = document.getElementById("left");

    let shuttleHeight = 0;

    function initializeRocketPosition() {
        const shuttleBackgroundHeight = shuttleBackground.clientHeight;
        const shuttleBackgroundWidth = shuttleBackground.clientWidth;
        const rocketHeight = rocket.clientHeight;
        const rocketWidth = rocket.clientWidth;

        rocket.style.top = `${(shuttleBackgroundHeight - rocketHeight) + 20}px`;
        rocket.style.left = `${(shuttleBackgroundWidth - rocketWidth) / 2}px`;
    }

    initializeRocketPosition();

    takeoffButton.addEventListener("click", function() {
        if (confirm("Confirm that the shuttle is ready for takeoff.")) {
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";
            shuttleHeight = 10000;
            spaceShuttleHeight.innerHTML = shuttleHeight;
            moveRocket(0, -10);
        }
    });

    landingButton.addEventListener("click", function() {
        alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        shuttleHeight = 0;
        spaceShuttleHeight.innerHTML = shuttleHeight;
    });

    abortButton.addEventListener("click", function() {
        if (confirm("Confirm that you want to abort the mission.")) {
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style.backgroundColor = "green";
            shuttleHeight = 0;
            spaceShuttleHeight.innerHTML = shuttleHeight;
        }
    });

    upButton.addEventListener("click", function() {
        shuttleHeight += 10000;
        spaceShuttleHeight.innerHTML = shuttleHeight;
        moveRocket(0, -10);
    });

    downButton.addEventListener("click", function() {
        shuttleHeight -= 10000;
        spaceShuttleHeight.innerHTML = shuttleHeight;
        moveRocket(0, 10);
    });

    rightButton.addEventListener("click", function() {
        moveRocket(10, 0);
    });

    leftButton.addEventListener("click", function() {
        moveRocket(-10, 0);
    });

    function moveRocket(xChange, yChange) {
        const currentX = rocket.offsetLeft;
        const currentY = rocket.offsetTop;
        rocket.style.left = `${currentX + xChange}px`;
        rocket.style.top = `${currentY + yChange}px`;
    }
});
