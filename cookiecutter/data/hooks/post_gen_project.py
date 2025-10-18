import os
import shutil
if not r:
    os.remove(".lintr")
    os.remove(".Rprofile")
    os.remove("renv.lock")
    os.remove("vscode-packages.R")
    shutil.rmtree("renv", ignore_errors=True)
if not gitignore:
    os.remove(".gitignore")
