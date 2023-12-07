document.addEventListener("DOMContentLoaded", function() {
    const videos = document.querySelectorAll('.video');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.play().then(() => {
                    // Play started successfully
                    entry.target.muted = false; // Unmute the video when in view
                }).catch(err => {
                    console.error('Error attempting to play video:', err);
                });
            } else {
                entry.target.pause();
                entry.target.muted = true; // Mute the video when out of view
            }
        });
    }, { threshold: 0.5 });

    videos.forEach(video => {
        video.setAttribute('muted', ''); // Initially mute the video
        video.setAttribute('loop', '');  // Ensuring loop
        observer.observe(video);

        // Optional: Add click listener to toggle mute
        video.addEventListener('click', function() {
            this.muted = !this.muted;
        });
    });
});