window.addEventListener("load", function() {
    const takeoffButton = document.getElementById("takeoff");
    const landingButton = document.getElementById("landing");
    const abortButton = document.getElementById("missionAbort");

    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    const rocket = document.getElementById("rocket");
    const rocketCoordinates = document.getElementById("rocketCoordinates");

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

        rocket.style.top = `${shuttleBackgroundHeight - rocketHeight}px`;
        rocket.style.left = `${(shuttleBackgroundWidth - rocketWidth) / 2}px`;

        updateCoordinates();
    }

    function updateCoordinates() {
        const currentX = rocket.offsetLeft;
        const currentY = rocket.offsetTop;
        rocketCoordinates.innerHTML = `X: ${currentX}, Y: ${currentY}`;
    }

    function moveRocket(xChange, yChange) {
        const currentX = rocket.offsetLeft;
        const currentY = rocket.offsetTop;
        const rocketHeight = rocket.clientHeight;
        const rocketWidth = rocket.clientWidth;
        const shuttleBackgroundHeight = shuttleBackground.clientHeight;
        const shuttleBackgroundWidth = shuttleBackground.clientWidth;

        const newX = currentX + xChange;
        const newY = currentY + yChange;

        // Boundary checks
        if (newX >= 0 && newX <= (shuttleBackgroundWidth - rocketWidth)) {
            rocket.style.left = `${newX}px`;
        }
        if (newY >= 0 && newY <= (shuttleBackgroundHeight - rocketHeight)) {
            rocket.style.top = `${(newY)}px`;
        }

        updateCoordinates();
    }

    function landRocket() {
        const currentX = rocket.offsetLeft;
        const shuttleBackgroundHeight = shuttleBackground.clientHeight;
        const rocketHeight = rocket.clientHeight;

        rocket.style.top = `${shuttleBackgroundHeight - rocketHeight}px`; // Align bottom
        rocket.style.left = `${currentX}px`; // Maintain current x position

        updateCoordinates();
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
        landRocket();
    });

    abortButton.addEventListener("click", function() {
        if (confirm("Confirm that you want to abort the mission.")) {
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style.backgroundColor = "green";
            shuttleHeight = 0;
            spaceShuttleHeight.innerHTML = shuttleHeight;
            initializeRocketPosition();
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
});