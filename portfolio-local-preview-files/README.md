# Arpit Gupta Portfolio

## Preview the site locally on Windows

The portfolio uses the root `mkdocs.yml` configuration file and the `docs/` content folder. Run the commands below from the repository root in PowerShell or the VS Code terminal.

### One-time setup

Install Python 3.12 or later and Git. In the repository folder, create an isolated environment and install the pinned MkDocs dependencies:

```powershell
py -3.12 -m venv .venv
.\.venv\Scripts\python.exe -m pip install --upgrade pip
.\.venv\Scripts\python.exe -m pip install -r requirements.txt
```

If `py -3.12` is unavailable, install Python 3.12 or later with the Windows PATH option enabled, then use `python` in place of `py -3.12`.

### Start the live preview

```powershell
.\.venv\Scripts\python.exe -m mkdocs serve --config-file mkdocs.yml
```

Open the local URL printed in the terminal, usually `http://127.0.0.1:8000/`. MkDocs watches the `docs/` files and refreshes the preview after you save an edit. Keep the terminal running while you work; press `Ctrl+C` to stop the preview.

### Reuse the setup

After the one-time setup, start the preview with the command above. The dependencies are pinned in `requirements.txt`; CI installs from the same file and uses Python 3.12 to keep the local and GitHub Actions environments aligned. The `.venv/` environment and generated `/site/` output are excluded from Git.

If you use VS Code, turn off **File > Auto Save** if you want to control when MkDocs refreshes after edits.
