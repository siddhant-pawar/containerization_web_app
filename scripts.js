document.getElementById('projectForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const projectName = document.getElementById('projectName').value;
    const projectType = document.getElementById('projectType').value;
    const projectBudget = document.getElementById('projectBudget').value;
    const projectStatus = document.getElementById('projectStatus').value;
    const projectAddress = document.getElementById('projectAddress').value;
    const projectLatitude = document.getElementById('projectLatitude').value;
    const projectLongitude = document.getElementById('projectLongitude').value;

    // Validate latitude and longitude
    if (isNaN(projectLatitude) || isNaN(projectLongitude)) {
        alert('Please select a location on the map.');
        return;
    }

    // Create a JSON object with project data
    const projectData = {
        projectName,
        projectType,
        projectBudget: parseFloat(projectBudget),
        projectStatus,
        projectAddress,
        projectLatitude: parseFloat(projectLatitude),
        projectLongitude: parseFloat(projectLongitude)
    };

    // Convert JSON object to a Blob
    const jsonBlob = new Blob([JSON.stringify(projectData, null, 2)], { type: 'application/json' });

    // Create a link element to trigger the download
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(jsonBlob);
    downloadLink.download = 'project_data.json';

    // Append the link to the body and trigger the download
    document.body.appendChild(downloadLink);
    downloadLink.click();

    // Clean up
    document.body.removeChild(downloadLink);

    // Optionally, reset form fields or perform other actions after download
    alert('Project data downloaded as project_data.json');
});

// Initialize Leaflet map
var map = L.map('map').setView([0, 0], 2); // Centered at [0, 0] with zoom level 2
L.tileLayer('http://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

var marker;

// Add marker on click to get latitude and longitude
map.on('click', function(e) {
    if (marker) {
        map.removeLayer(marker); // Remove previous marker
    }
    marker = L.marker(e.latlng).addTo(map);
    document.getElementById('projectLatitude').value = e.latlng.lat.toFixed(6); // Set latitude value
    document.getElementById('projectLongitude').value = e.latlng.lng.toFixed(6); // Set longitude value
});
