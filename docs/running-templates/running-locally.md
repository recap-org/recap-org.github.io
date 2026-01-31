---
title: Run locally (directly on your machine)
parent: How to run a template
layout: home
nav_order: 1
---

# Run locally (directly on your machine)

This option lets you run the RECAP template directly on your own computer, using software installed locally.

It gives you full control and maximum performance, but requires that the necessary tools are already available on your system.

## When this option is a good fit

Choose this option if:
- you are comfortable installing and managing software on your machine,
- you want full control over the execution environment,
- you are working on a personal machine with sufficient resources,
- you prefer not to rely on cloud services.

## How it works

If you do not want to use Git at all, the simplest way to get started is to download the project as a ZIP file.

1. On the GitHub repository page, click the **“Code”** button.
2. Choose **“Download ZIP”**.
3. Extract the archive on your computer.

You can now open the project folder in your editor of choice and follow the instructions provided in the template to run the analysis.

If you later decide to use Git, you can instead create your own repository from the template using the **“Use this template”** button, as described in the Codespaces section.

## Required software

RECAP templates rely on a number of tools, such as:
- a statistical programming language (for example, R),
- document generation tools,
- and basic build utilities.

The exact requirements depend on the template size.  
In particular, the **Medium and Large templates require a richer software stack** than the Small one.

Installing and maintaining all required tools manually can be challenging, especially across operating systems.

## Things to be aware of

- **Setup effort can be significant**  
  Especially for larger templates, getting all tools installed and configured correctly may take time.

- **Reproducibility depends on your local setup**  
  While the project can be rerun locally, results may depend on the versions of software installed on your machine.

For many users, running templates in an isolated local environment or in the cloud provides a smoother and more reproducible experience.