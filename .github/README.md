# GitHub Actions Configuration

This directory contains the GitHub Actions workflows for the RECAP documentation site.

## Workflows

### `pages.yml` – Build and Deploy Documentation

**Trigger**: Automatically runs on push to the `main` branch

**What it does**:
1. Checks out the repository code
2. Sets up Ruby and installs dependencies via Bundler
3. Builds the Jekyll site
4. Uploads the built site as an artifact
5. Deploys the artifact to GitHub Pages

**Deployed at**: https://recap-org.github.io

### `test.yml` – Test Build

**Trigger**: Runs on push to `main` and on all pull requests

**What it does**:
1. Checks out the repository code
2. Sets up Ruby and installs dependencies via Bundler
3. Builds the Jekyll site
4. Uploads the built site as an artifact (named `site-dev`)

**Purpose**: Validates that the documentation builds successfully before merging to main or deploying to GitHub Pages


