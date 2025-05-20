# Ex.08 Design of Interactive Image Gallery
## DATE: 05-05-2025
## AIM
  To design a web application for an inteactive image gallery with minimum five images.

## DESIGN STEPS

## Step 1:

Clone the github repository and create Django admin interface

## Step 2:

Change settings.py file to allow request from all hosts.

## Step 3:

Use CSS for positioning and styling.

## Step 4:

Write JavaScript program for implementing interactivit

## Step 5:

Validate the HTML and CSS code

## Step 6:

Publish the website in the given URL.

## PROGRAM
## index.html
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Modern Image Showcase</title>
  <style>
    body {
      margin: 0;
      font-family: 'Helvetica Neue', sans-serif;
      background: linear-gradient(to right, #e3f2fd, #ffffff);
      color: #222;
    }

    h1 {
      text-align: center;
      padding: 40px 20px 20px;
      font-size: 2.5rem;
      color: #1565c0;
    }

    .gallery-container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 25px;
      padding: 30px;
      max-width: 1200px;
      margin: auto;
    }

    .gallery-item {
      text-align: center;
    }

    .gallery-item img {
      width: 100%;
      height: 240px;
      object-fit: cover;
      border-radius: 12px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      cursor: pointer;
      transition: transform 0.3s ease;
    }

    .gallery-item img:hover {
      transform: scale(1.04);
    }

    .caption {
      margin-top: 10px;
      font-size: 1rem;
      color: #555;
    }

    .modal {
      display: none;
      position: fixed;
      inset: 0;
      background-color: rgba(0, 0, 0, 0.85);
      justify-content: center;
      align-items: center;
      z-index: 999;
    }

    .modal-content {
      max-width: 90%;
      max-height: 85%;
      border-radius: 10px;
      animation: zoomIn 0.3s ease-in-out;
    }

    .close {
      position: absolute;
      top: 25px;
      right: 35px;
      font-size: 36px;
      color: white;
      cursor: pointer;
    }

    .close:hover {
      color: #ffcdd2;
    }

    @keyframes zoomIn {
      from {
        opacity: 0;
        transform: scale(0.9);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }

    @media (max-width: 600px) {
      .gallery-item img {
        height: 170px;
      }
    }
  </style>
</head>
<body>

  <h1>Interactive Image Gallery</h1>

  <div class="gallery-container">
    <div class="gallery-item">
      <img src="image1.jpg" alt="Sunrise">
      <div class="caption">Sunrise</div>
    </div>
    <div class="gallery-item">
      <img src="image2.jpg" alt="Forest">
      <div class="caption">Forest</div>
    </div>
    <div class="gallery-item">
      <img src="image3.jpg" alt="City Lights">
      <div class="caption">City Lights</div>
    </div>
    <div class="gallery-item">
      <img src="image4.jpg" alt="Desert">
      <div class="caption">Desert</div>
    </div>
    <div class="gallery-item">
      <img src="image5.jpg" alt="Ocean View">
      <div class="caption">Ocean View</div>
    </div>
  </div>

  <div class="modal" id="modal">
    <span class="close" id="closeBtn">&times;</span>
    <img class="modal-content" id="modalImg" alt="Large View">
  </div>

  <script>
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modalImg");
    const closeBtn = document.getElementById("closeBtn");
    const images = document.querySelectorAll(".gallery-item img");

    images.forEach(img => {
      img.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = img.src;
        modalImg.alt = img.alt;
      });
    });

    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  </script>

</body>
</html>
```
## index.js
```
document.addEventListener('DOMContentLoaded', () => {
  const galleryImages = document.querySelectorAll('.gallery img');
  const modalOverlay = document.getElementById('image-modal');
  const modalImage = document.getElementById('image-modal-content');
  const modalClose = document.getElementById('image-modal-close');

  // Show the modal with the clicked image
  const showModal = (src, alt = '') => {
    modalImage.src = src;
    modalImage.alt = alt;
    modalOverlay.classList.add('visible');
  };

  // Hide the modal
  const hideModal = () => {
    modalOverlay.classList.remove('visible');
    modalImage.src = '';
    modalImage.alt = '';
  };

  // Add click events to all gallery images
  galleryImages.forEach(img => {
    img.addEventListener('click', () => {
      showModal(img.src, img.alt);
    });
  });

  // Close modal on button click
  modalClose.addEventListener('click', hideModal);

  // Close modal on background click
  modalOverlay.addEventListener('click', e => {
    if (e.target === modalOverlay) {
      hideModal();
    }
  });
});
```
## style.css
```
/* Reset and base styling */
body {
    margin: 0;
    padding: 0;
    font-family: 'Helvetica Neue', sans-serif;
    background: linear-gradient(135deg, #f8f9fa, #e0e7ef);
    color: #222;
}

/* Gallery container */
.gallery-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
    padding: 60px 30px;
    max-width: 1100px;
    margin: 0 auto;
}

/* Gallery image styling */
.gallery-item img {
    width: 100%;
    height: 220px;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
}

.gallery-item img:hover {
    transform: scale(1.03);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.15);
}

/* Modal overlay */
.modal {
    display: none;
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.9);
    justify-content: center;
    align-items: center;
    z-index: 999;
    animation: fadeIn 0.3s ease-in-out;
}

/* Modal image */
.modal-content {
    max-width: 85%;
    max-height: 85%;
    border-radius: 10px;
    box-shadow: 0 0 30px rgba(255, 255, 255, 0.2);
    animation: zoomIn 0.3s ease;
}

/* Close button */
.close {
    position: absolute;
    top: 30px;
    right: 30px;
    font-size: 36px;
    color: #ffffff;
    font-weight: bold;
    cursor: pointer;
    transition: color 0.3s;
}

.close:hover,
.close:focus {
    color: #ff6666;
}

/* Animations */
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

@keyframes zoomIn {
    from { transform: scale(0.9); opacity: 0.7; }
    to { transform: scale(1); opacity: 1; }
}

/* Responsive adjustments */
@media (max-width: 600px) {
    .gallery-item img {
        height: 160px;
    }

    .close {
        top: 20px;
        right: 20px;
        font-size: 30px;
    }
}
```
## OUTPUT
![alt text](<Screenshot 2025-05-20 145308.png>)

![alt text](<Screenshot 2025-05-20 145323.png>)

![alt text](<Screenshot 2025-05-20 145437.png>)

## RESULT
  The program for designing an interactive image gallery using HTML, CSS and JavaScript is executed successfully.
