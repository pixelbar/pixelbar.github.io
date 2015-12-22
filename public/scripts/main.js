function getState() {
  fetch('https://spacestate.pixelbar.nl/spacestate.php')
  .then(function(response) {
    return response.text()
  }).then(function(body) {
    setTimeout(getState, 2500);
    var data = JSON.parse(body);
    $('#status').html(data.state.toUpperCase()).removeAttr('class').addClass(data.state);
  })
}

$(getState);

// From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
if (!Object.keys) {
  Object.keys = (function() {
    'use strict';
    var hasOwnProperty = Object.prototype.hasOwnProperty,
        hasDontEnumBug = !({ toString: null }).propertyIsEnumerable('toString'),
        dontEnums = [
          'toString',
          'toLocaleString',
          'valueOf',
          'hasOwnProperty',
          'isPrototypeOf',
          'propertyIsEnumerable',
          'constructor'
        ],
        dontEnumsLength = dontEnums.length;

    return function(obj) {
      if (typeof obj !== 'object' && (typeof obj !== 'function' || obj === null)) {
        throw new TypeError('Object.keys called on non-object');
      }

      var result = [], prop, i;

      for (prop in obj) {
        if (hasOwnProperty.call(obj, prop)) {
          result.push(prop);
        }
      }

      if (hasDontEnumBug) {
        for (i = 0; i < dontEnumsLength; i++) {
          if (hasOwnProperty.call(obj, dontEnums[i])) {
            result.push(dontEnums[i]);
          }
        }
      }
      return result;
    };
  }());
}

$.fn.serializeFormJSON = function () {
  var o = {};
  var a = this.serializeArray();
  $.each(a, function () {
      if (o[this.name]) {
          if (!o[this.name].push) {
              o[this.name] = [o[this.name]];
          }
          o[this.name].push(this.value || '');
      } else {
          o[this.name] = this.value || '';
      }
  });
  return o;
};


$(function() {
  $('form').submit(function(e) {
    e.preventDefault();
    var captcha = grecaptcha.getResponse();
    var invalidInput = false;
    if(true) {
      var data = $(this).serializeFormJSON();
      for (var i = 0; i < Object.keys(data).length; i++) {
        var key = Object.keys(data)[i],
            value = data[key];
        if(key !== "notes" && value === "") {
          invalidInput = true;
        }
      };

      if(!invalidInput) {
        // send `data` to server here
      }

    }

    if(invalidInput) alert("Please provide all required fields.");
  });
});