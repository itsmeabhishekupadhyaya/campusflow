# CampusFlow Engineering Handbook

Version 1.0

CampusFlow is an enterprise-grade School ERP platform.

TABLE OF CONTENTS
1. Introduction
2. Product Vision
3. Engineering Principles
4. Technology Stack
5. Solution Architecture
6. Frontend Architecture
7. Backend Architecture
8. UI Foundation
9. Theme System
10. Feature-Based Architecture
11. API Standards
12. Hook Standards
13. Component Standards
14. Folder Structure
15. Git Workflow
16. Development Workflow
17. Coding Standards
18. Story Lifecycle
19. Architecture Decision Records
20. Roadmap

INTRODUCTION
CampusFlow follows Clean Architecture, API First, Feature-Based Architecture, reusable UI Foundation and enterprise engineering standards.

PRODUCT VISION
Modules include Student, Teacher, Attendance, Fees, Inventory, Timetable, Examination and Reports.

ENGINEERING PRINCIPLES
- Features drive reusable components.
- Hooks own feature state.
- UI components stay generic.
- API contracts drive UI.
- Do not over-engineer.
- Prefer composition over duplication.

TECH STACK
Frontend: React, TypeScript, Vite, CSS Modules.
Backend: ASP.NET Core, Entity Framework Core, PostgreSQL.

FRONTEND ARCHITECTURE
src/
  features/
  ui/
  shared/
  theme/

Each feature contains api, components, hooks, pages and types.

BACKEND ARCHITECTURE
Controller -> Service -> Repository -> DbContext -> PostgreSQL

UI FOUNDATION
Actions: Button, ButtonGroup
Display: Table, Badge, Icon, EmptyState, ErrorState, LoadingState
Forms: SearchInput, TextBox(future), Select(future), TextArea(future)
Layout: PageContainer, PageHeader, PageToolbar

THEME
All colors, spacing, typography, shadows and icon sizes come from theme tokens.

HOOK STANDARDS
Hooks own:
- query
- loading
- error
- API communication

Expose intent methods such as updateSearch(), updatePage(), updateSorting().

COMPONENT STANDARDS
Components should:
- Be reusable
- Avoid business logic
- Use theme tokens
- Keep APIs simple

GIT WORKFLOW
main
develop
feature/<story-id>

Commit prefixes:
feat, fix, refactor, docs, test

DEVELOPMENT WORKFLOW
Requirement -> Architecture -> Implementation -> Code Review -> Refactor -> Merge

CODING STANDARDS
- Strong TypeScript
- CSS Modules
- Feature-based folders
- Intent-based APIs
- No hardcoded design values

STORY LIFECYCLE
Every story documents:
Objective
Acceptance Criteria
Files Changed
Design Decisions
Lessons Learned

ADR
ADR-001 Feature-Based Architecture
ADR-002 UI Foundation
ADR-003 Theme Tokens
ADR-004 Intent-Based Hooks

ROADMAP
Completed:
- Student List
- Search
- UI Foundation

Upcoming:
- Pagination
- Sorting
- CRUD
- Forms Foundation
- Authentication
- Dashboard
- Teacher Module

ENGINEERING PHILOSOPHY
Build CampusFlow as software that will be maintained for the next 10 years.
