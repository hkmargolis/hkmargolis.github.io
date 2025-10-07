const record1 = document.getElementById("rec1");
const record2 = document.getElementById("rec2");
const record3 = document.getElementById("rec3");


const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");


// const iframe_button = document.getElementById("big_play_button");
const mp3_1 = new Audio("../resources/images/WeirdWebOctober2025/remix/funk-soul.mp3");
const mp3_2 = new Audio("../resources/images/WeirdWebOctober2025/remix/jazz.mp3");
const mp3_3 = new Audio("../resources/images/WeirdWebOctober2025/remix/piano.mp3");

button1.addEventListener('click', function() {
    if (record1.classList.contains('animated')) {
        record1.classList.remove('animated');
        record1.style.backgroundImage = "none";
        mp3_1.pause();
    } else {
        record1.classList.add('animated');
        record1.style.backgroundImage = "url(https://img.freepik.com/free-vector/orange-liquid-background_1409-10229.jpg?semt=ais_hybrid&w=740&q=80)";
        mp3_1.play();
    }
});

button2.addEventListener('click', function() {
    if (record2.classList.contains('animated')) {
        record2.classList.remove('animated');
        record2.style.backgroundImage = "none";
        mp3_2.pause();
    } else {
        record2.classList.add('animated');
        record2.style.backgroundImage = "url(https://www.shutterstock.com/image-vector/abstract-background-pattern-colorful-waves-600nw-2514591069.jpg)";
        mp3_2.play();
    }
});

button3.addEventListener('click', function() {
    if (record3.classList.contains('animated')) {
        record3.classList.remove('animated');
        record3.style.backgroundImage = "none";
        mp3_3.pause();
    } else {
        record3.classList.add('animated');
        record3.style.backgroundImage = "url(https://freedesignfile.com/upload/2013/10/Abstract-backgrounds-pattern-01.jpg)";
        mp3_3.play();
    }
});