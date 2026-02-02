.PHONY: help build serve clean templates

help:
	@echo "Available targets:"
	@echo "  make build      - Build the Jekyll site with cookiecutter templates"
	@echo "  make serve      - Serve the site locally for development"
	@echo "  make clean      - Clean build artifacts"

build: templates
	@echo "Building Jekyll site..."
	@bundle exec jekyll build

serve: templates
	@echo "Serving Jekyll site..."
	@bundle exec jekyll serve --livereload

clean:
	@echo "Cleaning build artifacts..."
	@rm -rf _site/
	@rm -rf .sass-cache/
	@rm -rf .jekyll-cache/
	@rm -rf .jekyll-metadata

install:
	@echo "Installing dependencies..."
	@bundle install
