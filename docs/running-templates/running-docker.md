---
title: Run locally in an isolated environment (Docker)
parent: How to run a template
layout: home
nav_order: 2
---

# Run locally in an isolated environment (Docker)

This option lets you run the RECAP template on your own machine using a **self-contained environment** that includes all required tools, without installing them permanently on your system.

In practice, this is done using container technology (most commonly Docker). You do not need to understand how containers work internally to use this option.

This approach provides a good balance between reproducibility and local control, and is the recommended option for most users.

## When this option is a good fit

Choose this option if:
- you want strong reproducibility without relying on the cloud,
- you prefer to keep your system clean and avoid installing many tools,
- you are working on a medium or large project,
- you want an experience close to Codespaces, but running locally.

## How it works

The template is opened inside an isolated environment that contains:
- the statistical language used by the project,
- document generation tools,
- and all other required dependencies.

From your point of view, you work with the project files as usual, while the execution happens inside the isolated environment.

## Working in an editor

The recommended way to use this option is **[Visual Studio Code](https://code.visualstudio.com/)**, which can automatically open the project in the isolated environment.

This is the configuration documented and supported by RECAP.

Other editors may be able to connect to the same environment, but are not currently documented or supported.

## Getting set up

To use this option, you need Docker installed on your machine.

- **macOS**  
  Install Docker Desktop for macOS. The default installation is sufficient for most users.

- **Windows**  
  Install Docker Desktop for Windows. Docker requires Windows Subsystem for Linux (WSL2); the installer will guide you through this process.

Installing Docker is a one-time setup, but it may take a few minutes and require restarting your computer.

If this setup feels cumbersome, consider using GitHub Codespaces instead.

For detailed installation instructions, see the official Docker documentation:
- [macOS](https://docs.docker.com/desktop/install/mac-install/)
- [Windows](https://docs.docker.com/desktop/install/windows-install/)

## Things to be aware of

- **Memory is allocated explicitly**  
  When using Docker, the amount of memory available to the project depends on how much RAM is allocated to Docker in its settings.  
  For most projects, the default configuration is sufficient, but larger analyses may require increasing this value.

- **Platform-specific limitations**  
  Some tools impose architectural constraints. For example, Stata is only available on x86-based systems and cannot run natively on ARM-based machines using containers.

- **Slight initial setup cost**  
  Installing Docker and configuring the editor takes a bit of time, but this setup only needs to be done once.

Compared to bare-metal setups, this option significantly reduces configuration issues. Compared to cloud-based solutions, it gives you full control over resources while keeping a reproducible environment.