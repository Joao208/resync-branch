# ReSync Branch

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=Joao208_resync-branch&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=Joao208_resync-branch)
[![codecov](https://codecov.io/gh/Joao208/resync-branch/branch/main/graph/badge.svg?token=YK3MIN9SMX)](https://codecov.io/gh/Joao208/resync-branch)
[![Bump Version](https://github.com/Joao208/resync-branch/actions/workflows/bump.yml/badge.svg)](https://github.com/Joao208/resync-branch/actions/workflows/bump.yml)
[![Test Action](https://github.com/Joao208/resync-branch/actions/workflows/test-action.yml/badge.svg)](https://github.com/Joao208/resync-branch/actions/workflows/test-action.yml)
[![Unit Tests](https://github.com/Joao208/resync-branch/actions/workflows/test.yml/badge.svg)](https://github.com/Joao208/resync-branch/actions/workflows/test.yml)


This action will rebase/resync/reset your branch equal your default branch (main/master...)

🚨 For run correctly is needed `PERSONAL_TOKEN`, `BRANCH_NAME` and `DEFAULT_BRANCH` 🚨

You can run this action every time you create a new branch, synchronize or push to main

```
name: Automatic Rebase

on:
  push:
    branches:
      - main
  pull_request:
    types: [opened, synchronize, reopened]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: ./
        with:
          PERSONAL_TOKEN: ${{secrets.PERSONAL_TOKEN}}
          BRANCH_NAME: development
          DEFAULT_BRANCH: ${{github.event.repository.default_branch}}
```

or scheduled, in this example we will run every friday at 17:00

```
name: Automatic Rebase

on:
  schedule:
    - cron: '0 17 * * 5'
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: ./
        with:
          PERSONAL_TOKEN: ${{secrets.PERSONAL_TOKEN}}
          BRANCH_NAME: development
          DEFAULT_BRANCH: ${{github.event.repository.default_branch}}
```