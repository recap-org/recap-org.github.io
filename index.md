---
title: Home
layout: home
nav_order: 1
---

# Reproducible research made easy
{: .fs-9 }

RECAP helps social scientists start projects with fully reproducible, ready-to-use research environments.
{: .fs-6 .fw-300 }

RECAP (Reproducible Environments for Collaborative Academic Projects) generates starter templates for common academic use cases — from research papers to teaching materials and in-class data activities.

Each template provides a complete, [containerized environment](/docs/containers), ensuring that all collaborators share the exact same software setup. Templates can be opened directly in the cloud (e.g., GitHub Codespaces) or used locally with popular IDEs such as VS Code or RStudio.

Every environment includes a preconfigured statistical language — R, Python, or Stata — along with LaTeX for writing.

Beyond technical reproducibility, RECAP promotes good research practices with [version control](/docs/version-control), built-in [dependency management](/docs/dependency-management), and automated [build pipelines](/docs/build). Not familiar with those yet? Our tutorials and video capsules will help you get started quickly and teach effectively.

[Try it out online](https://github.com/recap-org/demo-template){: .btn .btn-secondary .fs-5 .mb-4 .mb-md-0 .mr-2 }
[Get started](#getting-started){: .btn .btn-primary .fs-5 .mb-4 .mb-md-0 }


# Getting started

<!-- Multi-panel template form -->
<form id="template-selector" action="#" method="get" class="template-form" aria-labelledby="template-form-heading" data-backend="https://recap-org-backend.onrender.com">
	<!-- Panel 1: Choose your template -->
<section id="panel-1" class="form-panel">
<h2 id="template-form-heading">1. Choose your template</h2>
<div class="panel-header" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
	<p class="form-instructions" style="margin:0;">Select at least one statistical language and one use case.</p>
</div>
<div id="form-badges" style="display:flex; gap:.5rem; align-items:center; flex-wrap:wrap; margin-bottom:1.5rem;">
	<img alt="R" src="https://img.shields.io/badge/Language-R-276DC3?logo=R&logoColor=white" />
	<img id="badge-latex" alt="LaTeX" src="https://img.shields.io/badge/LaTeX-auto-008080?logo=latex&logoColor=white" />
	<img alt="Codespace" src="https://img.shields.io/badge/Dev%20Container-ready-0DB7ED?logo=github&logoColor=white" />
</div>

<!-- Statistical languages -->
<fieldset>
  <legend>Statistical language(s)</legend>

  <div class="option-row">
    <input type="checkbox" id="lang-r" name="languages" value="R" checked>
    <label for="lang-r" class="option-label">
      <img class="option-logo" src="assets/static/r.svg" alt="R logo">
      <div class="option-text">
        <span class="option-name">R</span>
        <span class="option-details">Version 4.5.1</span>
      </div>
    </label>
  </div>

  <div class="option-row">
    <input type="checkbox" id="lang-python" name="languages" value="Python" disabled>
    <label for="lang-python" class="option-label" title="Coming soon">
      <img class="option-logo" src="assets/static/python.svg" alt="Python logo">
      <div class="option-text">
        <span class="option-name">Python</span>
        <span class="option-details">Coming soon</span>
      </div>
    </label>
  </div>

  <div class="option-row">
    <input type="checkbox" id="lang-stata" name="languages" value="Stata" disabled>
    <label for="lang-stata" class="option-label" title="Coming soon">
      <img class="option-logo" src="assets/static/stata.svg" alt="Stata logo">
      <div class="option-text">
        <span class="option-name">Stata</span>
        <span class="option-details">Coming soon</span>
      </div>
    </label>
  </div>
</fieldset>

<!-- LaTeX packages -->
<fieldset>
  <legend>LaTeX packages</legend>

  <div class="option-row">
    <input type="radio" id="latex-auto" name="latex-packages" value="auto" checked>
    <label for="latex-auto" class="option-label">
      <div class="option-text">
        <span class="option-name">Auto</span>
        <span class="option-details">Installs packages as needed</span>
      </div>
      <div class="option-meta">
        <span class="meta-title">Compatibility</span>
        <div class="meta-icons">
          <i class="fa-solid fa-cloud meta-icon" title="Github Codespaces"></i>
          <i class="fa-brands fa-apple meta-icon disabled" title="Incompatible with macOS"></i>
          <i class="fa-brands fa-windows meta-icon" title="Windows"></i>
          <i class="fa-brands fa-linux meta-icon" title="Linux"></i>
        </div>
      </div>
    </label>
  </div>

  <div class="option-row">
    <input type="radio" id="latex-full" name="latex-packages" value="full">
    <label for="latex-full" class="option-label">
      <div class="option-text">
        <span class="option-name">Full</span>
        <span class="option-details">Installs all LaTeX packages</span>
      </div>
      <div class="option-meta">
        <span class="meta-title">Compatibility</span>
        <div class="meta-icons">
          <i class="fa-solid fa-cloud meta-icon disabled" title="Incompatible with Github Codespaces"></i>
          <i class="fa-brands fa-apple meta-icon" title="macOS"></i>
          <i class="fa-brands fa-windows meta-icon" title="Windows"></i>
          <i class="fa-brands fa-linux meta-icon" title="Linux"></i>
        </div>
      </div>
    </label>
  </div>

  <div class="option-row">
    <input type="radio" id="latex-curated" name="latex-packages" value="curated">
    <label for="latex-curated" class="option-label">
      <div class="option-text">
        <span class="option-name">Curated</span>
        <span class="option-details">
          Installs commonly used LaTeX packages. You'll have to install others manually.
        </span>
      </div>
      <div class="option-meta">
        <span class="meta-title">Compatibility</span>
        <div class="meta-icons">
          <i class="fa-solid fa-cloud meta-icon" title="Github Codespaces"></i>
          <i class="fa-brands fa-apple meta-icon" title="macOS"></i>
          <i class="fa-brands fa-windows meta-icon" title="Windows"></i>
          <i class="fa-brands fa-linux meta-icon" title="Linux"></i>
        </div>
      </div>
    </label>
  </div>
</fieldset>

<fieldset>
  <legend>Use case</legend>

  <div class="option-row">
    <input type="radio" id="use-research" name="usecase" value="research" checked>
    <label for="use-research" class="option-label">
      <div class="option-text">
        <span class="option-name">Research paper</span>
        <span class="option-details">Generates a complete project setup for academic articles.</span>
      </div>
    </label>
  </div>

  <div class="option-row">
    <input type="radio" id="use-course" name="usecase" value="course" disabled>
    <label for="use-course" class="option-label" title="Coming soon">
      <div class="option-text">
        <span class="option-name">Course</span>
        <span class="option-details">Template for course materials and lecture organization (coming soon).</span>
      </div>
    </label>
  </div>

  <div class="option-row">
    <input type="radio" id="use-activity" name="usecase" value="activity" disabled>
    <label for="use-activity" class="option-label" title="Coming soon">
      <div class="option-text">
        <span class="option-name">In-class activity</span>
        <span class="option-details">Interactive classroom exercises with reproducible data environments (coming soon).</span>
      </div>
    </label>
  </div>
</fieldset>
</section>

<!-- Panel 2: Configure details -->
<section id="panel-2" class="form-panel" style="display:none;">
	<h2>2. Configure details</h2>
	<div class="panel-header" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
		<p class="form-instructions" style="margin:0;">You can customise a few things.</p>
	</div>
	<div id="form-badges" style="display:flex; gap:.5rem; align-items:center; flex-wrap:wrap; margin-bottom:1.5rem;">
		<img alt="R" src="https://img.shields.io/badge/Language-R-276DC3?logo=R&logoColor=white" />
		<img id="badge-latex-2" alt="LaTeX" src="https://img.shields.io/badge/LaTeX-auto-008080?logo=latex&logoColor=white" />
		<img alt="Codespace" src="https://img.shields.io/badge/Dev%20Container-ready-0DB7ED?logo=github&logoColor=white" />
	</div>
	<fieldset>
		<legend>User details</legend>
		<div>
			<label for="project-name">Project Name</label>
			<input type="text" id="project-name" name="project-name" autocomplete="off" value="my-project" placeholder="my-project" required>
		</div>
		<div>
			<label for="user-first-name">First Name</label>
			<input type="text" id="user-first-name" name="user-first-name" autocomplete="given-name" required value="Morgan" placeholder="Morgan">
		</div>
		<div>
			<label for="user-last-name">Last Name</label>
			<input type="text" id="user-last-name" name="user-last-name" autocomplete="family-name" required value="Doe" placeholder="Doe">
		</div>
		<div>
			<label for="user-email">Email</label>
			<input type="email" id="user-email" name="user-email" autocomplete="email" required value="morgan.doe@univ-amu.fr" placeholder="morgan.doe@univ-amu.fr">
		</div>
		<div>
			<label for="user-institution">Institution</label>
			<input type="text" id="user-institution" name="user-institution" autocomplete="organization" value="Aix Marseille School of Economics" placeholder="Aix Marseille School of Economics">
		</div>
		<div>
			<label for="user-website">Website</label>
			<input type="url" id="user-website" name="user-website" autocomplete="url" required value="https://morgan-doe.net" placeholder="https://morgan-doe.net">
		</div>
	</fieldset>

</section>

<!-- Panel 3: Download or use on GitHub -->
<section id="panel-3" class="form-panel" style="display:none;">
	<h2>3. You're good to go</h2>
	<div class="panel-header" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
		<p class="form-instructions" style="margin:0;">Download or use on GitHub</p>
	</div>
	<div id="form-badges" style="display:flex; gap:.5rem; align-items:center; flex-wrap:wrap; margin-bottom:1.5rem;">
		<img alt="R" src="https://img.shields.io/badge/Language-R-276DC3?logo=R&logoColor=white" />
		<img id="badge-latex-3" alt="LaTeX" src="https://img.shields.io/badge/LaTeX-auto-008080?logo=latex&logoColor=white" />
		<img alt="Codespace" src="https://img.shields.io/badge/Dev%20Container-ready-0DB7ED?logo=github&logoColor=white" />
	</div>
	<div id="template-result" tabindex="-1" aria-live="polite" style="margin-top:1rem;">
		<div id="template-recap">
			<p style="margin: 0 0 .5rem">Your selection is ready:</p>
			<ul style="margin: 0 0 1rem">
				<li><strong>Languages:</strong> <span id="recap-languages"></span></li>
				<li><strong>Use case:</strong> <span id="recap-usecase"></span></li>
				<li><strong>LaTeX:</strong> <span id="recap-latex"></span></li>
				<li><strong>Project Name:</strong> <span id="recap-project-name"></span></li>
				<li><strong>First Name:</strong> <span id="recap-first-name"></span></li>
				<li><strong>Last Name:</strong> <span id="recap-last-name"></span></li>
				<li><strong>Email:</strong> <span id="recap-email"></span></li>
				<li><strong>Institution:</strong> <span id="recap-institution"></span></li>
				<li><strong>Website:</strong> <span id="recap-website"></span></li>
			</ul>
			<!-- Action buttons -->
			<div style="display: flex; gap: .5em; margin-bottom: 1em;">
					<a class="btn btn-secondary" id="download-template" href="#">
						<i class="fa-solid fa-download"></i> Download
					</a>
					<button id="create-public-repo-btn" class="btn btn-secondary">
						<i class="fa-brands fa-github"></i> Create Public Repo
					</button>
					<button id="create-private-repo-btn" class="btn btn-primary">
						<i class="fa-brands fa-github"></i> Create Private Repo
					</button>
			</div>
		</div>
	</div>
</section>

<noscript>
	<p>Please enable JavaScript to use the multi-panel form.</p>
</noscript>
</form>

<!-- Navigation bar outside form, positioned between header and content via JS -->
<div id="form-navigation" style="display:flex; justify-content:space-between; align-items:center; gap:0.5rem">
	<button class="btn btn-secondary" id="back-button" type="button"><i class="fa-solid fa-chevron-left"></i> Back</button>
	<button class="btn btn-primary" id="next-button" type="button">Next <i class="fa-solid fa-chevron-right"></i></button>
</div>

<script src="{{ '/assets/js/template-form.js' | relative_url }}"></script>