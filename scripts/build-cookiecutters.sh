#!/usr/bin/env bash

# Build script to compile cookiecutter templates into zip files
# This creates 3 variants of the data template with different latex options

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
OUTPUT_DIR="$PROJECT_ROOT/_site/downloads"
COOKIECUTTER_DIR="$PROJECT_ROOT/cookiecutter/data"

echo "Building cookiecutter templates..."
echo "Project root: $PROJECT_ROOT"
echo "Output directory: $OUTPUT_DIR"

# Create output directory
mkdir -p "$OUTPUT_DIR"

# Function to create a cookiecutter zip with specific latex option
build_template() {
    local latex_option=$1
    local output_name="recap-data-template-latex-${latex_option}.zip"
    local temp_dir=$(mktemp -d)
    
    echo "Building template with latex=$latex_option..."
    
    # Copy the cookiecutter template to temp directory
    cp -r "$COOKIECUTTER_DIR" "$temp_dir/<<cookiecutter.__project_slug>>"
    
    # Create a default config for this variant
    cat > "$temp_dir/cookiecutter-config.yaml" <<EOF
default_context:
  project_name: "my-project"
  r: true
  r_version: "4.5.1"
  latex: "$latex_option"
  first_name: "Morgan"
  last_name: "Doe"
  email: "morgan.doe@example.com"
  institution: "Your Institution"
EOF
    
    # Create a README for the template
    cat > "$temp_dir/README.md" <<EOF
# RECAP Data Template (LaTeX: $latex_option)

This is a pre-configured cookiecutter template for reproducible data projects.

## Configuration

This template variant includes:
- **LaTeX package list**: $latex_option
- R support with renv
- Quarto for literate programming
- Dev container configuration

## Usage

1. Install cookiecutter: \`pip install cookiecutter\`
2. Extract this zip file
3. Run: \`cookiecutter path/to/<<cookiecutter.__project_slug>>\`
4. Answer the prompts to customize your project

## Customization

You can modify the default values in \`cookiecutter.json\` before running cookiecutter.

For more information, visit: https://recap-org.github.io
EOF
    
    # Create the zip file
    cd "$temp_dir"
    zip -r "$OUTPUT_DIR/$output_name" . -x "*.pyc" -x "__pycache__/*" -x "*.DS_Store"
    
    echo "Created $output_name"
    
    # Cleanup
    rm -rf "$temp_dir"
}

# Build all three variants
build_template "auto"
build_template "full"
build_template "curated"

echo "All templates built successfully!"
echo "Output location: $OUTPUT_DIR"
ls -lh "$OUTPUT_DIR"
