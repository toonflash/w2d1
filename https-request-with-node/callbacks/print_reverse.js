var getHTML = require('../scripting-step-5');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printHTML (html) {
    var printHTMLReverse = [];
    for (i = html.length - 1; i >= 0; i--) {
        printHTMLReverse.push(html[i]);
      }
    console.log(printHTMLReverse.join(""));
}

getHTML(requestOptions, printHTML);