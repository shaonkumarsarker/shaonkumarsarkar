
// JavaScript for toggling the menu
function toggleNav() {
	const navLinks = document.querySelector('.nav-links');
	navLinks.classList.toggle('active');
}
const items = [
    { category: 'post-design', image: 'https://img.freepik.com/premium-psd/digital-marketing-new-web-banner-website-poster-marketing-services-digital-marketing-agency-web_928674-71.jpg?w=826', title: 'Digital marketing web agency.', link: 'https://www.freepik.com/premium-psd/digital-marketing-new-web-banner-website-poster-marketing-services-digital-marketing-agency-web_133263449.htm#fromView=author&page=1&position=50&uuid=029fe6f9-bdd8-4316-b052-f499a56c4caa' },
    { category: 'post-design', image: 'https://img.freepik.com/premium-psd/free-digital-marketing-agency-social-media-post-design-psd-template-digital-marketing-poster_928674-107.jpg?w=826', title: 'Digital marketing agency social media post design', link: 'https://www.freepik.com/premium-psd/free-digital-marketing-agency-social-media-post-design-psd-template-digital-marketing-poster_159596562.htm#from_view=detail_alsolike' },
    { category: 'post-design', image: 'https://img.freepik.com/premium-psd/digital-marketing-post-psd-template-free-download-digital-marketing-social-media-post_928674-105.jpg?w=826', title: 'Digital marketing post psd template', link: 'https://www.freepik.com/premium-psd/digital-marketing-post-psd-template-free-download-digital-marketing-social-media-post_158078508.htm#fromView=author&page=1&position=9&uuid=029fe6f9-bdd8-4316-b052-f499a56c4caa' },
    { category: 'youtube-design', image: 'https://img.freepik.com/premium-psd/free-psd-new-modern-glow-effect-youtube-thumbnail-designa-poster-video-called-no-business_928674-422.jpg?w=1380', title: 'Modern glow effect Youtube Thumbnail Design', link: 'https://www.freepik.com/premium-psd/free-psd-new-modern-glow-effect-youtube-thumbnail-designa-poster-video-called-no-business_387793084.htm#fromView=author&page=1&position=27&uuid=029fe6f9-bdd8-4316-b052-f499a56c4caa' },
    { category: 'youtube-design', image: 'https://img.freepik.com/premium-psd/free-premium-quality-psd-poster-woman-with-picture-woman-with-big-smile-her-face_928674-426.jpg?w=1380', title: 'Modern glow effect Youtube Thumbnail Design', link: 'https://www.freepik.com/premium-psd/free-premium-quality-psd-poster-woman-with-picture-woman-with-big-smile-her-face_387793272.htm#fromView=author&page=1&position=28&uuid=029fe6f9-bdd8-4316-b052-f499a56c4caa' },
    { category: 'youtube-design', image: 'https://img.freepik.com/premium-psd/man-with-beard-glasses-is-looking-man-with-glasses-his-face_928674-424.jpg?w=1380', title: 'Modern glow effect Youtube Thumbnail Design', link: 'https://img.freepik.com/premium-psd/man-with-beard-glasses-is-looking-man-with-glasses-his-face_928674-424.jpg?w=1380' },
    { category: 'business-card', image: 'https://img.freepik.com/premium-psd/business-card-with-green-blue-background-that-says-business-card_928674-163.jpg?w=740', title: 'Modern and clean business card', link: 'https://www.freepik.com/premium-psd/business-card-with-green-blue-background-that-says-business-card_259133666.htm#fromView=author&page=1&position=23&uuid=029fe6f9-bdd8-4316-b052-f499a56c4caa' },
    { category: 'business-card', image: 'https://img.freepik.com/premium-vector/modern-clean-business-card-free-vector-blue-yellow-visiting-card-template-id-card-designer_928674-94.jpg?w=826', title: 'Modern and clean business card', link: 'https://www.freepik.com/premium-vector/modern-clean-business-card-free-vector-blue-yellow-visiting-card-template-id-card-designer_149699038.htm#fromView=author&page=1&position=0&uuid=b65e99d7-0022-4d8f-81b8-dc63da649d8e' },
    { category: 'business-card', image: 'https://img.freepik.com/premium-psd/business-card-with-red-white-background-that-says-business-card_928674-157.jpg?w=740', title: 'A business card with a red and white background that says business card', link: 'https://www.freepik.com/premium-psd/business-card-with-red-white-background-that-says-business-card_259133570.htm#fromView=author&page=1&position=1&uuid=b65e99d7-0022-4d8f-81b8-dc63da649d8e'},
    // Add more items as per your previous examples
];

