---
title: How to run a template
layout: home
nav_order: 3
---

# How to run a RECAP template

## You’ve opened a RECAP template on GitHub — what now?

When you click **“Open your template”**, you are taken to a page on GitHub. This page hosts the RECAP template you selected: it contains the analysis code, configuration files, and documentation needed to run the project.

You do **not** need to know Git or GitHub to get started. Think of this page as a project folder stored online. 

On the repository page, you will typically see:
- a short description of the project,
- a list of files and folders,
- a `README` file with basic instructions.

At this stage, you are not expected to understand everything you see. The only decision you need to make now is **how you want to run the template**.

## How do you want to run the template?

RECAP templates can be run in several ways. All options produce the same results; they differ only in setup effort, flexibility, and how much software is installed on your machine.

There is no “right” choice. You can start with the option that feels most comfortable and switch to another one later if needed.

The three main options are:

- **Run locally (directly on your machine)**  
  Download the project files and run them using software already installed on your computer.

- **Run locally in an isolated environment**  
  Run the project using a self-contained setup that includes all required tools, without installing them permanently on your system (often referred to as *containers* or *Docker*).

- **Run in the cloud (GitHub Codespaces)**  
  Open the project in a ready-to-use online environment that runs in your browser, with no local setup.

The table below summarizes the main tradeoffs.

| Option | Setup effort | Reproducibility | Best suited for |
|------|--------------|-----------------|-----------------|
| Local (directly on your machine) | Low if tools are already installed | Medium | Experienced users, quick or personal work |
| Local isolated environment | Medium | High | Most users, consistent and portable setups |
| GitHub Codespaces | Very low | Very high | Teaching, first-time users, zero setup |

Once you’ve chosen an option, follow the corresponding section below for step-by-step instructions.