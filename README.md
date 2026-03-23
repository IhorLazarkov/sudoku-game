# 🧩 Modern Sudoku

A high-performance, architecturally sound Sudoku engine built with **React 19**, **TypeScript**, and **Tailwind CSS v4**.

## 🏗️ Project Architecture

This project follows a **Clean Architecture** pattern to ensure a strict separation of concerns between the mathematical engine and the user interface.

![Project Architecture](https://mermaid.ink/img/Z3JhcGggVEQKICAgIHN1YmdyYXBoICJQcmVzZW50YXRpb24gTGF5ZXIgKFVJKSIKICAgICAgICBBW0FwcC50c3hdIC0tPiBCW0NvbXBvbmVudHNdCiAgICBlbmQKCiAgICBzdWJncmFwaCAiU3RhdGUgTWFuYWdlbWVudCAoUmVwb3NpdG9yeSkiCiAgICAgICAgQiAtLT4gQ1tSZWR1Y2VyIC8gdXNlQWN0aW9uU3RhdGVdCiAgICBlbmQKCiAgICBzdWJncmFwaCAiRG9tYWluIExheWVyIChTZXJ2aWNlICYgTG9naWMpIgogICAgICAgIEMgLS0+IERbR2FtZSBTZXJ2aWNlXQogICAgICAgIEQgLS0+IEVbU3Vkb2t1IExvZ2ljIEVuZ2luZV0KICAgIGVuZAoKICAgIHN1YmdyYXBoICJEYXRhIE1vZGVsIgogICAgICAgIEZbVHlwZXMgJiBJbnRlcmZhY2VzXQogICAgZW5kCgogICAgQyAtLi0+IEYKICAgIEUgLS4tPiBG)

### Folder Breakdown
- **`src/ui`**: React components and layout. Purely responsible for rendering and capturing user intent.
- **`src/repository`**: Manages complex game state transitions using Reducers and React 19's `useActionState`.
- **`src/service`**: Orchestrates high-level game rules (e.g., starting a timer, checking win conditions).
- **`src/logic`**: The "brain" of the game. Pure mathematical functions for board generation and validation.
- **`src/model`**: Centralized TypeScript interfaces and domain entities.

---

## 🔢 Sudoku Generation Engine

The game uses a deterministic shift-based algorithm to ensure that every generated board is mathematically valid (respecting rows, columns, and 3x3 subgrids).

![Generation Engine Flow](https://mermaid.ink/img/c2VxdWVuY2VEaWFncmFtCiAgICBwYXJ0aWNpcGFudCBVIGFzIFVJIExheWVyCiAgICBwYXJ0aWNpcGFudCBTIGFzIFNlcnZpY2UKICAgIHBhcnRpY2lwYW50IEwgYXMgTG9naWMgRW5naW5lCgogICAgVS0+PlM6IHN0YXJ0TmV3R2FtZSgpCiAgICBTLT4+TDogZ2VuZXJhdGVWYWxpZEJvYXJkKCkKICAgIE5vdGUgb3ZlciBMOiAxLiBDcmVhdGUgU2h1ZmZsZWQgQmFzZSBTZXQgWzEtOV0KICAgIE5vdGUgb3ZlciBMOiAyLiBBcHBseSBTaGlmdCBQYXR0ZXJuIFswLDMsNiwgMSw0LDcsIDIsNSw4XQogICAgTC0tPj5TOiBSZXR1cm4gOXg5IE1hdHJpeAogICAgUy0tPj5VOiBVcGRhdGUgR2FtZSBTdGF0ZQ==)

---

## 🚀 Tech Stack

- **Framework:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (Using `@tailwindcss/vite`)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Testing:** [Jest](https://jestjs.io/) & [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

---

## 🛠️ Getting Started

### Prerequisites
- Node.js (Latest LTS recommended)
- npm or yarn

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

## 🗺️ Roadmap
- [x] Valid Sudoku board generation.
- [x] Tailwind CSS v4 integration.
- [x] State management via Reducers.
- [ ] Difficulty levels (Removing numbers).
- [ ] Keyboard navigation support.
- [ ] LocalStorage for game persistence.

---
*Built with ❤️ and clean code principles.*
