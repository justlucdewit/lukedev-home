console.log('update')

// Find element with id age
const el_age = document.getElementById('age');

// Set birth to 30 july 2001 at 19:00
const birth = new Date(2001, 6, 30, 19, 0, 0);

// In a loop, update age every second
setInterval(() => {
    // Get current date
    const now = new Date();
    console.log('update')

    // Calculate age as float
    const age = (now - birth) / 1000 / 60 / 60 / 24 / 365;

    // Update age
    el_age.innerHTML = age.toFixed(8);
}, 200);