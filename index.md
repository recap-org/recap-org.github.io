---
title: Home
layout: home
nav_order: 1
---

The goal of RECAP is to make reproducible workflows and good research practices accessible to social scientists by generating ready-to-use GitHub template repositories. Users select the statistical language(s) (R, Python, Stata) and their intended use case (research paper, course material, or in-class data activity), and receive a standardized project structure that integrates containerized environments, dependency management, version control, and LaTeX pipelines. The templates also come with tutorials and video capsules for teaching and research purposes.

<!-- Template selector form: choose languages and use case -->
<form id="template-selector" action="#" method="get" class="template-form" aria-labelledby="template-form-heading" onsubmit="return handleTemplateSubmit(event);">
	<h2 id="template-form-heading">Choose your template</h2>
	<p id="form-instructions">Select at least one statistical language and one use case.</p>

	<fieldset>
		<legend>Statistical language(s)</legend>
		<div>
			<input type="checkbox" id="lang-r" name="languages" value="R">
			<label for="lang-r">R</label>
		</div>
		<div>
			<input type="checkbox" id="lang-python" name="languages" value="Python">
			<label for="lang-python">Python</label>
		</div>
		<div>
			<input type="checkbox" id="lang-stata" name="languages" value="Stata">
			<label for="lang-stata">Stata (Not mac)</label>
		</div>
    </fieldset>

    <fieldset>
        <legend>LaTeX packages</legend>
        <div>
            <input type="radio" id="latex-automatic" name="latex-packages" value="automatic" checked>
            <label for="latex-automatic">Automatic (Not mac)</label>
        </div>
        <div>
            <input type="radio" id="latex-all" name="latex-packages" value="all">
            <label for="latex-all">All</label>
        </div>
        <div>
            <input type="radio" id="latex-curated" name="latex-packages" value="curated">
            <label for="latex-curated">Curated</label>
        </div>
    </fieldset>

	<fieldset>
		<legend>Use case</legend>
		<div>
			<input type="radio" id="use-research" name="usecase" value="research" required>
			<label for="use-research">Research paper</label>
		</div>
		<div>
			<input type="radio" id="use-course" name="usecase" value="course">
			<label for="use-course">Course</label>
		</div>
		<div>
			<input type="radio" id="use-activity" name="usecase" value="activity">
			<label for="use-activity">In-class data activity</label>
		</div>
	</fieldset>

	<div>
		<button type="submit">Preview template</button>
	</div>

	<noscript>
		<p>Please enable JavaScript to preview templates on this page.</p>
	</noscript>
</form>

<div id="template-result" tabindex="-1" aria-live="polite" style="margin-top:1rem;"></div>

<script>
function handleTemplateSubmit(event) {
	event.preventDefault();
	const form = document.getElementById('template-selector');
	const result = document.getElementById('template-result');
	const languages = Array.from(form.querySelectorAll('input[name="languages"]:checked')).map(i => i.value);
	const usecase = form.querySelector('input[name="usecase"]:checked');

	result.innerHTML = '';
	const p = document.createElement('p');
	p.style.margin = '0';
	p.textContent = 'Ready — view the demo template here: ';
	const a = document.createElement('a');
	a.href = 'https://github.com/recap-org/demo-template';
	a.target = '_blank';
	a.rel = 'noopener noreferrer';
	a.textContent = 'https://github.com/recap-org/demo-template';
	p.appendChild(a);
	result.appendChild(p);

	result.focus();
	return false;
}
</script>

