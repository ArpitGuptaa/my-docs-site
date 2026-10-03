#!/usr/bin/env python3
"""Fetch curated Google News RSS headlines for the portfolio ribbon."""
from __future__ import annotations

import json
import re
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET
from datetime import datetime, timezone
from pathlib import Path

OUTPUT = Path("docs/assets/data/portfolio-news.json")
USER_AGENT = "ArpitGuptaPortfolio/1.0 (+https://arpitguptaa.github.io/my-docs-site/)"

FEEDS = {
    "ai": '"generative AI" OR "agentic AI" OR "AI agents" OR LLM OR RAG when:7d',
    "technical_writing": '"technical writing" OR "technical documentation" OR "developer documentation" OR "docs as code" OR "API documentation" when:7d',
}


def feed_url(query: str) -> str:
    params = urllib.parse.urlencode({"q": query, "hl": "en-US", "gl": "US", "ceid": "US:en"})
    return f"https://news.google.com/rss/search?{params}"


def clean_title(title: str) -> str:
    # Google News commonly appends " - Publisher". Keep it: it gives useful source context.
    return re.sub(r"\s+", " ", title or "").strip()


def fetch_one(query: str) -> dict:
    request = urllib.request.Request(feed_url(query), headers={"User-Agent": USER_AGENT})
    with urllib.request.urlopen(request, timeout=20) as response:
        root = ET.fromstring(response.read())
    item = root.find("./channel/item")
    if item is None:
        raise RuntimeError("No matching Google News items returned")
    title = clean_title(item.findtext("title", default=""))
    link = (item.findtext("link", default="") or "").strip()
    published = (item.findtext("pubDate", default="") or "").strip()
    source_node = item.find("source")
    source = (source_node.text or "").strip() if source_node is not None else ""
    if not title or not link:
        raise RuntimeError("Google News item did not contain a title and link")
    return {"title": title, "url": link, "source": source, "published": published}


def previous() -> dict:
    try:
        return json.loads(OUTPUT.read_text(encoding="utf-8"))
    except (FileNotFoundError, json.JSONDecodeError):
        return {}


def main() -> None:
    old = previous()
    data = {"updated_at": datetime.now(timezone.utc).isoformat(), "items": {}}
    errors = []
    for key, query in FEEDS.items():
        try:
            data["items"][key] = fetch_one(query)
        except Exception as exc:  # preserve the last known headline instead of breaking the site
            cached = old.get("items", {}).get(key)
            if cached:
                data["items"][key] = cached
                errors.append(f"{key}: using cached item ({exc})")
            else:
                errors.append(f"{key}: unavailable ({exc})")
    if errors:
        data["warnings"] = errors
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(f"Wrote {OUTPUT}")
    for warning in errors:
        print(f"WARNING: {warning}")


if __name__ == "__main__":
    main()
