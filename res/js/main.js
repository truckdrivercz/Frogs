const frog = document.getElementById("frog");

window.onload = () => {
    const loopAnimation = () => {
        moveToFirstLily();
        
        setTimeout(() => {
            moveToSecondLily();
        }, 2000);

        setTimeout(() => {
            moveToThirdList();
        }, 4000);

        setTimeout(() => {
            moveToFourthLily();
        }, 6000);

        setTimeout(() => {
            moveToFifthLily();
        }, 8000);

        setTimeout(() => {
            moveToFourthLily();
        }, 10000);

        setTimeout(() => {
            moveToThirdList();
        }, 12000);

        setTimeout(() => {
            moveToSecondLily();
        }, 14000);

        setTimeout(() => {
            moveToFirstLily();
        }, 16000);
    };

    loopAnimation();
    setInterval(loopAnimation, 16000); // Spouští animaci znovu každých 16 sekund
};

const moveToFirstLily = () => {
    frog.style.left = 50 + "%";
    frog.style.top = 650 + "px";
};

const moveToSecondLily = () => {
    frog.style.left = 40 + "%";
    frog.style.top = 550 + "px";
};

const moveToThirdList = () => {
    frog.style.left = 60 + "%";
    frog.style.top = 450 + "px";
};

const moveToFourthLily = () => {
    frog.style.left = 40 + "%";
    frog.style.top = 350 + "px";
};

const moveToFifthLily = () => {
    frog.style.left = 60 + "%";
    frog.style.top = 250 + "px";
};