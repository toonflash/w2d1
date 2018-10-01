 
 module.exports = function getHTML (options, callback) {

    var https = require('https');

    https.get(options, function (response) {

        response.setEncoding('utf8');

        response.on('data', function (chunk) {
            console.log('Chunk Received. Length:', chunk.length);
            var data = "";
            data += chunk;
            callback(data.toString());
        });

        response.on('end', function() {
            console.log('Response stream complete.');
          });
    });
};




