function initialize() {
    const rcafe = { lat: 12.9709226, lng: -77.6448727 };
    const map = new google.maps.Map(document.getElementById("map"), {
      center: rcafe,
      zoom: 14,
    });
  }

window.initialize = initialize();