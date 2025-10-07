const filters = ["brightness(200%)", "contrast(200%)", "grayscale(1)", "hue-rotate(200deg)", "hue-rotate(50deg)", "hue-rotate(125deg)", "invert(100%)", "saturate(200%)", "sepia(1)"]
const selfies = ["sesame_street_1.png","sesame_street_2.png","sesame_street_3.png","sesame_street_4.png","sesame_street_5.png","sesame_street_6.png","sesame_street_7.png"]
let current_selfie_index = 0;
function changeFilter() {
    const selfie = document.getElementById("selfie");

    let index = Math.floor(Math.random() * 9);
    selfie.style.filter = filters[index];
}

function changePhoto() {
    const selfie = document.getElementById("selfie");

    if(current_selfie_index === 6) {
        current_selfie_index = 0;
    }
    else {
        current_selfie_index += 1;
    }
    selfie.src = "../resources/images/WeirdWebOctober2025/sesame_street/" + selfies[current_selfie_index];

}

const shutter_sound = new Audio('../resources/images/WeirdWebOctober2025/sesame_street/camera-shutter.mp3');

// Get the button element
const next_button = document.getElementById('next_button');

// Add a click event listener
next_button.addEventListener('click', () => {
    // Play the sound
    shutter_sound.play();
});

const filter_sound = new Audio('../resources/images/WeirdWebOctober2025/sesame_street/filter-sound.mp3');

// Get the button element
const filter_button = document.getElementById('filter_button');

// Add a click event listener
filter_button.addEventListener('click', () => {
    // Play the sound
    filter_sound.play();
});