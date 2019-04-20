// let path = 'https://source.unsplash.com/collection/1538150/';


function img(){
img_url = 'https://source.unsplash.com/collection/1538150/';

    const width = getRandomInt(150, 400);
    const height = getRandomInt(100, 300);

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
const data = JSON.parse(getQuote());
document.body.appendChild(canvas);
//let ctx  = canvas.getContext('2d');

function addText() {

    let mas = data[0].quote.split(' ');

    let countOfLines = Math.ceil(mas.length / 7);
    document.getElementById('canvas').getContext('2d').textAlign = 'center';

    for (var i = 0; i < countOfLines; i++) {
        document.getElementById('canvas').getContext('2d').fillText(masToString(mas.slice(i * 7, (i + 1) * 7)), 300, 100 + 200 / (countOfLines + 1) * (i + 1))
    }
    document.getElementById('canvas').getContext('2d').textAlign = 'right';
    document.getElementById('canvas').getContext('2d').fillText('(c) ' + data[0].character, 590, 380);
}

function fillText() {
    document.getElementById('canvas').getContext('2d').font = 'Bold 18px Arial';

    document.getElementById('canvas').getContext('2d').fillStyle = "rgba(0, 0, 0, 0.3)";
    document.getElementById('canvas').getContext('2d').fillRect(0, 0, 600, 400);
    document.getElementById('canvas').getContext('2d').fillStyle = "white";
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
