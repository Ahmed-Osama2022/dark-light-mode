// Add JavaScript file to add functions to the switches

/**
 * Saving the last status in the PC localStorage
 * in form of "key && pair"
 */

// Local storage
const darkLocal = localStorage.getItem('dark');

// Global variables
const light = document.getElementById('light');
const dark = document.getElementById('dark');
// End with Global variables:

// Add a transition style for the body
document.body.style.transition = 'background-color 0.5s 0.2s ease';

/**
 * Local
 * check what is the current status
 * In other word => what is in the key
*/
if (darkLocal !== 'enabled'){
    // document.body.style.backgroundColor = '#0a0a0a';
    document.body.style.backgroundColor = '';
} else {
    document.body.style.backgroundColor = '#0a0a0a';
}
/**
 * End of script
 */


/**
 * Start event listeners on the two buttons 
 */
dark.addEventListener('click', (e) => {
    document.body.style.backgroundColor = '#0a0a0a';
    localStorage.setItem('dark', 'enabled');

})
// For day mode:
light.addEventListener('click', (e) => {
    document.body.style.backgroundColor = '';
    localStorage.setItem('dark', null);

})
/**
 * End event listeners on the two buttons 
 */

