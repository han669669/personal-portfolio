// Leaflet OpenStreetMap
// var mapid = L.map('mapid').setView([3.1573491, 101.7114804], 13);

// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(mapid);

// var marker = L.marker([3.1573491, 101.7114804]).addTo(mapid);
// marker.bindPopup("<b>你好<br>Hello</b><br>Address").openPopup();

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
    var message = encodeURIComponent("Hi! My name is " + name + ". I would like to book an appointment！");
    var whatsappDesktopUrl = "https://api.whatsapp.com/send?phone=%2B6582116596&text=" + message;
    var whatsappMobileUrl = "whatsapp://send?phone=+6582116596&text=" + message;
    
    // Open WhatsApp Desktop URL If The Screen Width Is Greater Than 991px 
    // Else Open WhatsApp Mobile URL
    var urlToOpen = window.innerWidth > 991 ? whatsappDesktopUrl : whatsappMobileUrl;
    window.open(urlToOpen, '_blank');
}

// Owl Carousel
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        // milliseconds
        smartSpeed: 300,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1170: {
                items: 3
            }
        }
    });
});

// Parallax Scrolling Effect For The Hero Section
document.addEventListener('DOMContentLoaded', function () {
    var heroSection = document.getElementById('hero');
    window.addEventListener('scroll', function () {
        var scrollPosition = window.pageYOffset;
        heroSection.style.transform = 'translateY(' + scrollPosition * 0.2 + 'px)';
    });
});