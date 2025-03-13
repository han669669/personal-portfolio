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

// Profile Photo Animation
document.addEventListener('DOMContentLoaded', function () {
    let currentIndex = 0;
    const images = document.querySelectorAll('.profile-photo .profile-img');
    const changeImage = () => {
        images[currentIndex].style.opacity = 0;
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].style.opacity = 1;
    };
    setInterval(changeImage, 3000); // Change image every 3 seconds
});


// Imgur API Integration
const accessToken = "9528be1d30f6edb64eb4f80c18b2bfa1ebbaa934";
const apiUrl = "https://api.imgur.com/3";

var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${accessToken}`);

var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
};

let categories = new Set(['all']); // Initialize with 'all' category
const photoCategoriesElement = document.getElementById('photoCategories');

function createCategoryButton(category) {
    const categoryElement = document.createElement('span');
    categoryElement.textContent = category;
    categoryElement.className = 'photo-category';
    categoryElement.onclick = () => filterPhotos(category);
    photoCategoriesElement.appendChild(categoryElement);
}

function filterPhotos(category) {
    document.querySelectorAll('.photo-category').forEach(categoryElement => {
        categoryElement.classList.remove('active');
    });
    event.target.classList.add('active');

    const allImages = document.querySelectorAll('#imgGallery img');
    allImages.forEach(img => {
        img.style.display = img.getAttribute('data-category').toLowerCase() === category || category === 'all' ? '' : 'none';
    });
}

// Function to show the enlarged image
function showEnlargedImage(src) {
    const overlay = document.getElementById('imageOverlay');
    const enlargedImage = document.getElementById('enlargedImage');
    enlargedImage.src = src;
    overlay.style.display = 'flex';
}

// Function to hide the enlarged image
function hideEnlargedImage() {
    const overlay = document.getElementById('imageOverlay');
    overlay.style.display = 'none';
}

// Fetch images from Imgur API
fetch(`${apiUrl}/account/me/images`, requestOptions)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(result => {
        const photos = result.data;
        const imgGallery = document.getElementById('imgGallery');
        photos.forEach(photo => {
            const category = (photo.title || 'Uncategorized').toLowerCase();
            categories.add(category); // Add new category from title
            const imgElement = document.createElement('img');
            imgElement.src = photo.link;
            imgElement.setAttribute('data-category', category);
            imgElement.onclick = () => showEnlargedImage(photo.link); // Add onclick event to show enlarged image
            imgGallery.appendChild(imgElement);
        });

        categories.forEach(createCategoryButton);
        // Activate the second 'photo-category' by default, if it exists
        const categoryButtons = document.querySelectorAll('.photo-category');
        if (categoryButtons.length >= 2) {
            categoryButtons[1].classList.add('active');
            categoryButtons[1].click();
        }
    })
    .catch(error => {
        console.error("Error fetching images:", error.message);
    });

// Appointlet Button Integration
document.addEventListener('DOMContentLoaded', (event) => {
    const appointletButton = document.querySelector('.appointlet-button');
    appointletButton.style.display = 'block';
});
