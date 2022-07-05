---
layout: "default"
eleventyNavigation:
  key: Literatur
  order: 5
---

# Literatur

<ul>
  {% for pdf in literatur %}
  <li><a href="files/{{ pdf.src }}">{{ pdf.name }}</a></li>
  {% endfor %}
</ul>

_Hinweis: Der Text ist noch nicht durch ein deutschsprachiges UA-Literaturkomitee bestätigt. Verschiedene Versionen sind in den Meetings zur Zeit im Umlauf._
