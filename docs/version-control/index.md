---
title: Getting started with Git
layout: home
nav_order: 4
---

# Getting started with Git

You do **not** need to master Git to use RECAP.

In practice, Git acts as a **safety net**: it lets you save working states of your project, experiment freely (including with AI assistants), and always return to a known good version if something breaks.

This page explains just enough Git to help you work confidently with RECAP templates — without using the command line and without learning everything at once.

---

## What problem does Git solve?

Imagine working on a document that evolves over time.

You try new ideas, make edits, sometimes regret them, and occasionally need to go back to an earlier version. Without a system to track changes, this often leads to folders full of files named things like:
- `report.docx`
- `report_v2.docx`
- `report_final.docx`
- `report_final_really.docx`

Git replaces this with a **single project**, where you can:
- save snapshots of your work,
- see what changed over time,
- and return to earlier versions when needed.

---

## How Git helps you work safely

Git lets you save **snapshots** of your project over time. Each snapshot is called a **commit**.

If something goes wrong later — for example after a large refactor or an AI-generated change — you can **revert** to an earlier commit and continue from there.

All files related to your project live in a **repository** (often shortened to *repo*).  
You will usually have:
- a copy of the repository on your computer,
- and a copy stored online on GitHub, which acts as a backup.

You do not need to memorize these terms now.  
You will encounter them naturally as you work.

---

## How you usually interact with Git in RECAP

When using RECAP templates, you typically interact with Git through graphical tools:
- GitHub’s web interface,
- and the built-in Git support in Visual Studio Code.

You do **not** need to use Git from the command line.

RECAP is designed so that you can adopt Git gradually, as it becomes useful to you.

---

## Getting started

### Install Git and record your identity

Before opening a project in Visual Studio Code, Git needs to know who you are.  
This information will be attached to the changes you save.

<div class="tab-container">
  <div class="tab-buttons">
    <button class="active" data-category="os" data-value="macOS"><img src="/assets/static/macos.svg" alt="macOS" /> macOS</button>
    <button data-category="os" data-value="Windows"><img src="/assets/static/windows.svg" alt="Windows" /> Windows</button>
  </div>

  <div id="panel-os-macOS" class="tab-panel active" data-category="os">
    <p>Git is included with macOS, but it needs to be enabled.</p>
    <p>Open the Terminal and type:<br/>
    <code>xcode-select --install</code></p>
    <p>A dialog will appear guiding you through the installation.</p>
  </div>

  <div id="panel-os-Windows" class="tab-panel" data-category="os">
  <p>
  Download <a href="https://git-scm.com/" target="_blank">Git for Windows</a> and install it using the recommended settings.
  </p>
  </div>
</div>

Once Git is installed, open the Terminal (macOS) or Git Bash / Command Prompt (Windows) and run the following commands, replacing the placeholders with your own name and email:

- `git config --global user.name "Your Name"`
- `git config --global user.email "me@example.com"`

You do not need to use your real name or email address, but they must be set before making your first commit.

If your GitHub account is configured to keep your email private, do not use your GitHub login email here.
Instead, use any email address written in a standard email format (for example, yourname@example.com).
It does not need to be a real inbox or match your GitHub account.

---

### Get a RECAP template on your computer

Start from the **RECAP template repository page on GitHub**.

#### Step 1: Create your own repository

Click the **“Use this template”** button.

This creates a new repository under your GitHub account, based on the RECAP template.  
You can choose a name and decide whether it should be public or private.
You will then be taken to your new repository page.

#### Step 2: Open the project in your editor

To work locally, you need a local copy of the project.  
Git calls this **cloning** the repository.

<div class="tab-container">
  <div class="tab-buttons">
    <button class="active" data-category="ide" data-value="vscode"><img src="/assets/static/vscode.svg" alt="VS Code" /> VS Code</button>
    <button data-category="ide" data-value="positron"><img src="/assets/static/positron.svg" alt="Positron" /> Positron</button>
    <button data-category="ide" data-value="rstudio"><img src="/assets/static/rstudio.svg" alt="RStudio" /> RStudio</button>
  </div>

  <div id="panel-ide-vscode" class="tab-panel active" data-category="ide">
    <ol>
      <li>On your repository page, click the green <strong>Code</strong> button.</li>
      <li>Select the <strong>Local</strong> tab and copy the HTTPS URL.</li>
      <li>Open <strong>Visual Studio Code</strong>.</li>
      <li>Open the Command Palette:
        <ul>
          <li><kbd>Cmd</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (macOS)</li>
          <li><kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Windows)</li>
        </ul>
      </li>
      <li>Run <strong>Git: Clone</strong>, paste the URL, and choose a folder.<br>
      Avoid folders that are automatically synced by tools like Google Drive, Dropbox, or OneDrive, as they can interfere with Git.
      Many people keep their coding projects in a dedicated folder (for example, a folder named "Projects" or "Code").</li>
    </ol>
    <p>Visual Studio Code will download the project and open it for you.</p>
  </div>

  <div id="panel-ide-positron" class="tab-panel" data-category="ide">
    <ol>
      <li>On your repository page, click the green <strong>Code</strong> button.</li>
      <li>Select the <strong>Local</strong> tab and copy the HTTPS URL.</li>
      <li>Open <strong>Positron</strong>.</li>
      <li>Open the Command Palette:
        <ul>
          <li><kbd>Cmd</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (macOS)</li>
          <li><kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Windows)</li>
        </ul>
      </li>
      <li>Run <strong>Git: Clone</strong>, paste the URL, and choose a folder.<br>
      Avoid folders that are automatically synced by tools like Google Drive, Dropbox, or OneDrive, as they can interfere with Git.
      Many people keep their coding projects in a dedicated folder (for example, a folder named "Projects" or "Code").</li>
    </ol>
    <p>Positron will download the project and open it for you.</p>
  </div>

  <div id="panel-ide-rstudio" class="tab-panel" data-category="ide">
    <ol>
      <li>On your repository page, click the green <strong>Code</strong> button.</li>
      <li>Select the <strong>Local</strong> tab and copy the HTTPS URL.</li>
      <li>Open <strong>RStudio</strong>.</li>
      <li>Go to <strong>File</strong> → <strong>New Project...</strong></li>
      <li>Select <strong>Version Control</strong>, then <strong>Git</strong>.</li>
      <li>Paste the repository URL and choose a folder.<br>
      Avoid folders that are automatically synced by tools like Google Drive, Dropbox, or OneDrive, as they can interfere with Git.
      Many people keep their coding projects in a dedicated folder (for example, a folder named "Projects" or "Code").</li>
      <li>Click <strong>Create Project</strong>.</li>
    </ol>
    <p>RStudio will download the project and open it for you.</p>
  </div>
</div>

---

## What’s next?

You are now set up to work with Git in RECAP.

You can start editing files, running analyses, and saving your work as commits.


➡️ **[Using Git in practice](./practice)**