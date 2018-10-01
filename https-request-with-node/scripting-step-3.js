var https = require('https'); 
var fileName = process.argv.slice(2).toString();

function getAndPrintHTML (options) {
  
    /* Add your code here */
    https.get(options, function (response) {

        response.setEncoding('utf8');

        response.on('data', function (chunk) {
            console.log('Chunk Received. Length:', chunk.length);
            var data = "";
            data += chunk;
            console.log(data.toString());
        });

        response.on('end', function() {
            console.log('Response stream complete.');
          });
    });
}

var requestOptions = {
    host: 'sytantris.github.io',
    path: fileName
};

getAndPrintHTML(requestOptions);

