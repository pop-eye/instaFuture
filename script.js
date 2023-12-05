document.addEventListener("DOMContentLoaded", function() {
    const videos = document.querySelectorAll('.video');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.play().then(() => {
                    // Play started successfully
                }).catch(err => {
                    console.error('Error attempting to play video:', err);
                });
            } else {
                entry.target.pause();
            }
        });
    }, { threshold: 0.5 });

    videos.forEach(video => {
        video.setAttribute('muted', ''); // Muting the video
        video.setAttribute('loop', '');  // Ensuring loop
        observer.observe(video);
    });
});
