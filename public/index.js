let btn = document.getElementById("submit");
btn.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default form submission
     console.log("btn click");
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                let lat = position.coords.latitude;
                let lng = position.coords.longitude;
                
                // Redirect to the action URL with lat and lng as query parameters
                window.location.href = `http://localhost:8080/rCenters?lat=${lat}&lng=${lng}`;
            },
            (error) => {
                alert("Location access denied or unavailable.");
                console.error("Error fetching location:", error);
            }
        );
    } else {
        alert("Geolocation is not supported by your browser.");
    }
});
