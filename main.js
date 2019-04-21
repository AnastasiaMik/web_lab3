let canvas = document.createElement('canvas');
document.body.appendChild(canvas);
let ctx  = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 400;

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

function getQuote() {
    let response = null;
    const request = new XMLHttpRequest();
    request.open('GET', 'https://thesimpsonsquoteapi.glitch.me/quotes', false);
    request.send();
    if (request.status !== 200) {
        alert(request.status + ': ' + request.statusText);
    } else {
        response = request.responseText;
    }
    return response;
}
const data = JSON.parse(getQuote());
console.log(data);
function addText() {
    let mas = data[0].quote.split(' ');
    let countOfLines = Math.ceil(mas.length / 7);
    ctx.textAlign = 'center';
    for (var i = 0; i < countOfLines; i++) {
        ctx.fillText(masToString(mas.slice(i * 7, (i + 1) * 7)), 300, 100 + 200 / (countOfLines + 1) * (i + 1))
    }
    ctx.textAlign = 'right';
    ctx.fillText('(c) ' + data[0].character, 590, 380);
}

function fillText() {
    ctx.font = 'Bold 25px Nautilus';

    ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
    ctx.fillRect(0, 0, 1000, 800);
    ctx.fillStyle = "white";
    ctx.Baseline = "top";
    addText();
}

function masToString(mas) {
    let str = '';
    for (let i = 0; i < mas.length; i++) {
        str = str + mas[i] + ' '
    }
    return str;

}

setTimeout(fillText, 3000);

canvas.onclick = function () {
    let dataURL = canvas.toDataURL("image/jpeg");
    let link = document.createElement("a");
    document.body.appendChild(link);
    link.href = dataURL;
    link.download = "Quote.jpg";
    link.click();
    document.body.removeChild(link);

};
