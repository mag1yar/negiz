import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { createCompound } from '../src/create';
import type { CompoundComponent } from '../src/types';

// Test components
interface TestRootProps {
  children?: React.ReactNode;
  className?: string;
  'data-testid'?: string;
}

interface TestChildProps {
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary';
  'data-testid'?: string;
}

const TestRoot = ({
  children,
  className = '',
  'data-testid': testId,
}: TestRootProps) => (
  <div className={`root ${className}`} data-testid={testId}>
    {children}
  </div>
);

const TestHeader = ({
  children,
  variant = 'primary',
  'data-testid': testId,
}: TestChildProps) => (
  <header className={`header header--${variant}`} data-testid={testId}>
    {children}
  </header>
);

const TestBody = ({ children, 'data-testid': testId }: TestChildProps) => (
  <main className="body" data-testid={testId}>
    {children}
  </main>
);

const TestFooter = ({ children, 'data-testid': testId }: TestChildProps) => (
  <footer className="footer" data-testid={testId}>
    {children}
  </footer>
);

describe('createCompound', () => {
  describe('basic functionality', () => {
    it('should create a compound component with attached child components', () => {
      const CompoundTest = createCompound(TestRoot, {
        Header: TestHeader,
        Body: TestBody,
        Footer: TestFooter,
      });

      // Check that child components are attached
      expect(CompoundTest.Header).toBe(TestHeader);
      expect(CompoundTest.Body).toBe(TestBody);
      expect(CompoundTest.Footer).toBe(TestFooter);
    });

    it('should render the root component correctly', () => {
      const CompoundTest = createCompound(TestRoot, {
        Header: TestHeader,
        Body: TestBody,
      });

      render(
        <CompoundTest data-testid="compound-root">Test content</CompoundTest>,
      );

      const rootElement = screen.getByTestId('compound-root');
      expect(rootElement).toBeInTheDocument();
      expect(rootElement).toHaveClass('root');
      expect(rootElement).toHaveTextContent('Test content');
    });

    it('should render compound component with child components', () => {
      const CompoundTest = createCompound(TestRoot, {
        Header: TestHeader,
        Body: TestBody,
        Footer: TestFooter,
      });

      render(
        <CompoundTest data-testid="compound-root">
          <CompoundTest.Header data-testid="compound-header">
            Header Content
          </CompoundTest.Header>
          <CompoundTest.Body data-testid="compound-body">
            Body Content
          </CompoundTest.Body>
          <CompoundTest.Footer data-testid="compound-footer">
            Footer Content
          </CompoundTest.Footer>
        </CompoundTest>,
      );

      expect(screen.getByTestId('compound-root')).toBeInTheDocument();
      expect(screen.getByTestId('compound-header')).toHaveTextContent(
        'Header Content',
      );
      expect(screen.getByTestId('compound-body')).toHaveTextContent(
        'Body Content',
      );
      expect(screen.getByTestId('compound-footer')).toHaveTextContent(
        'Footer Content',
      );
    });
  });

  describe('options handling', () => {
    it('should work with empty options object', () => {
      const CompoundTest = createCompound(
        TestRoot,
        {
          Header: TestHeader,
        },
        {},
      );

      expect(CompoundTest.Header).toBe(TestHeader);
    });
  });

  describe('props forwarding', () => {
    it('should forward props to root component', () => {
      const CompoundTest = createCompound(TestRoot, {
        Header: TestHeader,
      });

      render(
        <CompoundTest className="custom-class" data-testid="root-element">
          Content
        </CompoundTest>,
      );

      const element = screen.getByTestId('root-element');
      expect(element).toHaveClass('root');
      expect(element).toHaveClass('custom-class');
    });

    it('should forward props to child components', () => {
      const CompoundTest = createCompound(TestRoot, {
        Header: TestHeader,
      });

      render(
        <CompoundTest>
          <CompoundTest.Header variant="secondary" data-testid="header-element">
            Header
          </CompoundTest.Header>
        </CompoundTest>,
      );

      const headerElement = screen.getByTestId('header-element');
      expect(headerElement).toHaveClass('header--secondary');
    });
  });

  describe('edge cases', () => {
    it('should work with empty children object', () => {
      const CompoundTest = createCompound(TestRoot, {});

      render(<CompoundTest data-testid="empty-compound">Content</CompoundTest>);

      expect(screen.getByTestId('empty-compound')).toBeInTheDocument();
    });

    it('should work with single child component', () => {
      const CompoundTest = createCompound(TestRoot, {
        Header: TestHeader,
      });

      expect(CompoundTest.Header).toBe(TestHeader);
      expect((CompoundTest as any).Body).toBeUndefined();
    });

    it('should handle multiple instances independently', () => {
      const Compound1 = createCompound(
        TestRoot,
        {
          Header: TestHeader,
        },
        { displayName: 'Compound1' },
      );

      const Compound2 = createCompound(
        TestRoot,
        {
          Body: TestBody,
        },
        { displayName: 'Compound2' },
      );

      expect(Compound1.Header).toBe(TestHeader);
      expect((Compound1 as any).Body).toBeUndefined();
      expect(Compound2.Body).toBe(TestBody);
      expect((Compound2 as any).Header).toBeUndefined();
    });
  });

  describe('TypeScript types', () => {
    it('should maintain correct TypeScript types', () => {
      const CompoundTest = createCompound(TestRoot, {
        Header: TestHeader,
        Body: TestBody,
        Footer: TestFooter,
      });

      // Type checking - these should compile without errors
      type CompoundType = typeof CompoundTest;
      type ExpectedType = CompoundComponent<
        typeof TestRoot,
        {
          Header: typeof TestHeader;
          Body: typeof TestBody;
          Footer: typeof TestFooter;
        }
      >;

      // This is a compile-time check
      const _typeCheck: CompoundType = {} as ExpectedType;
      const _reverseTypeCheck: ExpectedType = {} as CompoundType;

      expect(true).toBe(true); // Just to have an assertion
    });
  });

  describe('real-world usage patterns', () => {
    it('should work with Card pattern from the story', () => {
      interface CardRootProps {
        children?: React.ReactNode;
        'data-testid'?: string;
      }

      interface CardChildProps {
        children?: React.ReactNode;
        'data-testid'?: string;
      }

      const CardRoot = ({ children, 'data-testid': testId }: CardRootProps) => (
        <div
          style={{
            width: '300px',
            backgroundColor: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '8px',
            overflow: 'hidden',
          }}
          data-testid={testId}
        >
          {children}
        </div>
      );

      const CardHeader = ({
        children,
        'data-testid': testId,
      }: CardChildProps) => (
        <div
          style={{
            padding: '16px',
            backgroundColor: '#f8fafc',
            borderBottom: '1px solid #e2e8f0',
            fontWeight: '600',
          }}
          data-testid={testId}
        >
          {children}
        </div>
      );

      const CardBody = ({
        children,
        'data-testid': testId,
      }: CardChildProps) => (
        <div style={{ padding: '16px' }} data-testid={testId}>
          {children}
        </div>
      );

      const Card = createCompound(
        CardRoot,
        {
          Header: CardHeader,
          Body: CardBody,
        },
        { displayName: 'Card' },
      );

      render(
        <Card data-testid="card">
          <Card.Header data-testid="card-header">Card Title</Card.Header>
          <Card.Body data-testid="card-body">
            This is a simple card body content demonstrating the compound
            component pattern.
          </Card.Body>
        </Card>,
      );

      expect(screen.getByTestId('card')).toBeInTheDocument();
      expect(screen.getByTestId('card-header')).toHaveTextContent('Card Title');
      expect(screen.getByTestId('card-body')).toHaveTextContent(
        'This is a simple card body content demonstrating the compound component pattern.',
      );
    });

    it('should support conditional rendering of child components', () => {
      const CompoundTest = createCompound(TestRoot, {
        Header: TestHeader,
        Body: TestBody,
        Footer: TestFooter,
      });

      const showFooter = false;

      render(
        <CompoundTest data-testid="conditional-compound">
          <CompoundTest.Header data-testid="header">Header</CompoundTest.Header>
          <CompoundTest.Body data-testid="body">Body</CompoundTest.Body>
          {showFooter && (
            <CompoundTest.Footer data-testid="footer">
              Footer
            </CompoundTest.Footer>
          )}
        </CompoundTest>,
      );

      expect(screen.getByTestId('header')).toBeInTheDocument();
      expect(screen.getByTestId('body')).toBeInTheDocument();
      expect(screen.queryByTestId('footer')).not.toBeInTheDocument();
    });
  });
});
