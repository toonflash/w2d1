var https = require('https'); 
//var fileName = process.argv.slice(2).toString();

// our printHTML callback function now is referred to as "callback"
function getHTML (options, callback) {
  
    /* Add your code here */
    https.get(options, function (response) {

        response.setEncoding('utf8');

        response.on('data', function (chunk) {
            console.log('Chunk Received. Length:', chunk.length);
            var data = "";
            data += chunk;
            // here we invoke the callback function
            callback(data.toString());
        });

        response.on('end', function() {
            console.log('Response stream complete.');
          });
    });
}

function printHTML (html) {
    console.log(html);
}

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step4.html'
};
// here we set printHTML as the callback function
getHTML(requestOptions, printHTML);

