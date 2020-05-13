---
layout: default
---

<div class="card-deck">
  {% for post in site.posts %}

  <div class="card">
    <div class="card-body">
      <a href="{{ post.url }}">
        <h5 class="card-title">{{ post.title }}</h5>
      </a>
      <p class="card-text">{{ post.excerpt }}</p>
    </div>
    <div class="card-footer"><small class="text-muted">{{ post.date | date_to_string }}</small></div>
  </div>

  {% endfor %}
  <div>