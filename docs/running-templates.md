---
title: How to run a template
layout: home
nav_order: 3
---

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

## Option 3: Run in the cloud (GitHub Codespaces)

This option lets you run the RECAP template in a ready-to-use online environment, with **no software to install on your machine**.

It is the easiest way to get started, especially if you are new to RECAP or working in a teaching context.

### What you need

To use GitHub Codespaces, you need:
- a **[GitHub account](https://github.com)**,
- preferably a free **[GitHub Education]()** account.

GitHub Education provides access to Codespaces with increased quotas (currently up to **60 hours of compute per month** and **15 GB of storage**), which is sufficient for most teaching and student projects.

### When this option is a good fit

Choose GitHub Codespaces if:
- you want to start working immediately,
- you are using a shared or restricted computer,
- you are following a course or tutorial,
- you do not want to install any tools locally.

### How it works

To work with a RECAP template in GitHub Codespaces, you first create **your own copy** of the template, and then open it in a cloud workspace.

1. **Create your own repository**

   On the GitHub repository page, click the **“Use this template”** button.

   ![Use this template button](https://docs.github.com/assets/cb-76823/mw-1440/images/help/repository/use-this-template-button.webp)

   This creates a new repository under your GitHub account, based on the RECAP template.  
   You can choose a name for your project and decide whether the repository should be public or private. All other options can be left at their default values.

   If you want a more detailed explanation of this step, GitHub provides an official guide:  
   [Creating a repository from a template](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template).

2. **Open the repository in Codespaces**

   Once your repository has been created, click the **“Code”** button, then choose **“Create Codespace on main”**.

   ![Create Codespace on main](https://docs.github.com/assets/cb-49943/mw-1440/images/help/codespaces/who-will-pay.webp)

   GitHub will create a cloud-based workspace and open it for you in **Visual Studio Code**, either in your browser or on your local machine. The environment already contains all the tools needed to run the template.

3. **Work and save your changes**

   You can now edit files, run the analysis, and build outputs as described in the template’s instructions.

   To keep a permanent record of your work and share it with others, save your changes back to GitHub using the graphical Git interface in Visual Studio Code. No command-line knowledge is required.

### Saving your work

When working in Codespaces, your files live inside your Codespace. Your work is preserved as long as the Codespace exists.

To **share your work**, collaborate with others, or keep a permanent record of your changes, you will need to use Git to save them back to GitHub.

You do **not** need to use Git from the command line. Visual Studio Code provides a graphical interface that lets you:
- see which files you changed,
- save your changes,
- and upload them to GitHub.

RECAP is designed so that you can learn these Git concepts gradually, as part of your research workflow.

### Things to be aware of

- **Deleting a Codespace deletes your work**  
  Your files are lost only if you delete the Codespace without saving your changes to GitHub. Using Git ensures your work is preserved independently of the Codespace.

- **Limited computing resources**  
  GitHub Codespaces run on shared cloud machines. This is more than sufficient for most assignments and small to medium projects, but may be limiting for very large datasets or computationally intensive analyses.

If you later need more control over resources or want to work entirely on your own machine, you can switch to one of the local options without changing the structure of your project.