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
