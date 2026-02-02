---
title: Git concepts and best practices
parent: Getting started with Git
layout: home
nav_order: 1
---

# Git concepts and best practices

This page provides a deeper look at how Git works and how to use it effectively in research projects.

You do **not** need to read this page to get started with RECAP.  
It is here to help you understand what Git is doing behind the scenes and to develop good habits as projects grow.

---

## Commits and staging

A **commit** is a snapshot of your project at a given point in time.

Before committing, Git asks you to **stage** the changes you want to include.  
Staging lets you decide *what* goes into the next snapshot.

### Why staging exists

Imagine you edited two files:
- one change is finished and correct,
- the other is still experimental.

Staging allows you to commit only the finished change, leaving the other for later.

In practice, especially when starting out, it is often simplest to:
- stage **all** changes,
- commit them together.

> **Rule of thumb:**  
> If everything works, stage everything and commit.

---

## Branches

A **branch** is a parallel version of your project.

Branches are useful when you want to:
- explore a new idea,
- work on a feature that might break existing code,
- keep multiple versions of the same project.

For example, you might have:
- a main branch with stable analysis,
- a separate branch to add data from another country.

When you are happy with the result, you can **merge** the branch back into the main version.

Branches make it easy to experiment without risking your working code.

---

## Local and remote repositories

Your project exists in two places:
- the **local repository** on your computer,
- the **remote repository** hosted online (for example on GitHub).

You work locally, then synchronize with the remote repository.

This separation allows you to:
- work offline,
- experiment freely,
- and decide when changes are shared or backed up.

---

## Pushing and pulling

- **Pushing** uploads your local commits to the remote repository.
- **Pulling** downloads commits from the remote repository to your local machine.

You typically:
- **pull** when you start working (especially on a new machine),
- **commit** as you make progress,
- **push** when you want your work safely backed up online.

This workflow also allows you to switch seamlessly between:
- your personal computer,
- a GitHub Codespace,
- or another machine.

---

## README files

A `README` file acts as the landing page of a repository on GitHub.

In research projects, a good README typically explains:
- the goal of the project,
- how to set up the environment,
- how to run the analysis,
- and how outputs are generated.

READMEs are written in **Markdown**, which GitHub renders automatically.

RECAP templates include starter READMEs that you can adapt as your project evolves.

---

## Ignoring files with `.gitignore`

Not all files should be tracked by Git.

A `.gitignore` file tells Git which files or folders should **never** be committed.

You should ignore:
- generated outputs (PDFs, figures, tables),
- temporary files,
- caches and logs,
- anything that can be fully reproduced by running the code.

> **Rule of thumb:**  
> Commit raw data and code.  
> Ignore everything that can be regenerated.

RECAP templates include sensible `.gitignore` defaults so you rarely need to modify them.

---

## Recovering when something goes wrong

Mistakes happen. Git is designed to help you recover from them.

If you:
- committed something by accident,
- want to undo a change,
- or feel completely stuck,

these resources are excellent and beginner-friendly:
- [Oh Shit, Git!](http://ohshitgit.com/)
- [Burn it down and start again](http://happygitwithr.com/burn.html)

---

## How this fits into RECAP

In RECAP, Git is not about ceremony or complexity.

It is:
- a safety net,
- a backup system,
- a way to experiment confidently,
- and a powerful companion when using AI assistants.

You can adopt Git concepts gradually, as your projects grow in scope and ambition.