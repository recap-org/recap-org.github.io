---
layout: default
title: Downloads
nav_order: 2
---

# Download Templates

Pre-compiled cookiecutter templates are available for download. Each variant includes different LaTeX package configurations:

## RECAP Data Template

The data template provides a complete reproducible environment for data analysis projects with R, Quarto, and development container support.

### Available Variants

<div class="download-section">
  <h4>LaTeX: Auto</h4>
  <p>Automatically installs LaTeX packages as needed during document compilation.</p>
  <a href="{{ site.url }}{{ site.baseurl }}/downloads/recap-data-template-latex-auto.zip" class="btn btn-primary">Download (auto)</a>
</div>

<div class="download-section">
  <h4>LaTeX: Full</h4>
  <p>Includes the complete LaTeX distribution with all packages pre-installed.</p>
  <a href="{{ site.url }}{{ site.baseurl }}/downloads/recap-data-template-latex-full.zip" class="btn btn-primary">Download (full)</a>
</div>

<div class="download-section">
  <h4>LaTeX: Curated</h4>
  <p>Includes a curated selection of commonly-used LaTeX packages.</p>
  <a href="{{ site.url }}{{ site.baseurl }}/downloads/recap-data-template-latex-curated.zip" class="btn btn-primary">Download (curated)</a>
</div>

## How to Use

1. **Install Cookiecutter** (if not already installed):
   ```bash
   pip install cookiecutter
   ```

2. **Extract the downloaded zip file**:
   ```bash
   unzip recap-data-template-latex-*.zip -d my-template
   ```

3. **Run Cookiecutter**:
   ```bash
   cookiecutter my-template/<<cookiecutter.__project_slug>>
   ```

4. **Follow the prompts** to customize your project with your own settings.

## Template Features

- **R Environment**: Managed with renv for reproducible package dependencies
- **Quarto**: Literate programming for analysis and reporting
- **LaTeX Support**: Multiple options for document compilation
- **Dev Container**: Pre-configured development environment
- **CI/CD**: GitHub Actions workflow included
- **Testing**: Test infrastructure with testthat

## More Information

For detailed documentation on using the templates, see the [Getting Started]({% link docs/getting-started.md %}) guide.
