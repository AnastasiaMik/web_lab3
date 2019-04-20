let path = 'https://source.unsplash.com/collection/1538150/';

let
    img1 = new Image(),
    img2 = new Image(),
    img3 = new Image(),
    img4 = new Image();

xSize = Math.floor(Math.random() * 150) + 150,
    xResize = 600 - xSize,
    xOffset = xSize - 300,
    ySize = Math.floor(Math.random() * 200) + 100,
    yResize = 400 - ySize,
    yOffset = ySize - 200;

img1.onload=() => document.getElementById('canvas').getContext('2d');
img1.crossOrigin = 'anonymous';
img1.src = path + xSize + 'x' + ySize;

img1.onload = () => document.getElementById('canvas').getContext('2d').
drawImage(img1, 0, 0);
img2.crossOrigin = 'anonymous';
img2.src = path + xSize + 'x' + yResize;
img2.onload = () => document.getElementById('canvas').getContext('2d').
drawImage(img2, 0, 200 + yOffset);
img3.crossOrigin = 'anonymous';
img3.src = path + xResize + 'x' + ySize;
img3.onload =() => document.getElementById('canvas').getContext('2d').
drawImage(img3, 300 + xOffset, 0);
img4.crossOrigin = 'anonymous';
img4.src = path + xResize + 'x' + yResize;
img4.onload = () => document.getElementById('canvas').getContext('2d').
drawImage(img4, 300 + xOffset, 200 + yOffset);
