---
title: Choosing a template
layout: home
nav_order: 2
---

# Choosing a RECAP template

RECAP templates are designed around **project structure and lifespan**, not technical difficulty.

Each template encodes a set of good research practices that match the scale of a project. The goal is to make reproducible workflows easy without imposing unnecessary complexity. Choosing the right template upfront helps keep your project simple and maintainable but nothing is locked in: you can always move to a larger template later.

RECAP currently offers three templates: **Small**, **Medium**, and **Large**.

---

## How to think about templates

A good way to choose a template is to ask:

- How many steps does my analysis involve?
- Should data cleaning be clearly separated from analysis?
- Will I need to rerun the project weeks, months, or years from now?
- Will I be handling multiple datasets or producing multiple deliverables?

Templates reflect increasing levels of structure and increasing emphasis on reproducibility over time.

---

## Small template

The **Small** template is the simplest RECAP setup.

It consists of a **single analysis file** that:
- loads the data,
- performs the analysis,
- and produces a reproducible report.

Everything happens in one place.

### Use Small if:
- you are working on a homework or short assignment,
- the dataset is already clean or very simple,
- the analysis is exploratory or limited in scope,
- the goal is to produce a single report.

### Typical examples:
- problem sets
- short empirical exercises
- in-class assignments
- quick replication tasks

### Not ideal if:
- data cleaning becomes substantial,
- the project needs to be rerun many times,
- the workflow would benefit from clearer structure.

---

## Medium template

The **Medium** template introduces **structure and short-run reproducibility**.

It typically includes:
- one script (or notebook) for **data cleaning**,
- one script (or notebook) for **analysis and reporting**,
- simple [build scripts](/docs/building-with-make) to ensure that steps are run in the correct order.

The analysis file remains the final deliverable.

The focus of the Medium template is **workflow clarity and rerunnability**: anyone can rerun the project from raw data to final output by executing the build pipeline.

### Use Medium if:
- data preparation is a meaningful part of the project,
- cleaning and analysis should be clearly separated,
- the project will be rerun multiple times over a short period,
- reproducibility means “the same code produces the same results”.

### Typical examples:
- final course projects
- applied methods assignments
- replication exercises using raw data

### Not ideal if:
- the project is expected to evolve over months or years,
- it involves handling several datasets or several deliverables,
- long-term reproducibility is a primary concern.

---

## Large template

The **Large** template is designed for **long-term, collaborative research**.

It includes:
- multiple scripts for data ingestion and cleaning,
- multiple analysis scripts,
- several deliverables (paper, appendix, presentation),
- a [build pipeline](/docs/building-with-make) that ties all components together,
- explicit [dependency management](/docs/dependency-management) to ensure long-run reproducibility.

In addition to structured workflows, the Large template records the software environment used by the project. This makes it possible to reproduce results reliably even as programming languages and packages evolve over time.

### Use Large if:
- the project involves multiple datasets or analysis stages,
- you are working with collaborators,
- the project will live for months or years,
- results need to remain reproducible in the long run.

### Typical examples:
- theses
- working papers
- collaborative research projects
- long-term replication efforts

---

## A simple rule of thumb

- Choose **Small** if everything fits naturally in one file.
- Choose **Medium** if cleaning and analysis should be separate.
- Choose **Large** if the project produces multiple outputs or will live for a long time.

If you are unsure between two options, start with the smaller one. RECAP templates are designed so that projects can grow in structure as needed.

---

## What’s next?

Once you’ve chosen a template, the next step is deciding **how to run it**:
- directly on your machine,
- using containers locally,
- or in the cloud with GitHub Codespaces.

👉 Continue with **[How to run a RECAP template](/docs/workflows)**.