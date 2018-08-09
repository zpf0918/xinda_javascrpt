var isMomHappy = Math.random() > 0.5;

// first Promise
var willIGetNewPhone = new Promise(
    function (resolve, reject) {
        if (isMomHappy) {
            var phone = {
                brand: 'iphone',
                color: 'black'
            };
            resolve(phone); // fulfilled
        } else {
            var reason = new Error('mom is not happy');
            reject(reason); // reject
        }

    }
);


// second promise
function showOff(phone) {
  var message = "快看我的 " + phone.brand;
  return Promise.resolve(message);
}

var askMom = function () {
  willIGetNewPhone
    .then(showOff)
    .then(function (fullfilled) {
      console.log(fullfilled)
    })
    .catch(function (error) {
      console.log(error.message)
    })
}

askMom();

