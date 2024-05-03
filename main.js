// Leaflet OpenStreetMap
var mapid = L.map('mapid').setView([3.1573491, 101.7114804], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(mapid);

var marker = L.marker([3.1573491, 101.7114804]).addTo(mapid);
marker.bindPopup("<b>你好<br>Hello</b><br>Address").openPopup();

// Form Validation
function checkForm(form) {
    if (!form.checkValidity()) {
        form.classList.add('was-validated');
        return false;
    }
    return true;
}

function checkNameInput(input) {
    if (input.value.trim() !== '') {
        input.classList.add('is-valid');
        input.classList.remove('is-invalid');
    } else {
        input.classList.add('is-invalid');
        input.classList.remove('is-valid');
    }
}

// Form Submission and WhatsApp Redirection
function sendMessageToWhatsApp() {
    var name = document.getElementById('name').value;
    // var phone = document.getElementById('phone').value;
    var whatsappUrl = "https://api.whatsapp.com/send?phone=%2B6582116596" + "&text=" + encodeURIComponent("Hi! My name is " + name + ". I would like to book an appointment！");
    window.open(whatsappUrl, '_blank');
}