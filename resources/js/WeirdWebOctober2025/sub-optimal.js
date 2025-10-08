// https://www.geeksforgeeks.org/javascript/build-a-drawing-app-using-javascript
const canvas =
        document.querySelector("canvas"),
    toolBtns =
        document.querySelectorAll(".tool"),
    fillColor =
        document.querySelector("#fill-color"),
    colorBtns =
        document.querySelectorAll(".colors .option"),
    colorPicker =
        document.querySelector("#color-picker"),
    clearCanvas =
        document.querySelector(".clear-canvas"),
    saveImage =
        document.querySelector(".save-img"),
    downloadImage =
        document.querySelector(".download-img"),
    ctx = canvas.getContext("2d");

//global variables with default values
let prevMouseX, prevMouseY, snapshot,
    isDrawing = false,
    selectedTool = "brush",
    brushWidth = 5,
    selectedColor = "#000";

const setCanvasBackground = () => {
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = selectedColor;
}

window.addEventListener("load", () => {

    // Setting canvas width/height
    // offset width/height returns
    // viewable width/height of an element

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    setCanvasBackground();
});

const startDraw = (e) => {
    isDrawing = true;
    prevMouseX = e.offsetX;
    prevMouseY = e.offsetY;
    ctx.beginPath();
    ctx.lineWidth = brushWidth;
    ctx.strokeStyle = selectedColor;
    ctx.fillStyle = selectedColor;
    snapshot = ctx.getImageData(0, 0, canvas.width,
        canvas.height);
}


const drawPencil = (e) => {
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
}


const drawing = (e) => {
    if (!isDrawing) return;
    ctx.putImageData(snapshot, 0, 0);
    drawPencil(e);
}


toolBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector(".options .active")
            .classList.remove("active");
        btn.classList.add("active");
        selectedTool = btn.id;
        console.log(selectedTool);
    });
});

colorBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector(".options .selected")
            .classList.remove("selected");
        btn.classList.add("selected");
        selectedColor = window.getComputedStyle(btn)
            .getPropertyValue("background-color");
    });
});

colorPicker.addEventListener("change", () => {
    colorPicker.parentElement.style.background =
        colorPicker.value;
    colorPicker.parentElement.click();
});

clearCanvas.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    setCanvasBackground();
});

saveImage.addEventListener("click", () => {
    //add image to gallery

    let gallery = document.getElementById("portraits");
    let newPortraitFrame = document.createElement("li");
    newPortraitFrame.classList.add("portrait");
    const newPortrait = document.createElement("img");
    newPortrait.classList.add("portrait-img", "border");
    newPortrait.src = canvas.toDataURL("image/jpg");
    newPortraitFrame.appendChild(newPortrait);
    gallery.appendChild(newPortraitFrame);

});

downloadImage.addEventListener("click", () => {
    const link = document.createElement("a");
    link.download = "My-Portrait.jpg";
    link.href = canvas.toDataURL();
    link.click();
});


canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mousemove", drawing);
canvas.addEventListener("mouseup", () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);