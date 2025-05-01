---
layout: Post
permalink: /portfolio
title: Portfolio
---

<div class="portfolio-content">
  <div class="search-container">
    <input type="text" id="portfolio-search" class="search-input" placeholder="Search projects.." />
  </div>

  <h2>Featured Projects</h2>

  <div class="portfolio-grid" id="featured-projects">
  {% assign featured_projects = site.projects | where: "featured", true | sort: "date" | reverse %}
  {% for project in featured_projects %}
    <div class="portfolio-item" data-searchable="{{ project.title }} {{ project.tags | join: ' ' }} {{ project.content | strip_html }}">
      <h2><a href="{{ project.url }}">{{ project.title }}</a></h2>
      <p>{{ project.content | strip_html | truncate: 150 }}</p>
      
      {% if project.tags %}
      <div class="project-tags">
        {% for tag in project.tags %}
        <span class="tag">{{ tag }}</span>
        {% endfor %}
      </div>
      {% endif %}
      
      <a href="{{ project.url }}" class="read-more">View Project →</a>
    </div>
  {% endfor %}
  </div>

  <h2>All Projects</h2>

  <div class="portfolio-grid" id="all-projects">
  {% assign regular_projects = site.projects | where_exp: "item", "item.featured != true" | sort: "date" | reverse %}
  {% for project in regular_projects %}
    <div class="portfolio-item" data-searchable="{{ project.title }} {{ project.tags | join: ' ' }} {{ project.content | strip_html }}">
      <h2><a href="{{ project.url }}">{{ project.title }}</a></h2>
      <p>{{ project.excerpt | strip_html | truncate: 120 }}</p>
      
      {% if project.tags %}
      <div class="project-tags">
        {% for tag in project.tags %}
        <span class="tag">{{ tag }}</span>
        {% endfor %}
      </div>
      {% endif %}
      
      <a href="{{ project.url }}" class="read-more">View Project →</a>
    </div>
  {% endfor %}
  </div>

  <script>
    // Portfolio search functionality
    document.addEventListener('DOMContentLoaded', function() {
      const searchInput = document.getElementById('portfolio-search');
      if (!searchInput) return;
      
      const portfolioItems = document.querySelectorAll('.portfolio-item');
      
      searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        
        portfolioItems.forEach(function(item) {
          const searchableContent = item.getAttribute('data-searchable').toLowerCase();
          
          if (searchableContent.includes(searchTerm)) {
            item.style.display = '';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  </script>
</div>
