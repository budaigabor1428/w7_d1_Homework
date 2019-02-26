const PubSub = require('../helpers/pub_sub.js');

const ResultView = function () {

};

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('PrimeChecker:result-checked', (event) => {
    const numberIsPrime = event.detail;
    this.displayResult(event.detail);
  })
};

ResultView.prototype.displayResult = function (result) {
  const resultElement = document.querySelector('#result');
  resultElement.textContent = `Is this number a prime number? ${result}`;
};

module.exports = ResultView;
