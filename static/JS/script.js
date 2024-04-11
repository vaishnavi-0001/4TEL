document.addEventListener("DOMContentLoaded", function() {
    var countdownElement = document.getElementById("countdown");
    var seconds = 10;

    var countdownInterval = setInterval(function() {
        countdownElement.textContent = seconds;
        
        seconds--;

        if (seconds < 0) {
            clearInterval(countdownInterval);
            countdownElement.style.opacity = "0"; // Hide the countdown when it reaches 0
            slideUpSecondVideo();
        }
    }, 1000);
});

function slideUpSecondVideo() {
    // Get reference to the first video
    const firstVideo = document.querySelector('.background-frontpage');

    // Delay stopping the first video at 6 seconds
    setTimeout(function() {
        // Pause the first video
        firstVideo.pause();

        // Slide up the first video
        firstVideo.style.transition = "transform 1s ease";
        firstVideo.style.transform = "translateY(-100%)";

        // Delay showing the second video by 1 second
        setTimeout(function() {
            // Show the second video
            const secondVideo = document.querySelector('.background-frontpage');
            secondVideo.src = 'image/video_2.mp4';
            secondVideo.style.transition = "transform 1s ease";
            secondVideo.style.transform = "translateY(0)";
            secondVideo.play();
        }, 1000); // Delay showing the second video after sliding up the first video
    }, 3000); // 6 seconds delay before stopping the first video and sliding up the second video
}

function toggleMenu() {
    var sidebarMenu = document.querySelector('.sidebar-menu');
    sidebarMenu.classList.toggle('active');
}
