# 🧩 Modern Sudoku

A high-performance, architecturally sound Sudoku engine built with **React 19**, **TypeScript**, and **Tailwind CSS v4**.

## 🏗️ Project Architecture

This project follows a **Clean Architecture** pattern to ensure a strict separation of concerns between the mathematical engine and the user interface.

![Project Architecture](https://mermaid.ink/img/Z3JhcGggVEQKICAgIHN1YmdyYXBoICJQcmVzZW50YXRpb24gTGF5ZXIgKFVJKSIKICAgICAgICBBW0FwcC50c3hdIC0tIFRhaWx3aW5kIENTUyB2NCAtLT4gQltDb21wb25lbnRzXQogICAgZW5kCgogICAgc3ViZ3JhcGggIlN0YXRlIE1hbmFnZW1lbnQgKFN0b3JlKSIKICAgICAgICBCIC0tIHVzZUFjdGlvblN0YXRlIC0tPiBDW3JlZHVjZXJCb2FyZEFjdGlvbl0KICAgICAgICBCIC0tIHVzZVJlZHVjZXIgLS0+IERbcmVkdWNlckdhbWVBY3Rpb25dCiAgICBlbmQKCiAgICBzdWJncmFwaCAiRG9tYWluIExheWVyIChTZXJ2aWNlICYgTG9naWMpIgogICAgICAgIEMgLS0+IEVbR2FtZSBTZXJ2aWNlXQogICAgICAgIEQgLS0+IEUKICAgICAgICBFIC0tPiBGW1N1ZG9rdSBMb2dpYyBFbmdpbmVdCiAgICBlbmQKCiAgICBzdWJncmFwaCAiRGF0YSBNb2RlbCIKICAgICAgICBHW1R5cGVzICYgSW50ZXJmYWNlc10KICAgIGVuZAoKICAgIEMgLS4tPiBHCiAgICBEIC0uLT4gRwogICAgRiAtLi0+IEc=)

### Folder Breakdown
- **`src/ui`**: React components and layout. Purely responsible for rendering and capturing user intent.
- **`src/store`**: Reducers managing game state transitions via `useActionState` and `useReducer`.
- **`src/service`**: Orchestrates high-level game rules and board initialization.
- **`src/logic`**: Mathematical core for board generation and validation algorithms.
- **`src/model`**: Domain entities and TypeScript interfaces.

---

## 🔄 State Management Flow

The game leverages **React 19's `useActionState`** for asynchronous board updates and **`useReducer`** for tracking game completion status.

![State Flow](https://mermaid.ink/img/c2VxdWVuY2VEaWFncmFtCiAgICBwYXJ0aWNpcGFudCBVIGFzIFVzZXIgKFVJKQogICAgcGFydGljaXBhbnQgQiBhcyBCb2FyZCBSZWR1Y2VyCiAgICBwYXJ0aWNpcGFudCBHIGFzIEdhbWUgUmVkdWNlcgogICAgcGFydGljaXBhbnQgUyBhcyBTdWRva3UgRW5naW5lCgogICAgVS0+PkI6IERpc3BhdGNoIFZBTElEQVRFX0FUVEVNUFQKICAgIEItPj5TOiBWYWxpZGF0ZSBOdW1iZXIKICAgIFMtLT4+QjogUmV0dXJuIE5ldyBCb2FyZCBTdGF0ZQogICAgQi0tPj5VOiBSZS1yZW5kZXIgR3JpZAoKICAgIFUtPj5HOiBEaXNwYXRjaCBWQUxJREFURQogICAgRy0tPj5VOiBTZXQgaXNHYW1lQ29tcGxldGVkIChUL0YpCiAgICBOb3RlIG92ZXIgVTogSWYgVHJ1ZSAtPiBTaG93IFdJTiBVSQ==)

---

## 🧪 Testing Strategy

The project maintains a high standard of reliability through a multi-layered testing approach:

- **Logic Tests (`src/__tests__/logic.test.ts`)**: Unit tests for the Sudoku generation engine using Jest.
- **UI Tests (`src/__tests__/ui.test.tsx`)**: Integration tests using **React Testing Library** and **Jest**.
    - **State Mocking**: Reducers are mocked to verify UI transitions (e.g., verifying the "WIN" state).
    - **User Simulation**: Testing cell selection and digit input behavior.

---

## 🚀 Tech Stack

- **Framework:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Testing:** [Jest](https://jestjs.io/) & [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

---

## 🛠️ Getting Started

### Prerequisites
- Node.js (Latest LTS recommended)

### Installation
```bash
# Clone the repository
git clone <your-repo-url>

# Install dependencies
npm install

# Start development server
npm run dev
```

### Running Tests
```bash
# Run all logic and component tests
npm test
```

---
*Built with ❤️ and clean code principles.*
