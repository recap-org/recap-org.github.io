# Data template

## Purpose

This repository provides a batteries-included starter template for academic data-related projects using the QuaLaR (Quarto + LaTeX + R) stack. It is meant to be used within a devcontainer for getting started quickly, with a large number of development environments (e.g., VSCode, Positron, RStudio). The building blocks of this template are: 

1. Clean raw data to produce processed data
2. Analyse the processed data to produce tables and figures
3. Use the tables and figures in a series of LaTeX documents: the research article, a separate appendix, and a Beamer presentation. 

This starter template enforces a series of good practices for reproductible research: 

- Use tests to make sure that your data is sound and your helper functions work as expected. 
- Declare explicitly the environment used for the analysis, using the renv package. 
- Declare the entire build process of the project, from cleaning data to generating the article, appendix, and presentation using GNU make. 

## Getting started

To get started, above the file list, click **Use this template**.

![Use this template button](https://docs.github.com/assets/cb-76823/mw-1440/images/help/repository/use-this-template-button.webp)

You have two options: 

1. Try out the template online first, then save your own copy.
2. Create your copy of the repository first, then modify it: select **Create a new repository**. 

### Test the template online first

1. Select **Open in a codespace**. 

### Create your copy first

1. Select **Create a new repository**.
2. Use the Owner dropdown menu to select the account you want to own the repository.

![Set the repository's owner](https://docs.github.com/assets/cb-124337/mw-1440/images/help/repository/create-repository-owner.webp)

3. Type a name for your repository (maximum 100 characters), and an optional description.

![Set the repository's name](https://docs.github.com/assets/cb-136860/mw-1440/images/help/repository/create-repository-name.webp)

4. Choose a repository visibility.
5. Click **Create repository from template.**

## Basic demo

Run the demo by opening a terminal and typing:

```bash
make all
```

This will run the data cleaning script, then do the analysis, and finally compile all the LaTeX documents. You will find the final documents in the `./bin/tex` directory and intermediary reports of the data cleaning and analysis steps in the `./bin/src` directory.

Run the tests by opening a terminal and typing: 

```bash
make tests
```

## Using this template

This template is organized as follows

```bash
├── LICENSE
├── README.md
├── assets
│   ├── figures
│   ├── static
│   └── tables
├── bin
│   ├── src
│   └── tex
├── data
│   ├── processed
│   └── raw
├── Makefile
├── _quarto.yaml
├── renv
├── renv.lock
├── src
│   ├── analysis
│   ├── data
│   └── lib
├── tests
├── library.bib
└── tex
    ├── appendix
    ├── article
    └── presentation
```

### From data cleaning to document production

When running the command `make all` in the terminal, this template uses GNU make to execute three steps: 

1. **Clean raw data.** Run all the scripts in the `./src/data` directory
2. **Do the analysis.** Run all the scripts in the `./src/analysis` directory
3. **Compile the LaTeX documents.** Build all the documents in the `./tex` directory

Try and customize `./Makefile` to change how the build steps are executed. 

#### Step 1: cleaning raw data

The raw data should be placed in the `./data/raw` directory, and committed to git (unless it is very large, in which case you should consider alternative storage solutions). 

The code that processes that data into raw data should be a series of Quarto `.qmd` scripts placed in the `./src/data` directory. Each script should produce a series of clean datasets, to be placed in the `./data/processed` directory. Each script should be able to run in parallel (i.e., they should not depend on previous scripts). 

Using Quarto has a series of advantages. First, it always produces a single, traceable `.pdf` output that can be used for build scripts. Second, Quarto provides easy to read output. Third, Quarto has a cache feature that can dramatically speed up code re-execution. 

#### Step 2: doing the analysis

The code that does the analysis uses the processed data to procude tables and figures used in the LaTeX documents. This code should be a series of Quarto `.qmd` scripts placed in the `./src/analysis` directory. Each script takes the processed data in `./data/processed` as inputs, and stores its outputs in `./assets/tables` and `./assets/figures`. This template provides the helper functions `save_figure` and `save_table` that do this for you. These functions are in `./src/lib/io.R`. 

#### Step 3: compiling the LaTeX documents

Each LaTeX document is a sub-directory of `./tex`. The main `.tex` file of each document must be called `main.tex`. Each LaTeX document has symlinks to the `./assets` directory and to `./library.bib` for shared use of the project's assets and bibliography. 

A project may also use assets that are not generated by code (e.g., external images, ...). These should be placed in `./assets/static` and committed to git. 

### Helper functions

Helper functions are shared across your data and analysis code. They are declared in `.R` files that are placed in `./src/lib`. Think of these helper functions as a quasi-R package that accompanies the project. As such, each of these functions should be properly documented so that all collaborators understand how they work.  

### Tests

Tests are placed in the `./tests` directory. They should be files called `test-NAME.R`, with `NAME` a friendly name for your series of tests. 

You should specify tests to ensure that the raw data has been properly cleaned and that the helper functions work as intended. 

### Configuration

Look into the following files to tweak things as you see fit: 

- `./.lintr`: R linting options
- `./_quarto.yaml`: Quarto options

## Credits

We thank 

- [Jason Leung](https://unsplash.com/@ninjason?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) on [Unsplash](https://unsplash.com/photos/donkey-kong-arcade-game-screen-with-1981-date-c5tiCWrZADc?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) for that nice Donkey Kong photo.
- [grandmaster07](https://www.kaggle.com/grandmaster07) for the student exam score dataset analysis published on [Kaggle](https://www.kaggle.com/datasets/grandmaster07/student-exam-score-dataset-analysis)
      
