# Coding Standards

## Purpose

This document defines the coding standards for CampusFlow.

Consistency is more important than personal preference.

---

# General Principles

- Write readable code.
- Prefer clarity over cleverness.
- Avoid duplication.
- Follow SOLID principles.
- Keep functions small.
- Keep components focused.

---

# TypeScript

Always use explicit types.

Good

```ts
const students: Student[] = [];
```

Avoid

```ts
const students = [];
```

---

# React

Prefer Functional Components.

Prefer Hooks.

Avoid class components.

---

# Naming

## Components

PascalCase

```
StudentListPage

PageHeader

PrimaryButton
```

---

## Variables

camelCase

```
studentName

totalStudents
```

---

## Constants

UPPER_SNAKE_CASE only when globally constant.

Otherwise use camelCase.

---

# Folder Naming

Feature folders use lowercase.

```
students

teachers

attendance
```

---

# No Magic Values

Never write:

```
padding: 16

color: "#4F46E5"
```

Always use design tokens.

```
spacing.lg

colors.primary
```

---

# Component Responsibility

One component should solve one problem.

Avoid very large components.

Extract reusable logic whenever possible.

---

# Documentation

Every major architectural decision must be documented.

Every completed story must update documentation.

Documentation is part of the Definition of Done.
