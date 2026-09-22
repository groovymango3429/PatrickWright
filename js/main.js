import { experience, galleryItems, projects, researchImages, skills, socialLinks } from './siteData.js';
import {
  createEmptyState,
  createImageCard,
  createProjectCard,
  createSkillCategory,
  createSocialLink,
  createTimelineItem
} from './components.js';

const byId = (id) => document.getElementById(id);

function renderList(targetId, items, creator) {
  const target = byId(targetId);
  if (!target) return;
  target.innerHTML = '';
  items.forEach((item) => target.appendChild(creator(item)));
}

function renderImageSection(targetId, items, emptyMessage, className) {
  const target = byId(targetId);
  if (!target) return;
  target.innerHTML = '';

  if (!items.length) {
    target.appendChild(createEmptyState(emptyMessage));
    return;
  }

  items.forEach((item) => target.appendChild(createImageCard(item, className)));
}

function setupMenuToggle() {
  const toggle = document.querySelector('.menu-toggle');
  const menu = byId('site-menu');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  menu.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
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
    if (!button || !button.dataset.src) return;
    openLightbox({
      src: button.dataset.src,
      alt: button.dataset.alt,
      caption: button.dataset.caption
    });
  });

  close.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && lightbox.classList.contains('open')) closeLightbox();
  });
}

function setupRevealAnimations() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
}

function setYear() {
  const year = byId('year');
  if (year) year.textContent = String(new Date().getFullYear());
}

renderList('project-cards', projects, createProjectCard);
renderList('experience-timeline', experience, createTimelineItem);
renderList('skills-grid', skills, createSkillCategory);
renderList('social-links', socialLinks, createSocialLink);
renderList('footer-links', socialLinks.filter((link) => link.label !== 'Phone (Optional)'), createSocialLink);

const featuredImages = galleryItems.filter((item) => item.featured);
renderImageSection('featured-images', featuredImages, 'Project images will be added here.', 'featured-image-item');
renderImageSection('gallery-grid', galleryItems, 'Project images will be added here.', 'gallery-item');
renderImageSection('research-images', researchImages, 'Project images will be added here.', 'research-image-item');

setupMenuToggle();
setupLightbox();
setupRevealAnimations();
setYear();
