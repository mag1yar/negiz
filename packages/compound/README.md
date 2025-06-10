# @negiz/compound

<p align="center">
  <strong>A utility for creating compound components with full TypeScript type safety</strong><br />
  <em>Build flexible, composable React components with ease</em>
</p>

<p align="center">
  <a href="https://npmjs.org/package/@negiz/compound">
    <img src="https://img.shields.io/npm/v/@negiz/compound?style=flat&colorA=000000&colorB=000000" alt="Version">
  </a>
  <a href="https://github.com/mag1yar/negiz/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/mag1yar/negiz?style=flat&colorA=000000&colorB=000000" alt="License">
  </a>
  <a href="https://bundlephobia.com/package/@negiz/compound">
    <img src="https://img.shields.io/bundlephobia/minzip/@negiz/compound?style=flat&colorA=000000&colorB=000000" alt="Bundle Size">
  </a>
</p>

A lightweight, zero-dependency utility for creating compound components in React. Perfect for building design systems and reusable UI components with maximum flexibility and type safety.

## Features

- 🔒 **Full TypeScript Support** - Complete type inference and safety
- 🪶 **Zero Dependencies** - No external dependencies, just React
- 📦 **Tiny Bundle** - Minimal footprint, tree-shakeable
- 🎯 **Simple API** - One function to create compound components
- 🔍 **DevTools Friendly** - Proper display names for React DevTools
- ⚡ **Performance** - No runtime overhead, just composition

## Installation

```bash
# Using npm
npm install @negiz/compound

# Using yarn
yarn add @negiz/compound

# Using pnpm
pnpm add @negiz/compound
```

## Basic Usage

```tsx
import { createCompound } from '@negiz/compound';

// 1. Define your individual components
function CardRoot({ children, className = '' }) {
  return <div className={`card ${className}`}>{children}</div>;
}

function CardHeader({ children }) {
  return <header className="card-header">{children}</header>;
}

function CardBody({ children }) {
  return <div className="card-body">{children}</div>;
}

function CardFooter({ children }) {
  return <footer className="card-footer">{children}</footer>;
}

// 2. Create compound component
const Card = createCompound(
  CardRoot,
  {
    Header: CardHeader,
    Body: CardBody,
    Footer: CardFooter,
  },
  { displayName: 'Card' },
);

// 3. Use it with full flexibility
function App() {
  return (
    <Card className="my-card">
      <Card.Header>
        <h2>Card Title</h2>
      </Card.Header>
      <Card.Body>
        <p>This is the card content.</p>
      </Card.Body>
      <Card.Footer>
        <button>Action</button>
      </Card.Footer>
    </Card>
  );
}
```

<!-- ## Documentation

For complete documentation, examples, and integration guides:
[https://mag1yar.github.io/negiz/packages/compound](https://mag1yar.github.io/negiz/packages/compound) -->

## License

MIT
