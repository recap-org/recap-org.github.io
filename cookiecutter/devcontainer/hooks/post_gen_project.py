import os
from cookiecutter.main import cookiecutter
import subprocess

# create directories
os.makedirs("tex")


# create devcontainer template
# cookiecutter(
#     '../',
#     output_dir="./tex",
#     no_input=True,
#     directory='./article',
#     extra_context={
#         'assets': False,
#         'bib': False,
#         'gitignore': False
#     }
# )

