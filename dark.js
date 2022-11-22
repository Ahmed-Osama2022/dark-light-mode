// Add JavaScript file to add functions to the switches

// Global variables
const light = document.getElementById('light');
const dark = document.getElementById('dark');
// End with Global variables:
document.body.style.transition = 'background-color 0.5s 0.2s ease';
// document.body.style.transition = 'background-color 0.5s 0.2s ease';
// document.body.style.transition = 'background-color 0.5s 0.2s ease';
// document.body.style.transition = 'background-color 0.5s 0.2s ease';

dark.addEventListener('click', (e) => {
    document.body.style.backgroundColor = '#0a0a0a';
})
// For day mode:
light.addEventListener('click', (e) => {
    document.body.style.backgroundColor = '';
})

