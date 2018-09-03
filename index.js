var http = require('http');
var card_shoe = require('./card_shoe.js');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    console.log("createserver");
    res.end('Hello World! '+ card_shoe.cards.deal() +"   "+card_shoe.cards.getDealtCards());
}).listen(8085);


