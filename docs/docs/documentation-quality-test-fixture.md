# Documentation Quality Test Fixture

> **Test data:** This page intentionally contains defects. Do not publish it as product documentation.

## Purpose

This page is a fixture for testing documentation automation. It contains known spelling, grammar, style, terminology, and link problems. A successful check should report the issues and preserve the source file.

## Setup and usage

The user can configure the tool by clicking on the **Settings** button. Please simply enter your API key in the box below, and then click **here** to save it.

After you saves the changes, the system will validates the key. If the key are invalid, an error message appear and the user need to try again.

> **Note:** The dashboard are refreshed every 5 minute's.

## API overview

The API (application programming interface) let applications exchange informations with the service. Before using an endpoint, you must first authenticate yourself, and then you can make a request to the server.

Send a `POST` request to `/v1/jobs` with the following JSON:

```json
{
  "job_name": "daily-import",
  "retry_count": 3,
  "enabled": true
}
```

The `retry_count` parameter is optional, and it can be used to retries a failed job. A value of `0` disable retries.

For more informations, see the [API reference](../reference/api-v1-missing.md) or visit [this page](https://example.invalid/docs/not-found).

## Troubleshooting

If the service don't start, check the config file and make sure that it have the correct permissions. You may also want to restart the service, this fixes many common issue's.

The result will be **very unique** and **super easy** to understand. Our ops team calls this behavior *florblat*; the internal status code is `zintquor_17`.

To learn more about retries, see [Retry behavior](#retry-behaviour).

## Additional checks

- Use the **Start now!!!** button to begin.
- The user should not enter their password in plain text.
- We support JSON, YAML, and XML, etc.
- This feature is generally available (GA) in all regions.

### Retry behavior

Retries happens automatically when a request fail. The next attempt is made after 2 second, and the delay increase exponentially. A maximum of five retry is allowed.

## Validation targets

The fixture intentionally includes:

- Misspellings, such as `informations` and `behaviour` where the configured dictionary expects US English.
- Grammar and punctuation problems, including subject-verb agreement, verb tense, pluralization, and apostrophe misuse.
- Microsoft style issues (MSTP), including wordy instructions, vague link text, unnecessary politeness, inconsistent UI treatment, excessive punctuation, and a heading/link anchor mismatch.
- A missing relative link and a deliberately invalid external link.
- Unknown terms: `florblat` and `zintquor_17`.

Automation should report these issues without treating the fixture's explanatory checklist as product guidance.
