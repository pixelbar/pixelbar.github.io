---
layout: page
title: Contact
---

<p class="message">
  The hackerspace of Rotterdam since 2015.
</p>

### Contact

Telephone : At this moment there is no phone yet<br />
IRC : #pixelbar at smurfnet.ch<br />
Slack : <a href="https://pixelbar.herokuapp.com">pixelbar.herokuapp.com</a> Feel free to invite yourself.<br />
Email : <a href="mailto:bestuur@pixelbar.nl">bestuur@pixelbar.nl.</a>

### Location

Our Address is :

Vierhavensstraat 56<br />
3029 BG Rotterdam

Lat : 51.910111<br />
Lon : 4.433988

We're located in the <a href="http://www.keilewerf.nl">Keilewerf</a>. There is (limited) parking space available and if you go with public transportation: you can take the stop at Marconiplein and walk you way up towards the KFC and take a left into the Vierhavensstraat. After about 450 meters, you'll be at our building (recognisable by all of the street art on the exterior of the building).

<script src="https://maps.googleapis.com/maps/api/js"></script>
<script>
  function initialize() {
    var mapCanvas = document.getElementById('map');
    var mapOptions = {
      center: new google.maps.LatLng(51.910111, 4.433988),
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(mapCanvas, mapOptions)
    var markerPos = new google.maps.LatLng(51.910111, 4.433988);
    var marker = new google.maps.Marker({
      position: markerPos,
      map: map,
      title: "Pixelbar HQ",
    });
  }
  google.maps.event.addDomListener(window, 'load', initialize);
</script>
<div id="map" style="width: 100%; height: 400px; margin-bottom: 15px;"></div>

### Organisational

Chambre of Commerce : 63989255 ( Rotterdam )
