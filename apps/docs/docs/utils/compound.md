# Compound Components

A utility for creating compound components with full TypeScript type safety.

## Installation

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="package-manager">
  <TabItem value="npm" label="npm" default>

```bash
npm install @negiz/compound
```

  </TabItem>
  <TabItem value="yarn" label="yarn">

```bash
yarn add @negiz/compound
```

  </TabItem>
  <TabItem value="pnpm" label="pnpm">

```bash
pnpm add @negiz/compound
```

  </TabItem>
</Tabs>

## What are Compound Components?

Compound components are a React pattern where multiple components work together as a single cohesive unit. Think of HTML elements like `<select>` and `<option>`, or `Card` with `Card.Header`, `Card.Body`, and `Card.Footer`.

## Quick Example

<Tabs groupId="language">
  <TabItem value="ts" label="TypeScript" default>

```tsx
import { createCompound } from '@negiz/compound';

// 1. Define individual components
interface CardProps {
  children: React.ReactNode;
  className?: string;
}

function CardRoot({ children, className = '' }: CardProps) {
  return <div className={`card ${className}`}>{children}</div>;
}

interface CardSectionProps {
  children: React.ReactNode;
}

function CardHeader({ children }: CardSectionProps) {
  return <header className="card-header">{children}</header>;
}

function CardBody({ children }: CardSectionProps) {
  return <div className="card-body">{children}</div>;
}

function CardFooter({ children }: CardSectionProps) {
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

// 3. Use it
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

  </TabItem>
  <TabItem value="js" label="JavaScript">

```jsx
import { createCompound } from '@negiz/compound';

// 1. Define individual components
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

// 3. Use it
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

  </TabItem>
</Tabs>

## API Reference

### `createCompound(rootComponent, childComponents, options?)`

**Parameters:**

- `rootComponent` - The main component that serves as the base
- `childComponents` - Object containing child components to attach
- `options.displayName` - Name for React DevTools (optional)

**Returns:** Compound component with attached child components and full TypeScript support.

## Benefits

- **🔒 Type Safety** - Complete TypeScript support with proper prop inference
- **🪶 Zero Dependencies** - No external dependencies, just React
- **📦 Tiny Bundle** - Minimal footprint, tree-shakeable
- **🎯 Simple API** - One function to create compound components
- **🔍 DevTools** - Proper display names for React DevTools
