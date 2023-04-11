function scheduleAudio(audioFile, scheduledTime) {
    // Create a new Audio element
    const audio = new Audio();
    audio.src = URL.createObjectURL(new Blob([audioFile]));

    // Schedule the audio to play at the scheduled time
    const timeoutID = setTimeout(() => {
        audio.play();
    }, scheduledTime.getTime() - Date.now());
}

function onSubmit(event) {
    event.preventDefault();

    // Get the selected audio file
    const audioFile = document.getElementById('audioFileInput').files[0];

    // Get the scheduled time for playing the audio
    const scheduledTimeInput = document.getElementById('scheduleTimeInput');
    const scheduledTimeString = scheduledTimeInput.value;
    const scheduledTime = new Date(scheduledTimeString);

    // Schedule the audio to play at the scheduled time
    scheduleAudio(audioFile, scheduledTime);

    // Display a confirmation message to the user
    const confirmationMessage = `Audio scheduled to play at ${scheduledTimeString}`;
    alert(confirmationMessage);
}

const audioForm = document.getElementById('audioForm');
audioForm.addEventListener('submit', onSubmit);

function onSubmit(event) {
    event.preventDefault();

    // Get the selected audio file
    const audioFile = document.getElementById('audioFileInput').files[0];

    // Get the scheduled time for playing the audio
    const scheduledTimeInput = document.getElementById('scheduleTimeInput');
    const scheduledTimeString = scheduledTimeInput.value;
    const scheduledTime = new Date(scheduledTimeString);

    // Send the audio file and scheduled time to the server for scheduling
    const formData = new FormData();
    formData.append('audio', audioFile);
    formData.append('scheduleTime', scheduledTimeString);
    fetch('/schedule-audio', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            // Display a confirmation message to the user
            const confirmationMessage = `Audio scheduled to play at ${scheduledTimeString}`;
            alert(confirmationMessage);
        } else {
            throw new Error('Failed to schedule audio');
        }
    })
    .catch(error => {
        console.error(error);
        alert('Failed to schedule audio');
    });
}




