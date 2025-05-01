// assets/js/modeswitcher.js

// Function to toggle between dark and light modes
function modeSwitcher() {
  const currentTheme = localStorage.getItem('theme') || 
                      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  
  // Toggle theme
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  
  // Update localStorage
  localStorage.setItem('theme', newTheme);
  
  // Update document data attribute
  document.documentElement.setAttribute('data-theme', newTheme);
  
  // Update theme toggle images
  updateThemeImages(newTheme);
}

// Function to update theme images
function updateThemeImages(theme) {
  const themeToggleImg = document.getElementById('theme-toggle-img');
  const themeToggleImgMobile = document.getElementById('theme-toggle-img--mobile');
  
  if (theme === 'dark') {
    if (themeToggleImg) themeToggleImg.src = '/assets/img/moon.svg';
    if (themeToggleImgMobile) themeToggleImgMobile.src = '/assets/img/moon.svg';
  } else {
    if (themeToggleImg) themeToggleImg.src = '/assets/img/sun.svg';
    if (themeToggleImgMobile) themeToggleImgMobile.src = '/assets/img/sun.svg';
  }
}

// Apply theme on page load
document.addEventListener('DOMContentLoaded', function() {
  const savedTheme = localStorage.getItem('theme');
  
  // If we have a saved theme preference
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeImages(savedTheme);
  } else {
    // Otherwise use system preference
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', systemTheme);
    localStorage.setItem('theme', systemTheme);
    updateThemeImages(systemTheme);
  }
});