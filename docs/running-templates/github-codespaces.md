---
title: Run in the cloud (GitHub Codespaces)
parent: How to run a template
layout: home
nav_order: 4
---

# Run in the cloud (GitHub Codespaces)

This option lets you run the RECAP template in a ready-to-use online environment, with **no software to install on your machine**.

It is the easiest way to get started, especially if you are new to RECAP or working in a teaching context.

## What you need

To use GitHub Codespaces, you need:
- a **[GitHub account](https://github.com)**,
- preferably a free **[GitHub Education]()** account.

GitHub Education provides access to Codespaces with increased quotas (currently up to **60 hours of compute per month** and **15 GB of storage**), which is sufficient for most teaching and student projects.

## When this option is a good fit

Choose GitHub Codespaces if:
- you want to start working immediately,
- you are using a shared or restricted computer,
- you are following a course or tutorial,
- you do not want to install any tools locally.

## How it works

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

3. **Work on your project**

   You can now edit files, run the analysis, and build outputs as described in the template’s instructions.

## Saving your work

When working in Codespaces, your files live inside your Codespace. Your work is preserved as long as the Codespace exists.

To **keep a permanent record of your work**, collaborate with others, or safely close and reopen the project later, you should save your changes back to GitHub using Git.

You do **not** need to use Git from the command line. Visual Studio Code provides a graphical interface that lets you:
- see which files you changed,
- save your changes,
- and upload them to GitHub.

Using Git ensures that your work is preserved even if the Codespace is deleted, and allows others to reproduce or build on your analysis.

If you would like to understand what Git is and how to use it, see our primer on **[wersion control with Git](/docs/version-control)**.

## Things to be aware of

- **Deleting a Codespace deletes your work**  
  Your files are lost only if you delete the Codespace without saving your changes to GitHub. Using Git ensures your work is preserved independently of the Codespace.

- **Limited computing resources**  
  GitHub Codespaces run on shared cloud machines. This is more than sufficient for most assignments and small to medium projects, but may be limiting for very large datasets or computationally intensive analyses.

If you later need more control over resources or want to work entirely on your own machine, you can switch to one of the local options without changing the structure of your project.