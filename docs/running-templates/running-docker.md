---
title: Run locally in an isolated environment (Docker)
parent: How to run a template
layout: home
nav_order: 2
---

# Run locally in an isolated environment (Docker)

This option lets you run a RECAP template on your own machine using a **self-contained environment** that includes all required tools, without installing them permanently on your system.

Compared to GitHub Codespaces, this option requires a one-time local setup.  
Compared to running directly on your machine, it avoids installing and maintaining a large software stack.

For most medium and large projects, this provides a good balance between reproducibility and local control.

## When this option is a good fit

Choose this option if:
- you want strong reproducibility without relying on the cloud,
- you prefer not to install many tools directly on your system,
- you are working on a medium or large project,
- you want an experience close to Codespaces, but running locally.

---

## How it works

The template is opened inside an **isolated local environment** that contains:
- the statistical language used by the project,
- document generation tools,
- and all other required dependencies.

You work and access the project files as usual, while execution happens inside this isolated environment.

---

## Getting set up

You need **Docker Desktop** installed and running on your machine.  
This is a one-time setup.

<div class="tab-container">
  <div class="tab-buttons">
    <button class="active" data-category="os" data-value="macOS"><img src="/assets/static/macos.svg" alt="macOS" /> macOS</button>
    <button data-category="os" data-value="Windows"><img src="/assets/static/windows.svg" alt="Windows" /> Windows</button>
  </div>

  <div id="panel-os-macOS" class="tab-panel active" data-category="os">
    <blockquote>
      <p>🎥 <strong>Prefer watching instead of reading?</strong><br>
      Short walkthrough of these steps below (no audio).</p>
    </blockquote>
    <ol>
      <li>
        Go to <a href="https://www.docker.com/" target="_blank">https://www.docker.com/</a> and download <strong>Docker Desktop</strong>. Choose:
        <ul>
          <li><strong>Apple Silicon</strong> if your Mac is from 2020 or later (M1, M2, M3)</li>
          <li><strong>Intel Chip</strong> if your Mac is older</li>
        </ul>
      </li>
      <li>Install Docker Desktop</li>
      <li>
        Open <strong>Docker Desktop</strong> for the first time.
        <ul>
          <li>If Docker offers a setup choice, select the <strong>recommended</strong> configuration. You may be asked to confirm permissions (for example, using your Mac password or Touch ID).</li>
          <li>You can skip prompts about creating a Docker Hub account. <strong>You do not need a Docker Hub account</strong> to use RECAP templates.</li>
        </ul>
      </li>
      <li>Wait until Docker Desktop indicates that Docker is <strong>running</strong>.</li>
    </ol>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/-QEnXvoszfw?si=IzpMg7k9FFIV-7DJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </div>
  <div id="panel-os-Windows" class="tab-panel" data-category="os">
    <blockquote>
      <p>🎥 <strong>Prefer watching instead of reading?</strong><br>
      Short walkthrough of these steps below (no audio).</p>
    </blockquote>
    <ol>
      <li>Open <strong>Windows Terminal</strong></li>
      <li>Run: <code>wsl --install</code></li>
      <li>Restart your computer when prompted</li>
      <li>Open the <strong>Microsoft Store</strong></li>
      <li>Install <strong>Docker Desktop</strong></li>
      <li>Open Docker Desktop and wait until it reports that it is running</li>
    </ol>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/_ewYjYDF1K0?si=_i-hL6fT2BgWBJa5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </div>
</div>

Installing Docker may take a few minutes and may require restarting your computer.

If this setup feels cumbersome, consider using **GitHub Codespaces**, which provides the same environment with no local installation.

---

## Open the project in Visual Studio Code

RECAP documents and supports this option using **Visual Studio Code**.  
Other editors may work, but are not covered here.

> 🎥 **Prefer watching instead of reading?**  
> Short walkthrough of these steps below (no audio).

1. Install [Visual Studio Code](https://code.visualstudio.com/) if you haven’t already.

2. Make sure Docker Desktop is running.

3. Install the **Dev Containers** extension from the VS Code Marketplace.

4. On the template’s GitHub repository page, choose how you want to get the project files:

   - **I don’t want to use Git**  
     Click **Code → Local → Download ZIP**, extract the archive on your computer, then open the extracted folder in Visual Studio Code.

   - **I want to use Git**  

     1. Click the **“Use this template”** button on the repository page.  
        This creates a new repository under your GitHub account, based on the RECAP template.  
        You can choose a name for your project and decide whether it should be public or private.

     2. Open the new repository in Visual Studio Code.  
        You can do this by cloning the repository directly from VS Code.

        (Cloning a repository using VS Code is covered in **[How to get started with Git](/docs/version-control)**.)

5. Open the Command Palette in Visual Studio Code  
   (<kbd>Cmd</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> on macOS, <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> on Windows), then run:

   **Dev Containers: Reopen in Container** 
   
   This operation may take a few minutes the first time.

Visual Studio Code will build the environment and reopen the project inside the isolated container.

Once this is done, you can run the analysis and build outputs as described in the template’s instructions.

<iframe width="560" height="315" src="https://www.youtube.com/embed/xE4Rxre88PY?si=c4o0Za1dEqjpf64y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

## Frequently asked questions

### How do I go back to my container later?

To return to your Dev Container, open up Visual Studio Code and select File > Open recent. Your project's name should appear, followed by the mention \[Dev Container\].

### Things are broken - How do I start over?

You can delete your existing container and create a new one with Visual Studio Code at any time. Open Docker Desktop. Select your container and delete it. This will reset the environment to its original state, while preserving your files.