# RECAP: Reproducible Environments for Collaborative Academic Projects

This repository contains the documentation site for RECAP, a framework for creating reproducible computational environments for academic research collaboration.

## About RECAP

RECAP provides a standardized approach to setting up reproducible computational environments using Docker and devcontainers. It enables researchers to work collaboratively on projects while ensuring that all participants have consistent development environments and dependencies.

## Related Repositories

- **[recap-org/images](https://github.com/recap-org/images)** – Builds the Docker container images that serve as the foundation for RECAP development environments. These pre-configured images provide all necessary tools and dependencies for development work.

- **[recap-org/generator](https://github.com/recap-org/generator)** – Automatically builds the templates provided by RECAP and updates their relevant GitHub template repositories. 

- **[template-r-small](https://github.com/recap-org/template-r-small)**, **[template-r-medium](https://github.com/recap-org/template-r-medium)**, **[template-r-large](https://github.com/recap-org/template-r-large)** – Template repositories for R-based projects at various scales. These provide starting points for new RECAP projects with appropriate structure and tooling.

## Building and Development

This documentation site is built with [Jekyll](https://jekyllrb.com/) and the [Just the Docs](https://just-the-docs.com/) theme.

### Prerequisites

This repository includes a devcontainer configuration for development. The easiest way to build and develop is to use the devcontainer:

1. **In GitHub Codespaces**: Simply open the repository in Codespaces, which will automatically use the devcontainer.

2. **Locally with Docker**: Use VS Code's Dev Containers extension to open the repository in a container.

### Building the Site

Once inside the devcontainer environment:

1. Install dependencies:
   ```bash
   bundle install
   ```

2. Build and serve locally:
   ```bash
   bundle exec jekyll serve
   ```

   The site will be available at `http://localhost:4000`

3. Alternatively, use the included Makefile:
   ```bash
   make serve
   ```

The built site is stored in the `_site` directory.

## Contributing

We welcome contributions! Here's how to get involved and where to ask questions:

### Where to Ask Questions

- **Questions about this documentation site or RECAP in general** – Open an issue or discussion in [this repository](https://github.com/recap-org/recap-org.github.io)
- **Questions about a specific RECAP template** (template-r-small, template-r-medium, template-r-large) – Ask in that template's repository
- **Questions about the devcontainer images** – Ask in the [recap-org/images](https://github.com/recap-org/images) repository

