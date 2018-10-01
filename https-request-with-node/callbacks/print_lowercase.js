var getHTML = require('../scripting-step-5');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function printHTML (html) {
    console.log(html.toLowerCase());
}

getHTML(requestOptions, printHTML);