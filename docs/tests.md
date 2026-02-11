---
title: Testing your project
layout: home
nav_order: 7
---

# Testing your project

## Why do we need tests?

As your project grows, you change things.

You refactor code, update libraries, reorganize files, and experiment with new ideas. You want to make progress — but you also want to avoid breaking parts of the project that already work.

Tests provide a safety net. 

They allow you to verify that:

- important helper functions still work correctly,
- key data transformations still behave as expected,
- critical assumptions about your data remain true.

With tests in place, you can make changes confidently. You can also confidently allow collaborators or AI assistants to make changes, knowing that tests will catch any unintended consequences.

---

## What are tests?

Tests are small pieces of code that check specific aspects of your project.

In a research project, tests might verify that:

1. a data-cleaning step produces data with expected properties  
   (for example, shares sum to 100%, or required variables are present),

2. helper functions used in multiple scripts continue to return correct results,

3. a refactoring does not change previously validated outputs.

Tests are not meant to be exhaustive.  
They are meant to protect the parts of your project that must not silently break.

A test typically consists of three phases:

- **Setup** – prepare the data or objects needed for the test,
- **Execution** – run the code being tested,
- **Assertion** – check that the result matches expectations.

---

## How tests fit into RECAP

Testing becomes especially useful as projects grow in size and complexity.

For this reason, RECAP integrates testing by default in the **medium and large templates**, which are designed for multi-step and long-running projects.

In these templates:

- Test scripts live in a `tests/` directory.
- Test files follow a naming convention (for example, starting with `test-`).
- Tests can be executed via `make`.

When you run:

```bash
make test
```

all test scripts are executed.

If a test fails, the command stops and prints an error message explaining what went wrong.  
This makes it easy to detect problems early.

Medium and large templates include example tests to illustrate:

- how to test data integrity,
- how to test reusable functions.

You can extend these tests as your project grows.

## Testing in practice

{% tab_group "language" %}

## R

In R-based RECAP templates, tests are implemented using the `testthat` package.

`testthat` provides:

- structured test files,
- readable assertions,
- clear failure messages.

Tests are regular R code, but written in a way that automatically checks expectations.

For more details, see the official `testthat` <a href="" target="_blank">documentation</a>.

## Python

Testing support for Python projects in RECAP is evolving.

In general, Python testing relies on dedicated testing frameworks that allow you to write small test functions and run them automatically.

*(Coming soon.)*

## Stata

Testing support for Stata projects in RECAP is evolving.

In principle, tests consist of scripts that verify expected properties of datasets or outputs and return errors when expectations are violated.

*(Coming soon.)*

{% endtab_group %}

