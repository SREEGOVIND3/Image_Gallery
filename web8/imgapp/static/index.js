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
