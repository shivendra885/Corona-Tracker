function updateMap() { 
    // console.log("Updating map with real time data")
    fetch("./data.json")
        .then(response => response.json())
        .then(rsp => {
            // console.log(rsp.data);
            rsp.data.forEach(element => {
                latitude = element.latitude;
                longitude = element.longitude;

                cases = element.infected; 
                if (cases > 255) 
                    color = "#ff3333"; 
                else 
                    color = `rgb(${cases}, 0, 0)`;

                // Mark on the Map 
                new mapboxgl.Marker({
                    draggable:false,
                    color: color
                })
                    .setLngLat([longitude, latitude])
                    .addTo(map);
            })
        })
}

// let interval = 20;
// setInterval(updateMap, interval);
updateMap();