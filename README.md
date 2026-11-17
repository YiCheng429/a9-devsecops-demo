# a9-devsecops-demo

DevOps Assignment 9 (DevSecOps) demo repository — 張奕誠 (B11309043).

> ⚠️ Throwaway demo. It **intentionally** pins old, vulnerable dependencies
> (`lodash@4.17.15`, `minimist@1.2.0`, `express@4.17.1`) and contains insecure
> code patterns so that ESLint, Dependabot and CodeQL have something to find.
> **Never deploy this code.**

## What is in here
| Part | Tool | File |
|---|---|---|
| A | ESLint v10 (flat config) + eslint-plugin-security | `eslint.config.js` |
| E | Dependabot alerts / security updates / version updates | `.github/dependabot.yml` |
| O | CodeQL code scanning, actions pinned to full commit SHAs, least-privilege `permissions` | `.github/workflows/codeql.yml`, `.github/workflows/ci.yml` |

## Run locally
```bash
npm install
npm run lint     # npx eslint .
npm test
npm audit
```
