| Tool             | Why We Use It             |
| ---------------- | ------------------------- |
| Prettier         | Consistent formatting     |
| EditorConfig     | Cross-editor consistency  |
| ESLint           | Code quality              |
| VS Code Settings | Team-wide editor behavior |

# CampusFlow Development Standards

> This document defines the development standards, architecture guidelines, and coding conventions followed throughout the CampusFlow project.
>
> Every contributor must follow these standards to ensure consistency, maintainability, and scalability.

---

# 1. Project Philosophy

CampusFlow is built using modern enterprise software engineering principles.

## Core Principles

- API First Design
- Component Driven Development
- Reusability over Duplication
- Single Responsibility Principle (SRP)
- Clean Architecture
- Consistent Folder Structure
- Type Safety using TypeScript
- Responsive UI
- Accessibility First
- Maintainable & Scalable Code

---

# 2. Project Folder Structure

```
src/
│
├── assets/
├── config/
├── features/
├── hooks/
├── layouts/
├── mock/
├── navigation/
├── pages/
├── routes/
├── services/
├── shared/
├── theme/
├── types/
├── ui/
├── utils/
```

---

# 3. Folder Responsibilities

## assets/

Static assets

Examples

- Images
- Fonts
- SVGs
- Logos

---

## config/

Application configuration.

Examples

- Environment configuration
- Constants
- Feature flags

---

## features/

Contains all business modules.

Examples

```
features/

Student/
Teacher/
Attendance/
Fees/
Inventory/
```

Every feature owns its own:

- pages
- components
- hooks
- services
- models

---

## hooks/

Reusable React Hooks.

Examples

```
useDebounce
usePagination
useLocalStorage
```

---

## layouts/

Application Route Layouts.

Examples

```
AdminLayout
PublicLayout
AuthLayout
```

These compose pages and routes.

---

## mock/

Development mock data.

Examples

- Mock API Responses
- Fake Users
- Demo Data

---

## navigation/

Application navigation configuration.

Examples

```
Menu Configuration

Route Metadata

Permissions
```

Contains configuration only.

No UI Components.

---

## pages/

Application Pages.

A page represents a route.

Example

```
StudentListPage

StudentDetailsPage
```

Pages compose feature components.

---

## routes/

React Router configuration.

Examples

```
AppRoutes

Protected Routes

Route Guards
```

---

## services/

Communication layer.

Examples

```
REST APIs

Axios

Authentication

Token Management
```

---

## shared/

Shared business models and utilities.

Examples

```
Interfaces

Enums

DTOs

Business Types
```

---

## theme/

CampusFlow Design Tokens.

Examples

```
Colors

Typography

Spacing

Border Radius

Elevation

Breakpoints
```

---

## types/

Global TypeScript types.

---

## ui/

CampusFlow Design System.

Contains reusable UI components shared across the application.

---

## utils/

Pure utility functions.

Examples

```
Date Formatting

String Helpers

Number Helpers

Validation Helpers
```

---

# 4. UI Design System

Reusable UI components live here.

```
ui/
└── components/
```

Current categories

```
Actions/
Branding/
DataDisplay/
Feedback/
Form/
Layout/
Navigation/
Overlay/
```

Future categories may be added as needed.

---

# 5. Component Placement Rules

## UI Components

A component belongs inside

```
src/ui/components
```

when it

- is reusable
- has no business logic
- is part of the design system
- can be used by multiple features

Examples

```
Button
Avatar
SearchInput
AppLogo
Navigation
Header
Sidebar
AppLayout
Modal
Badge
```

---

## Feature Components

Feature-specific components belong inside

```
src/features/<feature>/components
```

Examples

```
StudentTable
StudentForm
TeacherCard
AttendanceChart
```

---

# 6. Component Folder Structure

Every reusable component should follow the same structure.

```
ComponentName/

ComponentName.tsx

ComponentName.module.css

ComponentName.types.ts

index.ts
```

Example

```
Button/

Button.tsx

Button.module.css

Button.types.ts

index.ts
```

---

# 7. Naming Conventions

Components

```
PascalCase
```

Example

```
StudentCard

SearchInput

AppLayout
```

Interfaces

```
PascalCase
```

Example

```
Student

HeaderUser

ButtonProps
```

Variables

```
camelCase
```

Constants

```
UPPER_SNAKE_CASE
```

CSS Classes

```
camelCase
```

---

# 8. Barrel Export Policy

Every reusable component must expose an

```
index.ts
```

Example

```
export * from "./Button";
```

Avoid deep imports.

Good

```
import { Button } from "@/ui/components";
```

Avoid

```
import Button from "../../../Button/Button";
```

---

# 9. TypeScript Guidelines

Always use interfaces for component props.

Avoid

```
any
```

Prefer strict typing.

Use enums where appropriate.

Keep shared models inside

```
shared/models
```

---

# 10. CSS Guidelines

Use CSS Modules.

```
Component.module.css
```

No global styling inside components.

Use design tokens whenever possible.

---

# 11. Reusability Rules

Before creating a new component ask:

1. Can this component be reused?
2. Does a similar component already exist?
3. Can this be composed from existing components?

Prefer composition over duplication.

---

# 12. Git Standards

Feature Branch

```
feature/<story-id>-<description>
```

Example

```
feature/ds-010-enterprise-header
```

Commit Message

```
feat(ds-010): implement enterprise header
```

---

# 13. Code Review Checklist

Before raising a Pull Request ensure:

- Project builds successfully
- ESLint passes
- No TypeScript errors
- Responsive UI
- Uses Design System
- Uses Barrel Exports
- No duplicated code
- Naming conventions followed
- Folder structure followed

---

# 14. Architecture Rule

When adding new code ask:

**Where does it belong?**

Decision Tree

Reusable UI?

↓

YES

↓

```
ui/components
```

NO

↓

Feature Specific?

↓

YES

↓

```
features/<feature>
```

Infrastructure?

↓

```
services
routes
navigation
config
shared
```

---

# 15. Golden Rule

> Every file should have a clear responsibility.

If you are unsure where a file belongs, discuss it before implementing it.

Consistency is more important than personal preference.
