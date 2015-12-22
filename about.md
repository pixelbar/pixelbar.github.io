---
layout: page
title: About
---

<p class="message">
  The hackerspace of Rotterdam since 2015.
</p>

### Our rules
* We have respect for everyone: any gender or sexual preference.
* We only accept members of 18 years and older to the space.
* We respect nicknames, but to be a member - we'll need your personal name.
* We don’t destroy property or other people without their consent.

### Become a member
As a member of the space, you'll get complete access. Every workshop, event, equipment, everything. Your equal to everyone else in the organisation and it's just 25 euro's per month. Which also means that you support our cause for 100%.

* 24x7 access to the space (if you'd like a key)
* Use of the tools/equipment in the space
* The possibility to show your project in the space
* A Spacenet account (which gives you worldwide access to the internet at every hackerspace with Spacenet)
* A Pixelbar account (which allows you to register drinks)
* A [nickname]@pixelbar.nl email forward (if somebody else doesn't use that nickname yet)
* And we'll throw in a first (?) "mate" experience for you, as an true hacker

\- [Register](/register)

### Become a friend

If you don't live close, don't really feel like hacking or just don't have enough funds to support the hackerspace... it is also possible to become a friend of the space for just 5 euro per month.

* Access to the space (unregular, only when someone is present)
* Use of the tools/equipment in the space
* A Spacenet account (which gives you worldwide access to the internet at every hackerspace with Spacenet)
* A Pixelbar account (which allows you to register drinks)
* A [nickname]@pixelbar.nl email forward (if somebody else doesn't use that nickname yet)

\- [Register](/register)

### Location

We're located in the "Keilewerf" at Vierhavensstraat 56, 3029 BG Rotterdam. There is (limited) parking space available and if you go with public transportation: you can take the stop at Marconiplein and walk you way up towards the KFC and take a left into the Vierhavensstraat. After about 450 meters, you'll be at our building (recognisable by all of the street art on the exterior of the building).

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
