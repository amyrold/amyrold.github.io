---
layout: Post
permalink: /portfolio
title: Portfolio
feedformat: card
---

A collection of my projects with detailed descriptions and GitHub integration.

<div class="search-container">
  <input type="text" id="portfolio-search" class="search-input" placeholder="Search projects.." />
</div>

## Featured Projects

<div class="portfolio-grid" id="featured-projects">
{% assign featured_projects = site.projects | where: "featured", true | sort: "date" | reverse %}
{% for project in featured_projects %}
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

## All Projects

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
