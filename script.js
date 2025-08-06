document.addEventListener("DOMContentLoaded", function () {
    const box = document.getElementById("animateBox");
    let pos = 0;
    let direction = 1;

    setInterval(function () {
        if (pos > 135 || pos < 0) direction *= -1;
        pos += direction * 2.7;
        box.style.transform = `translateX(${pos}px)`;
    }, 21);
});
