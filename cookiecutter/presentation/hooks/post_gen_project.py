import os
assets  = '<< cookiecutter.assets >>' == 'True'
bib  = '<< cookiecutter.bib >>' == 'True'
gitignore  = '<< cookiecutter.gitignore >>' == 'True'
if assets:
    os.makedirs("assets/tables")
    os.makedirs("assets/figures")
if not bib:
    os.remove("library.bib")
if not gitignore:
    os.remove(".gitignore")
