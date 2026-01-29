---
title: Home
layout: home
nav_order: 1
---

# Reproducible research made easy
{: .fs-9 }

RECAP helps social scientists start projects with fully reproducible, ready-to-use research environments.
{: .fs-6 .fw-300 }

RECAP (Reproducible Environments for Collaborative Academic Projects) generates starter templates for common academic use cases — from assignments to full-blown research papers.

Our templates promote good research practices that enable effective workflows and are key to reproducibility. These practices include [version control](/docs/version-control), built-in [dependency management](/docs/dependency-management), and automated [build pipelines](/docs/build). 

Each template provides a complete, [containerized environment](/docs/containers), ensuring that the analysis can be replicated, that all collaborators share the exact same software, and that templates can not only be used locally with popular IDEs such as VS Code or RStudio, but also opened directly in the cloud (e.g., GitHub Codespaces).

[Get started](#getting-started){: .btn .btn-primary .fs-5 .mb-4 .mb-md-0 }


# Getting started

<div id="recap-form" class="recap-form">
  <div class="form-section">
    <h2>Choose your template</h2>
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

  <a id="submitBtn" class="recap-submit-btn btn btn-primary fs-5" style="display: none;">
    <div class="submit-label">Open your template</div>
    <div class="submit-selection text-secondary"></div>
  </a>
</div>

<style>

#recap-form {
  max-width: 500px
}

/* .form-section {
  margin-bottom: 3rem;
} */

.form-section h2 {
  /* font-size: 1.5rem; */
  margin-top: 1.5rem;
  /* font-weight: 600; */
}

/* Template buttons styling */
.template-buttons {
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
.recap-submit-btn {
  display: inline-block;
  text-align: center;
  margin-top: 2rem;
  text-decoration: none !important;
}

.submit-label {
  font-weight: 600;
  font-size: 1rem;
}

.submit-selection {
  font-size: 0.85rem;
  font-weight: normal;
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('recap-form');
  const templateButtons = document.querySelectorAll('.template-card');
  const languageButtons = document.querySelectorAll('.language-btn:not(:disabled)');
  const submitBtn = document.getElementById('submitBtn');
  const submitSelection = document.querySelector('.submit-selection');
  
  let selectedTemplate = null;
  let selectedLanguage = null;
  
  function updateForm() {
    if (selectedTemplate && selectedLanguage) {
      const templateName = selectedTemplate.charAt(0).toUpperCase() + selectedTemplate.slice(1);
      const languageName = selectedLanguage.toUpperCase();
      submitSelection.textContent = templateName + ' • ' + languageName;
      submitBtn.href = `https://github.com/recap-org/template-${selectedLanguage}-${selectedTemplate}`;
      submitBtn.style.display = 'inline-block';
    } else {
      submitBtn.style.display = 'none';
    }
  }
  
  templateButtons.forEach(button => {
    button.addEventListener('click', function() {
      templateButtons.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      selectedTemplate = this.dataset.template;
      updateForm();
    });
  });
  
  languageButtons.forEach(button => {
    button.addEventListener('click', function() {
      languageButtons.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      selectedLanguage = this.dataset.language;
      updateForm();
    });
  });
});
</script>
