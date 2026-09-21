import { experience, galleryItems, projects, researchImages, skills, socialLinks } from '../data/siteData.js';
import { createImageCard, createProjectCard, createSkillCategory, createSocialLink, createTimelineItem } from './components.js';

const byId = (id) => document.getElementById(id);

function renderList(targetId, items, creator) {
  const target = byId(targetId);
  if (!target) return;
  items.forEach((item) => target.appendChild(creator(item)));
}

function setupMenuToggle() {
  const toggle = document.querySelector('.menu-toggle');
  const menu = byId('site-menu');
  if (!toggle || !menu) return;
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
}

function setupLightbox() {
  const lightbox = byId('lightbox');
  const lightboxImage = byId('lightbox-image');
  const lightboxCaption = byId('lightbox-caption');
  const close = byId('lightbox-close');

  if (!lightbox || !lightboxImage || !lightboxCaption || !close) return;

  const openLightbox = ({ src, alt, caption }) => {
    lightboxImage.src = src;
    lightboxImage.alt = alt;
    lightboxCaption.textContent = caption;
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    close.focus();
  };

  const closeLightbox = () => {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    lightboxImage.src = '';
  };

  document.addEventListener('click', (event) => {
    const button = event.target.closest('.project-image-button');
    if (button) {
      openLightbox({
        src: button.dataset.src,
        alt: button.dataset.alt,
        caption: button.dataset.caption
      });
    }
  });

  close.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && lightbox.classList.contains('open')) closeLightbox();
  });
}

function setYear() {
  const year = byId('year');
  if (year) year.textContent = String(new Date().getFullYear());
}

renderList('project-cards', projects, createProjectCard);
renderList('experience-timeline', experience, createTimelineItem);
renderList('skills-grid', skills, createSkillCategory);
renderList('gallery-grid', galleryItems, createImageCard);
renderList('research-images', researchImages, (item) => createImageCard(item, 'research-image-item'));
renderList('social-links', socialLinks, createSocialLink);
renderList('footer-links', socialLinks.filter((link) => link.label !== 'Phone (Optional)'), createSocialLink);

setupMenuToggle();
setupLightbox();
setYear();
