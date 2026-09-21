export function createSocialLink(item) {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.href = item.href;
  a.textContent = `${item.label}: ${item.value}`;
  if (item.href.startsWith('http')) {
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
  }
  li.appendChild(a);
  return li;
}

export function createProjectCard(project) {
  const article = document.createElement('article');
  article.className = 'card';
  article.innerHTML = `
    <h3><a href="${project.links.page}">${project.title}</a></h3>
    <p><strong>${project.role}</strong> · ${project.organization}</p>
    <p><strong>Dates:</strong> ${project.dates}</p>
    <p>${project.summary}</p>
    <p><strong>Engineering Problem:</strong> ${project.problem}</p>
    <p><strong>Approach:</strong> ${project.approach}</p>
    <p><strong>Results:</strong> ${project.results}</p>
    <p><strong>Skills:</strong> ${project.skills.join(', ')}</p>
    <p><strong>Tech:</strong> ${project.technologies.join(', ')}</p>
    <p><a href="${project.links.page}">Open project details →</a></p>
  `;
  return article;
}

export function createTimelineItem(item) {
  const li = document.createElement('li');
  li.innerHTML = `
    <article class="card">
      <h3>${item.position}</h3>
      <p><strong>${item.organization}</strong> · ${item.location}</p>
      <p><strong>Dates:</strong> ${item.dates}</p>
      <p>${item.description}</p>
      <p><strong>Accomplishments:</strong> ${item.accomplishments}</p>
      <p><strong>Technical Skills:</strong> ${item.technicalSkills}</p>
    </article>
  `;
  return li;
}

export function createSkillCategory(skillCategory) {
  const article = document.createElement('article');
  article.className = 'card';
  const listItems = skillCategory.items.map((item) => `<li>${item}</li>`).join('');
  article.innerHTML = `
    <h3>${skillCategory.category}</h3>
    <ul class="skill-list">${listItems}</ul>
  `;
  return article;
}

export function createImageCard(item, className = 'gallery-item') {
  const article = document.createElement('article');
  article.className = `${className} card`;
  article.innerHTML = `
    <button class="project-image-button" data-src="${item.src}" data-alt="${item.alt}" data-caption="${item.caption}">
      <img src="${item.src}" alt="${item.alt}" loading="lazy" width="640" height="400" />
    </button>
    <p class="gallery-caption"><strong>${item.category ?? ''}</strong> ${item.caption}</p>
  `;
  return article;
}
