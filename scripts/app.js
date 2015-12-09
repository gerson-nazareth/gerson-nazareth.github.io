function onDocumentLoad() {
  onHomeClick();
  cssSlidy();
}

function hideAllSections() {
  document.getElementById('title').style.display = 'none';
  document.getElementById('about').style.display = 'none';
  document.getElementById('skills').style.display = 'none';
  document.getElementById('experience').style.display = 'none';
  document.getElementById('contact').style.display = 'none';
}


function onHomeClick() {
  hideAllSections();
  document.getElementById('title').style.display = 'block';
}

function onAboutClick() {
  hideAllSections();
  document.getElementById('about').style.display = 'block';
}

function onSkillsClick() {
  hideAllSections();
  document.getElementById('skills').style.display = 'block';
}

function onExperienceClick() {
  hideAllSections();
  document.getElementById('experience').style.display = 'block';
}

function onContactClick() {
  hideAllSections();
  document.getElementById('contact').style.display = 'block';
}
