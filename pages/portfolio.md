---
layout: Post
permalink: /portfolio
title: Portfolio
feedformat: card
---

<a href="/" class="home-btn">← HOME</a>

# Portfolio

A collection of my projects with detailed descriptions and GitHub integration.

<div class="search-container">
  <input type="text" id="search-input" class="search-input" placeholder="Search projects.." />
</div>

## Featured Projects

<div class="feed-grid" id="feed-list">
{% assign featured_projects = site.projects | where: "featured", true | sort: "date" | reverse %}
{% for project in featured_projects %}
  <div class="feed-item">
    <h2><a href="{{ project.url }}">{{ project.title }}</a></h2>
    <p>{{ project.excerpt | strip_html | truncate: 200 }}</p>
    
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

<div class="feed-grid">
{% assign all_projects = site.projects | where_exp: "item", "item.featured != true" | sort: "date" | reverse %}
{% for project in all_projects %}
  <div class="feed-item">
    <h2><a href="{{ project.url }}">{{ project.title }}</a></h2>
    <p>{{ project.excerpt | strip_html | truncate: 150 }}</p>
    
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
  // Simple search functionality
  document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const feedItems = document.querySelectorAll('.feed-item');
    
    searchInput.addEventListener('input', function() {
      const searchTerm = this.value.toLowerCase();
      
      feedItems.forEach(function(item) {
        const title = item.querySelector('h2 a').textContent.toLowerCase();
        const content = item.querySelector('p').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || content.includes(searchTerm)) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
</script>
