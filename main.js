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

const data = JSON.parse(getQuote());
document.body.appendChild(canvas);
let ctx  = canvas.getContext('2d');

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
    ctx.font = 'Bold 18px Arial';

    ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
    ctx.fillRect(0, 0, 600, 400);
    ctx.fillStyle = "white";
    addText()
}

function masToString(mas) {
    var str = '';
    for (let i = 0; i < mas.length; i++) {
        str = str + mas[i] + ' '
    }
    return str
}

document.getElementById('canvas').onclick = function () {
    var dataURL = document.getElementById('canvas').toDataURL("image/jpeg");
    var link = document.createElement("a");
    document.body.appendChild(link);
    link.href = dataURL;
    link.download = "Quote.jpg";
    link.click();
    document.body.removeChild(link);
};

function getQuote() {
    let response = null;


    const request = new XMLHttpRequest();


    request.open('GET', 'http://api.forismatic.com/api/1.0/', false);

    request.send();


    if (request.status !== 200) {
        alert(request.status + ': ' + request.statusText);
    } else {

        response = request.responseText;
    }

    return response;
}



function randomQuote() {
    $.ajax({
        url: "https://api.forismatic.com/api/1.0/",
        dataType: "jsonp",
        data: "method=getQuote&format=jsonp&lang=ru&jsonp=?",
        success: function( response ) {
            $("#random_quote").html("<p id='random_quote' class='text-center'>" +
                response.quoteText + "<br/>&dash; " + response.quoteAuthor + " &dash;</p>");

            currentQuote = response.quoteText;
            QuoteAuthor = response.quoteAuthor;

        }
    });
}
