# React Guidelines

## Purpose

This document defines React development guidelines for CampusFlow.

---

# Component Structure

Every feature should follow this structure.

```
students

api

components

hooks

mocks

pages

services

types
```

---

# Page Components

Pages orchestrate the screen.

Pages may call services and manage state.

Pages should remain thin whenever possible.

---

# Reusable Components

Reusable UI belongs inside:

```
src/ui/components
```

Business features must not duplicate reusable components.

---

# Services

Pages never access APIs directly.

All API communication goes through services.

```
Page

↓

Service

↓

API
```

---

# Mock First Development

Every feature starts with mock data.

Mock implementation is replaced later with real API integration.

The service contract should remain unchanged.

---

# Type Safety

Always create interfaces before consuming data.

Interfaces represent API contracts.

---

# Hooks

Business logic that can be reused should be extracted into custom hooks.

---

# Design System

Never hardcode:

- Colors
- Spacing
- Radius
- Typography

Always consume design tokens.

---

# Future Architecture

As the project grows:

```
UI

↓

Feature

↓

Service

↓

API

↓

Backend
```

Each layer has a single responsibility.

Business logic should never leak into presentation components.