let currentTab = 'all';
let currentPage = 0;
const itemsPerPage = 9;

const grid = document.querySelector('.portfolio-grid');
const popup = document.querySelector('.popup');
const popupImg = document.querySelector('.popup img');
const popupTitle = document.querySelector('.popup-title');
const downloadButton = document.querySelector('.download-button');
const cancelButton = document.querySelector('.cancel-button');
const nextButton = document.querySelector('.next-button');
const prevButton = document.querySelector('.prev-button');

const renderItems = () => {
    const filteredItems = items.filter(item => currentTab === 'all' || item.category === currentTab);
    const paginatedItems = filteredItems.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);
    grid.innerHTML = '';

    paginatedItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('portfolio-item');
        itemElement.dataset.title = item.title;
        itemElement.dataset.link = item.link;

        const image = document.createElement('img');
        image.src = item.image;
        itemElement.appendChild(image);
        grid.appendChild(itemElement);
    });

    prevButton.disabled = currentPage === 0;
    nextButton.disabled = currentPage * itemsPerPage + itemsPerPage >= filteredItems.length;
};

const openPopup = (imageSrc, title, link) => {
    popup.style.display = 'flex';
    popupImg.src = imageSrc;
    popupTitle.textContent = title;
    downloadButton.onclick = () => window.open(link, '_blank');
};

cancelButton.addEventListener('click', () => {
    popup.style.display = 'none';
});

nextButton.addEventListener('click', () => {
    currentPage++;
    renderItems();
});

prevButton.addEventListener('click', () => {
    currentPage--;
    renderItems();
});

document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
        currentTab = button.dataset.tab;
        currentPage = 0;
        document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        renderItems();
    });
});

grid.addEventListener('click', e => {
    if (e.target.closest('.portfolio-item')) {
        const item = e.target.closest('.portfolio-item');
        openPopup(item.querySelector('img').src, item.dataset.title, item.dataset.link);
    }
});

renderItems();  // Initial rendering

// Portfolio Section 

// Custom cursor

// Select the custom cursor elements
const dot = document.querySelector('.cursor-dot');
const outline = document.querySelector('.cursor-dot-outline');

// Variables to store positions
let dotX = 0, dotY = 0; // Dot position
let outlineX = 0, outlineY = 0; // Outline position

// Update positions on mousemove
document.addEventListener('mousemove', (e) => {
  dotX = e.clientX;
  dotY = e.clientY;

  // Smoothly transition outline to the dot's position
  outlineX += (dotX - outlineX) * 0.2;
  outlineY += (dotY - outlineY) * 0.2;

  // Update styles
  dot.style.transform = `translate(${dotX}px, ${dotY}px)`;
  outline.style.transform = `translate(${outlineX}px, ${outlineY}px)`;
});

// Optional: Add hover effects
document.querySelectorAll('a, h1').forEach((element) => {
  element.addEventListener('mouseenter', () => {
    dot.style.backgroundColor = 'red';
    outline.style.borderColor = 'red';
  });
  element.addEventListener('mouseleave', () => {
    dot.style.backgroundColor = '#000';
    outline.style.borderColor = '#000';
  });
});
// Custom cursor End

// Blog Section Designed



//Blog Section Designed END

// Back To Top
// script.js
const backToTopButton = document.getElementById("backToTop");

// Show or hide the button based on scroll position
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

// Smooth scroll to top when the button is clicked
backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
//Back To Top End

//smooth scrolling effect
document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});

//smooth scrolling effect End

//Company Section


const track = document.querySelector("#track");
const logoSlide = track.querySelector(".logo-slide");

// Clone the logo slide multiple times
for (let i = 0; i < 4; i++) {
  track.appendChild(logoSlide.cloneNode(true));
}

