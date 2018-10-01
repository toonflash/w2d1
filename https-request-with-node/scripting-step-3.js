var https = require('https'); 

function getAndPrintHTML (options) {

    var options = process.argv.slice(2).toString();

    var requestOptions = {
        host: 'sytantris.github.io',
        path: options
    };
  
    /* Add your code here */
    https.get(requestOptions, function (response) {

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

getAndPrintHTML();

