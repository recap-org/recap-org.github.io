---
title: Dependency management
layout: home
nav_order: 6
---

# Managing project dependencies

## What problem does dependency management solve?

As your project grows, it starts using more and more external libraries:

- R packages,
- Python packages,
- Stata ado files.

At first, this feels harmless. You install what you need and move on.

Over time, two problems appear.

### 1. Reproducibility becomes fragile

If you move to a new computer, or share your project with a collaborator, you must remember:

- which libraries you used,
- which versions were installed,
- and how to install them again.

Without a clear record, setting up the project becomes slow and error-prone.

### 2. Library updates can break your code

Most libraries evolve. Functions are renamed, arguments change, defaults are modified, or features are removed.

If your project depends on a specific version of a library, a future update may silently break your code.  
This becomes especially important for long-running research projects that span months or years.

---

### When should you use dependency management?

Dependency management is most useful when:

- your project is long-running,
- it relies on many external libraries,
- or you care about long-term reproducibility.

For small, short-lived projects, explicit dependency management may be unnecessary.

In RECAP, the **large template enables dependency management by default**, because it is designed for complex, multi-year research projects.  
The medium and small templates keep things simpler, but you can always add dependency management if your project grows in scope.

Dependency management is simply the practice of recording:

- which libraries your project uses,
- and which exact versions it depends on.

This record allows anyone — including your future self — to recreate the same environment in minutes, simply by restoring the libraries from the record.

{: .important-title }
> Dependency management vs containers
>
> **Containers and dependency management solve the same broad problem:**
> making your software environment reusable and reproducible.
>
> They operate at different levels.
> 
> - **Containers** pin the environment at the *system level*  
>  (which operating system, which language versions, which system libraries).
> 
> - **Dependency management tools** pin the environment at the *language level*  
>  (which R packages, Python packages, or Stata ado files — and which versions).
> 
> In other words:
> 
> - Containers decide *which languages and base tools exist*.
> - Dependency management decides *which libraries within those languages your project uses*.
> 
> All RECAP templates rely on containers to standardize the system environment.

> Only the **large template** enables explicit dependency management by default, because it is designed for complex, long-running research projects.  
> You can add dependency management to other templates if your project requires it.

## How dependency management works in practice

Regardless of the programming language, dependency management follows the same three-step logic.

### Step 1 — Record your dependencies

You use a language-specific tool to create a file that lists:

- which libraries your project uses,
- and which exact versions are installed.

This file becomes part of your project and is committed to version control.

### Step 2 — Update the record when things change

Whenever you:

- install a new library, or
- update an existing one,

you update the dependency file using the same tool.

This keeps the recorded environment in sync with the one you are actually using.

### Step 3 — Restore the environment elsewhere

On a new computer (or for a collaborator), you use the same tool to:

- read the dependency file,
- install the exact recorded versions.

The result is a reproducible language environment that matches the original project.

---

{% tab_group "language" %}

## R

In R projects, dependency management in RECAP is handled using the `renv` package.

The RECAP large template already initializes `renv` for you. This creates a file called `renv.lock`, which records the exact versions of all packages used by the project.

The typical workflow is:

- **Initialize (already done in the large template):**  
  `renv::init()`  
  This creates the `renv.lock` file.

- **Step 1 — Record dependencies:**  
  `renv::snapshot()`  
  This updates `renv.lock` with the exact versions currently installed.

- **Step 2 — Update after changes:**  
  Whenever you install or update packages, run  
  `renv::snapshot()` again  
  to keep the lockfile in sync.

- **Step 3 — Restore elsewhere:**  
  On a new computer or for a collaborator, run  
  `renv::restore()`  
  to install the exact versions recorded in `renv.lock`.

The only file that needs to be committed to version control is `renv.lock`.  
This file is enough to recreate the project’s R package environment.

For more details, refer to the official `renv` <a href="https://rstudio.github.io/renv/" target="_blank">documentation</a>.

## Python

Dependency management for Python projects typically relies on a file that records required packages and their versions.

*(Coming soon.)*

## Stata

In Stata projects, dependency management consists of recording required ado packages and ensuring consistent installation across machines.

Our templates feature a `requirements.do` file, which lists all ado packages that the project depends on.

{% endtab_group %}