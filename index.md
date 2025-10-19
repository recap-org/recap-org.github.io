---
title: Home
layout: home
nav_order: 1
---

The goal of RECAP is to make reproducible workflows and good research practices accessible to social scientists by generating ready-to-use GitHub template repositories. Users select the statistical language(s) (R, Python, Stata) and their intended use case (research paper, course material, or in-class data activity), and receive a standardized project structure that integrates containerized environments, dependency management, version control, and LaTeX pipelines. The templates also come with tutorials and video capsules for teaching and research purposes.

# See it in action

Try our template in the cloud on Github Codespaces at https://github.com/recap-org/demo-template

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
		<fieldset>
			<legend>Statistical language(s)</legend>
			<div>
				<input type="checkbox" id="lang-r" name="languages" value="R" checked>
				<label for="lang-r">R</label>
			</div>
			<div>
				<input type="checkbox" id="lang-python" name="languages" value="Python" disabled>
				<label for="lang-python" title="Coming soon">Python (coming soon)</label>
			</div>
			<div>
				<input type="checkbox" id="lang-stata" name="languages" value="Stata" disabled>
				<label for="lang-stata" title="Coming soon">Stata (coming soon)</label>
			</div>
			<p style="margin:.5rem 0 0; font-size:.95em; color:var(--color-gray-600)">Currently available: R only. Python and Stata templates are planned.</p>
		</fieldset>
		<fieldset>
			<legend>LaTeX packages</legend>
			<div>
				<input type="radio" id="latex-auto" name="latex-packages" value="auto" checked>
				<label for="latex-auto">Auto (installs as needed)</label>
			</div>
			<div>
				<input type="radio" id="latex-full" name="latex-packages" value="full">
				<label for="latex-full">Full (all packages preinstalled)</label>
			</div>
			<div>
				<input type="radio" id="latex-curated" name="latex-packages" value="curated">
				<label for="latex-curated">Curated (common packages)</label>
			</div>
		</fieldset>
		<fieldset>
			<legend>Use case</legend>
			<div>
				<input type="radio" id="use-research" name="usecase" value="research" checked>
				<label for="use-research">Research paper</label>
			</div>
			<div>
				<input type="radio" id="use-course" name="usecase" value="course" disabled>
				<label for="use-course">Course</label>
			</div>
			<div>
				<input type="radio" id="use-activity" name="usecase" value="activity" disabled>
				<label for="use-activity">In-class data activity</label>
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
							<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" style="vertical-align:middle; margin-right:4px;"><path fill="currentColor" d="M12 16l4-5h-3V4h-2v7H8z"/><path fill="currentColor" d="M5 18h14v2H5z"/></svg>
							Download
						</a>
						<button id="create-public-repo-btn" class="btn btn-secondary">
							<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" style="vertical-align:middle; margin-right:4px;"><path fill="currentColor" d="M12 2C6.48 2 2 6.58 2 12.26c0 4.51 2.87 8.36 6.84 9.71c.5.09.68-.22.68-.48c0-.24-.01-.87-.01-1.7c-2.78.62-3.37-1.36-3.37-1.36c-.41-1.07-1-1.36-1-1.36c-.82-.57.06-.56.06-.56c.91.07 1.39.95 1.39.95c.81 1.41 2.13 1 2.65.77c.08-.59.32-1 .58-1.23c-2.22-.26-4.56-1.14-4.56-5.07c0-1.12.39-2.03 1.03-2.75c-.1-.26-.45-1.3.1-2.71c0 0 .84-.28 2.75 1.05c.8-.23 1.66-.34 2.52-.34c.86 0 1.72.12 2.52.34c1.91-1.33 2.75-1.05 2.75-1.05c.55 1.41.2 2.45.1 2.71c.64.72 1.03 1.63 1.03 2.75c0 3.94-2.34 4.81-4.57 5.07c.33.29.62.85.62 1.72c0 1.24-.01 2.24-.01 2.54c0 .27.18.58.69.48C19.13 20.62 22 16.77 22 12.26C22 6.58 17.52 2 12 2z"/></svg>
							Create Public Repo
						</button>
						<button id="create-private-repo-btn" class="btn btn-primary">
							<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" style="vertical-align:middle; margin-right:4px;"><path fill="currentColor" d="M12 2C6.48 2 2 6.58 2 12.26c0 4.51 2.87 8.36 6.84 9.71c.5.09.68-.22.68-.48c0-.24-.01-.87-.01-1.7c-2.78.62-3.37-1.36-3.37-1.36c-.41-1.07-1-1.36-1-1.36c-.82-.57.06-.56.06-.56c.91.07 1.39.95 1.39.95c.81 1.41 2.13 1 2.65.77c.08-.59.32-1 .58-1.23c-2.22-.26-4.56-1.14-4.56-5.07c0-1.12.39-2.03 1.03-2.75c-.1-.26-.45-1.3.1-2.71c0 0 .84-.28 2.75 1.05c.8-.23 1.66-.34 2.52-.34c.86 0 1.72.12 2.52.34c1.91-1.33 2.75-1.05 2.75-1.05c.55 1.41.2 2.45.1 2.71c.64.72 1.03 1.63 1.03 2.75c0 3.94-2.34 4.81-4.57 5.07c.33.29.62.85.62 1.72c0 1.24-.01 2.24-.01 2.54c0 .27.18.58.69.48C19.13 20.62 22 16.77 22 12.26C22 6.58 17.52 2 12 2z"/></svg>
							Create Private Repo
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
	<button class="btn btn-secondary" id="back-button" type="button">Back</button>
	<button class="btn btn-primary" id="next-button" type="button">Next</button>
</div>

<script src="{{ '/assets/js/template-form.js' | relative_url }}"></script>