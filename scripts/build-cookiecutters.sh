#!/usr/bin/env bash

# Build script to compile cookiecutter templates into zip files
# This creates 3 variants of the data template with different latex options

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
OUTPUT_DIR="$PROJECT_ROOT/downloads"
COOKIECUTTER_DIR="$PROJECT_ROOT/cookiecutter/data"

echo "Building cookiecutter templates..."
echo "Project root: $PROJECT_ROOT"
echo "Output directory: $OUTPUT_DIR"

# Create output directory
mkdir -p "$OUTPUT_DIR"




# Function to generate and zip a rendered cookiecutter project for a specific latex option
build_rendered_project() {
    local latex_option=$1
    local output_name="recap-data-template-latex-${latex_option}.zip"
    # Use a unique, persistent temp dir for each variant
    local temp_dir="$PROJECT_ROOT/.cookiecutter-build-tmp-$latex_option-$$"
    mkdir -p "$temp_dir"
    local project_dir="$temp_dir/rendered-project"

    echo "Generating rendered project with latex=$latex_option..."

    # Create a cookiecutter config file for non-interactive generation (no project_name, so default is used)
    cat > "$temp_dir/cookiecutter-config.yaml" <<EOF
default_context:
    r: true
    r_version: "4.5.1"
    latex: "$latex_option"
    first_name: "Morgan"
    last_name: "Doe"
    email: "morgan.doe@example.com"
    institution: "Your Institution"
EOF

    # Run cookiecutter CLI to generate the project non-interactively
    cookiecutter --no-input --config-file "$temp_dir/cookiecutter-config.yaml" \
        --output-dir "$temp_dir" "$COOKIECUTTER_DIR"

    # Find the generated project directory (should be $temp_dir/my-project or similar)
    local generated_dir=$(find "$temp_dir" -mindepth 1 -maxdepth 1 -type d ! -name rendered-project)
    mv "$generated_dir" "$project_dir"

    # Zip the rendered project (using subshell to avoid changing working directory)
    # Zip from inside rendered-project so the archive doesn't have a top-level folder
    (cd "$project_dir" && zip -r "$OUTPUT_DIR/$output_name" . -x "*.pyc" -x "__pycache__/*" -x "*.DS_Store")

    echo "Created $output_name"

    # Cleanup
    rm -rf "$temp_dir"
}

# Build all three variants as rendered projects
build_rendered_project "auto"
build_rendered_project "full"
build_rendered_project "curated"

echo "All templates built successfully!"
echo "Output location: $OUTPUT_DIR"
ls -lh "$OUTPUT_DIR"
