function getState() {
  fetch('https://spacestate.pixelbar.nl/spacestate.php')
  .then(function(response) {
    return response.text()
  }).then(function(body) {
    setTimeout(getState, 10000);
    var data = JSON.parse(body);
    $('#status').html(data.state.toUpperCase()).removeAttr('class').addClass(data.state);
  })
}

$(getState);


/*$(function() {
  $('#registerbackup').submit(function(e) {
    e.preventDefault();
    var data = $(this).serializeFormJSON();

    $('input').attr('disabled', true)
    $('.formhandler').remove()
    fetch('https://api1.pixelbar.nl/register', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(parseJSON).then(checkStatus).then(function () {
      $('form').replaceWith(`
        <p class="message formhandler">We've received your request. Please be patient while we review it, which can take upto 48 hours. We will contact you afterwards. If you can't wait or have questions, please <a href="mailto:bestuur@pixelbar.nl">contact us</a>.</p>
      `)
    }).catch(function (err) {
      $('form').before(`
        <p class="message formhandler">${err.response.message.charAt(0).toUpperCase() + err.response.message.slice(1)}</p>
      `)

      $('input').attr('disabled', false)
    })
  });
});
*/
$(function() {
  $('#register').submit(function(e) {
    e.preventDefault();
    var data = $(this).serialize();
	$('.formhandler').remove()
	$('input').attr('disabled', true)
    $.ajax({
		type: "POST",
		url: "https://api.pixelbar.nl/becomeamember/",
		data: data,
		success: function() {
			$('form').replaceWith(`
				<p class="message formhandler">We've received your request. Please be patient while we review it, which can take upto 48 hours. We will contact you afterwards. If you can't wait or have questions, please <a href="mailto:bestuur@pixelbar.nl">contact us</a>.</p>
			`)
		}
	});
  });
});

$(function() {
  $('#joinlist').submit(function(e) {
    e.preventDefault();
    var data = $(this).serialize();
	$('.formhandler').remove()
	$('input').attr('disabled', true)
    $.ajax({
		type: "POST",
		url: "https://lists.pixelbar.nl/mailman/subscribe/pixelbar",
		data: data,
		success: function() {
			$('form').replaceWith(`
				<p class="message formhandler">We've received your request. You will recieve a confirmation email soon.</p>
			`)
		}
	});
  });
});

function parseJSON(response) {
  return response.json()
}

function checkStatus(response) {
  if (response.status === 'ok') {
    return response
  } else {
    var error = new Error(response)
    error.response = response
    throw error
  }
}

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
        if(this.value) o[this.name] = this.value;
      }
  });
  return o;
};


(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-73825737-1', 'auto');
  ga('send', 'pageview');