function setupDetailPageLightbox() {
  const figures = document.querySelectorAll('main figure');
  figures.forEach((figure) => {
    const image = figure.querySelector('img');
    if (!image || image.closest('.project-image-button')) return;

    const button = document.createElement('button');
    button.className = 'project-image-button';
    button.type = 'button';
    button.dataset.src = image.getAttribute('src') || '';
    button.dataset.alt = image.getAttribute('alt') || 'Project image';
    const caption = figure.querySelector('figcaption');
    button.dataset.caption = caption ? caption.textContent ?? '' : '';

    image.replaceWith(button);
    button.appendChild(image);
  });

  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.id = 'lightbox';
  lightbox.setAttribute('aria-hidden', 'true');
  lightbox.setAttribute('role', 'dialog');
  lightbox.setAttribute('aria-label', 'Expanded image view');
  lightbox.innerHTML = `
    <button class="lightbox-close" id="lightbox-close" aria-label="Close image">×</button>
    <img id="lightbox-image" alt="Expanded project image" />
    <p id="lightbox-caption"></p>
  `;

  document.body.appendChild(lightbox);

  const lightboxImage = lightbox.querySelector('#lightbox-image');
  const lightboxCaption = lightbox.querySelector('#lightbox-caption');
  const closeButton = lightbox.querySelector('#lightbox-close');

  const openLightbox = (button) => {
    lightboxImage.src = button.dataset.src;
    lightboxImage.alt = button.dataset.alt;
    lightboxCaption.textContent = button.dataset.caption || '';
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    closeButton.focus();
  };

  const closeLightbox = () => {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    lightboxImage.src = '';
  };

  document.addEventListener('click', (event) => {
    const button = event.target.closest('.project-image-button');
    if (button) openLightbox(button);
  });

  closeButton.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && lightbox.classList.contains('open')) closeLightbox();
  });
}

setupDetailPageLightbox();