let scrollPosition = 0;
const speed = 1;
let isPlaying = true;
let animationFrameId = null;

function scroll() {
  if (!isPlaying) return; // Stop if paused

  scrollPosition -= speed;
  const slideWidth = logoSlide.offsetWidth;
  if (Math.abs(scrollPosition) >= slideWidth) {
    scrollPosition += slideWidth;
  }
  track.style.transform = `translateX(${scrollPosition}px)`;
  animationFrameId = requestAnimationFrame(scroll);
}

// Updated hover handlers
track.addEventListener("mouseenter", () => {
  isPlaying = false;
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }
});

track.addEventListener("mouseleave", () => {
  isPlaying = true;
  scroll(); // Restart the animation
});

// Start the animation
scroll();



//Contact Us Section END

//Preloading Effect

window.onload = function () {
  // After the page has loaded, hide the preloader and show the content
  document.getElementById('preloader').classList.add('hide-preloader');
  document.getElementById('content').classList.add('show-content');
  
  // Optionally, change the custom title dynamically
  // Example: Change preloader title after 2 seconds
  setTimeout(() => {
      document.getElementById('preloader-title').textContent = 'Almost There...';
  }, 2000);
};

//Preloading Effect END


//PopUp YouTube Button


document.addEventListener("DOMContentLoaded", () => {
  const openModal = document.getElementById("openModal");
  const closeModal = document.getElementById("closeModal");
  const modal = document.getElementById("videoModal");
  const iframe = document.getElementById("videoFrame");

  // Open modal and play video
  openModal.addEventListener("click", () => {
    modal.style.display = "flex";
    // Play the video when modal opens
    iframe.src += "?autoplay=1";  // Adding autoplay query parameter to play the video automatically
  });

  // Close modal and stop video
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
    iframe.src = iframe.src.split("?")[0];  // Stop video by removing autoplay
  });

  // Close modal when clicking outside the modal content
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
      iframe.src = iframe.src.split("?")[0];  // Stop video by removing autoplay
    }
  });
});




//PopUp YouTube Button END


// <!--Hire Me Button With Image--> */

// Get elements
const popupFormHHr = document.getElementById('popup-formHHr');
const openPopupBtnHHr = document.querySelector('.open-popup-btnHHr');
const closeBtnHHr = document.getElementById('close-btnHHr');

// Open popup
openPopupBtnHHr.addEventListener('click', () => {
  popupFormHHr.style.display = 'flex';
  setTimeout(() => {
    popupFormHHr.classList.add('show');
    popupFormHHr.classList.remove('hide');
  }, 10); // Allow display time before animation
});

// Close popup (X button)
closeBtnHHr.addEventListener('click', closePopup);

// Close popup (click outside)
window.addEventListener('click', (e) => {
  if (e.target === popupFormHHr) closePopup();
});

// Close popup function with animation
function closePopup() {
  popupFormHHr.classList.add('hide');
  popupFormHHr.classList.remove('show');
  setTimeout(() => {
    popupFormHHr.style.display = 'none';
  }, 500); // Match the CSS transition duration
}
// <!--Hire Me Button With Image END--> */




//<!--Image Slider using -->

const slides = document.querySelectorAll('.ss-gallery-slide');
const thumbnails = document.querySelectorAll('.ss-thumbnail');
let currentIndex = 0;
const totalSlides = slides.length;

// Function to update the active slide and thumbnail
function updateSlider(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) slide.classList.add('active');
  });

  thumbnails.forEach((thumbnail, i) => {
    thumbnail.classList.remove('active');
    if (i === index) thumbnail.classList.add('active');
  });
}

// Initialize first slide as active
updateSlider(currentIndex);

// Auto-loop for the slides
function autoLoop() {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlider(currentIndex);
}

// Start auto-loop every 3 seconds
let sliderInterval = setInterval(autoLoop, 3000);

// Manual control via thumbnail clicks
thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener('click', () => {
    clearInterval(sliderInterval); // Stop auto-loop
    updateSlider(index);
    currentIndex = index; // Update current index
    sliderInterval = setInterval(autoLoop, 3000); // Restart auto-loop
  });
});



//<!--Image Slider using END -->
