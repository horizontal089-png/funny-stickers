const canvas = document.getElementById('stickerCanvas');
const ctx = canvas.getContext('2d');
const textInput = document.getElementById('text');
const fontSizeInput = document.getElementById('fontSize');
const colorInput = document.getElementById('color');
const backgroundSelect = document.getElementById('background');
const updateBtn = document.getElementById('update');
const downloadBtn = document.getElementById('download');

// Load background image
let bgImage = new Image();
bgImage.src = backgroundSelect.value; // Default to first option
bgImage.onload = () => drawSticker();

// Function to draw the sticker
function drawSticker() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);
    
    ctx.font = `${fontSizeInput.value}px Arial`;
    ctx.fillStyle = colorInput.value;
    ctx.textAlign = 'center';
    ctx.fillText(textInput.value, canvas.width / 2, canvas.height / 2);
}

// Update on button click
updateBtn.addEventListener('click', drawSticker);

// Change background on select
backgroundSelect.addEventListener('change', () => {
    bgImage.src = backgroundSelect.value;
});

// Download as PNG
downloadBtn.addEventListener('click', () => {
    const link = document.createElement('a');
    link.download = 'funny-sticker.png';
    link.href = canvas.toDataURL();
    link.click();
});

// Initial draw
drawSticker();