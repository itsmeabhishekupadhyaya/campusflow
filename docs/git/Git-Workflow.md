# Git Workflow

## Purpose

This document defines the Git workflow used by the CampusFlow project.

Following a consistent Git workflow improves collaboration, code quality and release management.

---

# Branch Strategy

```
main
│
└── develop
     │
     ├── feature/cf-011-student-foundation
     ├── feature/ds-001-theme-foundation
     ├── feature/ds-002-layout-components
     └── bugfix/...
```

---

# Branch Types

## main

Production-ready code.

Only stable and reviewed code is merged into `main`.

---

## develop

Integration branch.

All completed feature branches are merged into `develop`.

---

## feature/\*

Every user story must be implemented in its own feature branch.

Examples:

```
feature/cf-011-student-foundation

feature/cf-012-student-search

feature/ds-002-layout-components
```

---

# Development Workflow

1. Pull latest `develop`
2. Create feature branch
3. Implement feature
4. Commit frequently
5. Push feature branch
6. Create Pull Request
7. Perform Code Review
8. Merge into `develop`
9. Delete feature branch

---

# Commit Message Convention

```
feat: add student list page

feat: implement design system spacing

fix: resolve student service import

refactor: extract reusable button

docs: update development approach
```

---

# Pull Request Checklist

Before creating a PR ensure:

- Project builds successfully
- No TypeScript errors
- Documentation updated
- Code reviewed
- Acceptance criteria satisfied

---

# Merge Policy

Feature → Develop

Develop → Main

Direct commits to `main` are not allowed.
