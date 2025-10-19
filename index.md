---
title: Home
layout: home
nav_order: 1
---

The goal of RECAP is to make reproducible workflows and good research practices accessible to social scientists by generating ready-to-use GitHub template repositories. Users select the statistical language(s) (R, Python, Stata) and their intended use case (research paper, course material, or in-class data activity), and receive a standardized project structure that integrates containerized environments, dependency management, version control, and LaTeX pipelines. The templates also come with tutorials and video capsules for teaching and research purposes.

# Getting started

<!-- Template selector form: choose languages and use case -->
<form id="template-selector" action="#" method="get" class="template-form" aria-labelledby="template-form-heading" data-backend="https://recap-org-backend.onrender.com">
	<h2 id="template-form-heading">Choose your template</h2>
	<p id="form-instructions">Select at least one statistical language and one use case.</p>

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

	<div style="display:flex;justify-content: space-between;align-items: center;flex-direction: row; gap:.5rem; margin-top:.5rem">
	<div style="display:flex; gap:.5rem; align-items:center; flex-wrap:wrap">
		<img alt="R" src="https://img.shields.io/badge/Language-R-276DC3?logo=R&logoColor=white" />
		<img id="badge-latex" alt="LaTeX" src="https://img.shields.io/badge/LaTeX-auto-008080?logo=latex&logoColor=white" />
		<img alt="Codespace" src="https://img.shields.io/badge/Dev%20Container-ready-0DB7ED?logo=github&logoColor=white" />
	</div>
		<button class="btn btn-primary" id="get-download-button" type="submit">Get started</button>
	</div>

	<noscript>
		<p>Please enable JavaScript to preview templates on this page.</p>
	</noscript>
</form>

<div id="template-result" tabindex="-1" aria-live="polite" style="margin-top:1rem; display:none;">
	<div id="template-recap">
		<p style="margin: 0 0 .5rem">Your selection is ready:</p>
		<ul style="margin: 0 0 1rem">
			<li><strong>Languages:</strong> <span id="recap-languages"></span></li>
			<li><strong>Use case:</strong> <span id="recap-usecase"></span></li>
			<li><strong>LaTeX:</strong> <span id="recap-latex"></span></li>
		</ul>
		<div style="display:flex; gap:.5rem; align-items:center; flex-wrap:wrap; margin-bottom:1rem">
			<img alt="R" src="https://img.shields.io/badge/Language-R-276DC3?logo=R&logoColor=white" />
			<img id="badge-latex-result" alt="LaTeX" src="https://img.shields.io/badge/LaTeX-auto-008080?logo=latex&logoColor=white" />
			<img alt="Codespace" src="https://img.shields.io/badge/Dev%20Container-ready-0DB7ED?logo=github&logoColor=white" />
		</div>
		<div style="display: flex; justify-content: space-between">
		<button class="btn btn-secondary" id="reset-template">Start over</button>
		<div style="display: flex;">
		<a class="btn btn-secondary" id="download-template" href="#" style="margin-left:0.5em">Download</a>
		<button id="use-on-github-btn" class="btn btn-primary" style="margin-left: 0.5em;">Use on GitHub</button>
		</div>
		</div>
		
	</div>
</div>
<script src="{{ '/assets/js/template-form.js' | relative_url }}"></script>