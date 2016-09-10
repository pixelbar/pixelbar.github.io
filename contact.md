---
layout: page
title: Contact
---

<p class="message">
  The hackerspace of Rotterdam since 2015.
</p>

### Contact

Telephone : +31 (0) 10 7171 591<br />
IRC : #pixelbar at smurfnet.ch<br />
Slack : <a href="https://pixelbar.herokuapp.com">pixelbar.herokuapp.com</a> Feel free to invite yourself.<br />
Email : <a href="mailto:bestuur@pixelbar.nl">bestuur@pixelbar.nl.</a>

Mailing List : Pixelbar has a mailinglist for general communication. You can subscribe yourself <a href="https://www.pixelbar.nl/joinlist/">here</a>

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

### Spacestate

Allmost every hackerspace has a way of letting visitors know if the space is open. This is called a SpaceState. At Pixelbar we also implemented a spacestate switch which is toggled by the first participant entering the hackerspace, and is toggled to close when the last participant leaves. You will find the current spacestate on the top of this website. If you follow us on twitter : <a href="https://www.twitter.com/pixelbar010">@pixelbar010</a>, You will see a tweet everytime the switch is toggled. If you use Pushover we can even send you a push message via the link <a href="https://pushover.net/subscribe/PixelbarSpacestate-gbQgUDCwh2Yi8L5">here</a>

If you call Pixelbar, a voice system will tell you if we're open at that moment.


### Organisational

* Chambre of Commerce : 63989255 ( Rotterdam )
* VAT Number : NL855478172B01
