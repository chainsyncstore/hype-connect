const localVideo = document.getElementById('localVideo');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');

let stream = null;

const startStream = async () => {
    if (stream) {
        console.log("Stream already active");
        return;
    }
    try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
        stream = mediaStream;
        localVideo.srcObject = stream;
        console.log("Stream started");
    } catch (error) {
        console.error("Error accessing media devices.", error);
        alert("Error accessing media devices: " + error.message);
    }
};

const stopStream = () => {
    if (stream) {
        stream.getTracks().forEach(track => track.stop());
        localVideo.srcObject = null;
        stream = null;
        console.log("Stream stopped");
    } else {
        console.log("No stream active to stop");
    }
};

startButton.addEventListener('click', startStream);
stopButton.addEventListener('click', stopStream);

// Small addition: Inform the user if getUserMedia is not supported
if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
  alert("getUserMedia is not supported in your browser!");
}
