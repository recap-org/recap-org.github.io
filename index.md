---
title: Home
layout: home
nav_order: 1
---

# Reproducible research made easy
{: .fs-9 }

RECAP helps social scientists start projects with fully reproducible, ready-to-use research environments.
{: .fs-6 .fw-300 }

RECAP (Reproducible Environments for Collaborative Academic Projects) generates starter templates for common academic use cases — from short assignments to full-blown research projects.

RECAP templates promote good research practices that enable effective workflows and support reproducibility. These include [version control](/docs/version-control), automated [build pipelines](/docs/build), and, for larger projects, explicit [dependency management](/docs/dependency-management). All of these practices are built into the templates, but none are mandatory: you can start simple and adopt additional structure as your project grows.

Each template provides a complete, [containerized environment](/docs/running-templates). This ensures that analyses can be replicated, that collaborators share the exact same software setup, and that projects can be run either locally with familiar IDEs such as VS Code or RStudio, or directly in the cloud (for example, using GitHub Codespaces).

# Getting started

<div id="recap-form" class="recap-form">
  <div class="form-section">
    <h2>Choose your template</h2>
    <p class="text-muted">Not sure which one to pick? <a href="/docs/choosing-templates">Learn how Small, Medium, and Large differ.</a></p>
    <div class="template-buttons" id="templateButtons">
      <button type="button" class="template-card" data-template="small">
        <div class="template-name">Small</div>
        <div class="template-details">
          <div class="template-description">A single file that runs an analysis and produces a reproducible report</div>
          <div class="template-usecase">For: homework and short assignments</div>
        </div>
      </button>
      <button type="button" class="template-card" data-template="medium">
        <div class="template-name">Medium</div>
        <div class="template-details">
          <div class="template-description">A structured workflow with separate cleaning and analysis steps, producing a final report</div>
          <div class="template-usecase">For: final project</div>
        </div>
      </button>
      <button type="button" class="template-card" data-template="large">
        <div class="template-name">Large</div>
        <div class="template-details">
          <div class="template-description">A full research pipeline with multiple scripts and deliverables (paper, appendix, slides)</div>
          <div class="template-usecase">For: thesis and long-term collaborative research</div>
        </div>
      </button>
    </div>
  </div>

  <div class="form-section">
    <h2>Choose your language</h2>
    <div class="language-buttons" id="languageButtons">
      <button type="button" class="language-btn" data-language="r">
        <img src="assets/static/r.svg" alt="R logo" class="language-logo">
        <span>R</span>
      </button>
      <button type="button" class="language-btn" data-language="stata" disabled>
        <img src="assets/static/stata.svg" alt="Stata logo" class="language-logo">
        <span>Stata</span>
        <span class="coming-soon-badge">coming soon</span>
      </button>
      <button type="button" class="language-btn" data-language="python" disabled>
        <img src="assets/static/python.svg" alt="Python logo" class="language-logo">
        <span>Python</span>
        <span class="coming-soon-badge">coming soon</span>
      </button>
    </div>
  </div>

  <div class="button-container" style="display: none;">
    <a id="submitBtn" class="btn btn-primary fs-5" target="_blank">
      Use this template
    </a>
    <a id="detailsBtn" href="/docs/running-templates" class="btn btn-secondary fs-5">
      How to run this template
    </a>
  </div>
</div>

<style>

.form-section h2 {
  margin-top: 1.5rem;
}

/* Template buttons styling */
.template-buttons {
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.template-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  border: 2px solid var(--border-color, #d0d0d0);
  border-radius: 8px;
  background: var(--body-background-color);
  cursor: pointer;
  text-align: left;
  transition: all 0.2s ease;
  width: 100%;
  box-sizing: border-box;
}

.template-card:hover:not(:disabled) {
  border-color: var(--link-color, #0969da);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.template-card.active {
  border-color: var(--link-color, #0969da);
  background-color: var(--search-background-color, #f5f5f5);
}

.template-name {
  min-width: 80px;
  font-weight: 600;
  font-size: 1.1rem;
}

.template-details {
  flex: 1;
}

.template-description {
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
  color: var(--body-text-color);
}

.template-usecase {
  font-size: 0.85rem;
  color: var(--text-secondary-color, #666);
}

/* Language buttons styling */
.language-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.language-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1.5rem;
  border: 2px solid var(--border-color, #d0d0d0);
  border-radius: 8px;
  background: var(--body-background-color);
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  font-size: 1rem;
  font-weight: 500;
  color: var(--body-text-color);
}

.language-btn:not(:disabled):hover {
  border-color: var(--link-color, #0969da);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.language-btn.active {
  border-color: var(--link-color, #0969da);
  background-color: var(--search-background-color, #f5f5f5);
}

.language-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.language-logo {
  width: 40px;
  height: 40px;
  object-fit: contain;
}

.coming-soon-badge {
  font-size: 0.7rem;
  color: var(--text-secondary-color, #666);
  font-weight: 400;
  position: absolute;
  bottom: 4px;
}

/* Submit button styling */
.button-container {
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
  align-items: stretch;
}

#submitBtn {
  text-align: center;
}

#detailsBtn {
  text-align: center;
}
</style>

<script src="/assets/js/form.js"></script>
