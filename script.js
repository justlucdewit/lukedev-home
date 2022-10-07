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

const contactForm = () => {
    const msg = document.getElementById('msg').value;
    const name = document.getElementById('name').value;

    // send message via discord webhook
    fetch('https://discord.com/api/webhooks/1027939719058829342/eaZtxghceOFzGaRbceCacKn3c7wcwAH8o-rj8awXPI5peFRb4OPdqJtExOdCop0Xf0tR', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            content: '<@332071218066751490> \n' + '**msg from: ' + name + '**:\n```' + msg + '```'
        })
    })
}

const avatars = [
    "black", "comradeluke", "github", "green", "red", "python", "love"
];

const randomAvatar = () => {
    let avatar = avatars[Math.floor(Math.random() * avatars.length)];
    
    // In october use halloween or frankenluke instead
    if (new Date().getMonth() == 9) {
        avatar = "frankenluke";
    }
    
    // In june use bi instead
    if (true) {
        avatar = "bi";
    }
    
    document.getElementById('avatar').src = '/images/lukes/' + avatar + '.png';

    
}

randomAvatar();