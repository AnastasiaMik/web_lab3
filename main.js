let canvas = document.createElement('canvas');
document.body.appendChild(canvas);
let ctx  = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 400;

// let path = 'https://source.unsplash.com/collection/1538150/';

function img(){
img_url = 'https://source.unsplash.com/collection/1538150/';

    const width = Math.floor(Math.random() * 150) + 150;
    const height = Math.floor(Math.random() * 200) + 100;

    var img1 = new Image();
    img1.crossOrigin = 'anonymous';
    img1.src = img_url + width + 'x' + height;
    img1.onload = function(){
        ctx.drawImage(img1, 0 , 0, width, height );
    };

    var img2 = new Image();
    img2.crossOrigin = 'anonymous';
    img2.src = img_url + (600-width) + 'x' + height;
    img2.onload = function(){
        ctx.drawImage(img2, width, 0, 600 - width, height);
    };

    var img3 = new Image();
    img3.crossOrigin = 'anonymous';
    img3.src = img_url + (width - 50)+ 'x' + (400 - height);
    img3.onload = function(){
        ctx.drawImage(img3, 0 , height, width - 50, 400 - height);
    };

    var img4 = new Image();
    img4.crossOrigin = 'anonymous';
    img4.src = img_url + (600 - width) + 'x' + (400 - height);
    img4.onload = function(){
        ctx.drawImage(img4, width - 50 , height, 650 - width, 400 - height);
    };

}
window.onload = img();
