const express = require('express');
const multer = require('multer');
const app = express();
const upload = multer();

app.use(express.static('public'));

// Set up a route for uploading an audio file
app.post('/schedule-audio', upload.single('audio'), (req, res) => {
    // Get the uploaded audio file
    const audioFile = req.file.buffer;

    // Get the scheduled time for playing the audio
    const scheduledTimeString = req.body.scheduleTime;
    const scheduledTime = new Date(scheduledTimeString);

    // Schedule the audio to play at the scheduled time
    scheduleAudio(audioFile, scheduledTime);

    // Return a response to the client
    res.status(200).send('Audio scheduled successfully!');
});

// Start the server
app.listen(3000, () => {
    console.log('Server started on port 3000');
});

function scheduleAudio(audioFile, scheduledTime) {
    // Create a new Audio element
    const audio = new Audio();
    audio.src = URL.createObjectURL(new Blob([audioFile]));

    // Schedule the audio to play at the scheduled time
    const timeoutID = setTimeout(() => {
        audio.play();
    }, scheduledTime.getTime() - Date.now());
}
