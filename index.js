let video = document.getElementById("webcam");
if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({
        video: true
    })
    .then(function(stream) {
        video.srcObject = stream;
    })
    .catch(function(err) {
        console.error("Err: " + err);
    });
}