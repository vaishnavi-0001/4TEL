
document.addEventListener("DOMContentLoaded", function() {
    var countdownElement = document.getElementById("countdown");
    var seconds = 13;

    var countdownInterval = setInterval(function() {
        countdownElement.textContent = seconds;
    
        seconds--;

        if (seconds < 0) {
            clearInterval(countdownInterval);
            slideUpSecondPage(); 
        }
    }, 1000);

    
    var menuToggle = document.querySelector('.menu-toggle');
    menuToggle.addEventListener('click', toggleMenu);
});

function slideUpSecondPage() {
   
    var countdownElement = document.getElementById("countdown");
    countdownElement.style.opacity = "0";

    var content = document.querySelector('.content');
    var sidebar = document.querySelector('.sidebar');
    content.style.transition = "transform 1s ease";
    content.style.transform = "translateY(-100%)";
    sidebar.style.transition = "transform 1s ease";
    sidebar.style.transform = "translateY(-100%)";

    var secondPageOverlay = document.getElementById("secondPageOverlay");
    secondPageOverlay.style.display = "block";

    setTimeout(function() {
        
        window.location.href = "3_card.html";
    }, 1000);
}

function toggleMenu() {
    var sidebarMenu = document.querySelector('.sidebar-menu');
    sidebarMenu.classList.toggle('active');
}
