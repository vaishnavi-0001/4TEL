function toggleMenu() {
    var sidebarMenu = document.querySelector('.sidebar-menu');
    sidebarMenu.classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", function() {
    var countdownElement = document.getElementById("countdown");
    var seconds = 10;

    var countdownInterval = setInterval(function() {
        countdownElement.textContent = seconds;
        
        seconds--;

        if (seconds < 0) {
            clearInterval(countdownInterval);
            countdownElement.style.opacity = "0"; // Hide the countdown when it reaches 0
            arrowElement.style.opacity = "0";
        }
    }, 1000);
});

