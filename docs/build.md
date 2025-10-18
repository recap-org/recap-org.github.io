---
title: Building
nav_order: 6
---

# Building the Site

This website includes pre-compiled cookiecutter templates that are built as part of the deployment process.

## Local Development

To build the site locally with all templates:

```bash
# Build everything (templates + Jekyll site)
make build

# Serve the site with live reload
make serve

# Build only the templates
make templates

# Clean build artifacts
make clean
```

## Build Process

The build process consists of two main steps:

### 1. Template Compilation

The `scripts/build-cookiecutters.sh` script compiles the cookiecutter templates into downloadable zip files. It creates three variants of the data template with different LaTeX configurations:

- **auto**: LaTeX packages installed automatically as needed
- **full**: Complete LaTeX distribution pre-installed
- **curated**: Curated selection of common LaTeX packages

Templates are generated in the `_site/downloads/` directory.

### 2. Jekyll Build

After templates are compiled, Jekyll builds the static site including the downloads.

## CI/CD

The GitHub Actions workflow (`.github/workflows/pages.yml`) automatically:

1. Checks out the repository
2. Sets up Ruby and installs dependencies
3. Builds cookiecutter templates
4. Builds the Jekyll site
5. Deploys to GitHub Pages

## Manual Template Building

If you only want to build the templates without Jekyll:

```bash
bash scripts/build-cookiecutters.sh
```

The templates will be created in `_site/downloads/` as:
- `recap-data-template-latex-auto.zip`
- `recap-data-template-latex-full.zip`
- `recap-data-template-latex-curated.zip`
