# Arpit Gupta's Technical Writing Portfolio

This repository contains the source for [Arpit Gupta's portfolio](https://arpitguptaa.github.io/my-docs-site/), built with MkDocs and the Material for MkDocs theme.

## Preview changes locally

### Prerequisites

- Python 3.12 or newer
- Git, with this repository cloned to your machine

### Windows PowerShell

Open PowerShell in the repository folder and run:

```powershell
py -3.12 -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install --upgrade pip
python -m pip install -r requirements.txt
python -m mkdocs serve --config-file mkdocs.yml
```

If PowerShell blocks environment activation, run `.venv\Scripts\activate.bat` from Command Prompt instead, then run the pip and MkDocs commands above.

### macOS or Linux

Run these commands from the repository folder:

```bash
python3 -m venv .venv
source .venv/bin/activate
python -m pip install --upgrade pip
python -m pip install -r requirements.txt
python -m mkdocs serve --config-file mkdocs.yml
```

When the server starts, open [http://127.0.0.1:8000/](http://127.0.0.1:8000/) in your browser. Keep the terminal open while previewing. MkDocs refreshes the preview when you save documentation or asset changes.

Stop the server with `Ctrl+C`. To build the site locally without starting the preview server, run:

```bash
python -m mkdocs build --strict --config-file mkdocs.yml
```

The dependencies in `requirements.txt` are shared by local preview and the GitHub Actions build.
