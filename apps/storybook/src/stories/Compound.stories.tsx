import type { Meta, StoryObj } from '@storybook/react';
import { createCompound } from '@negiz/compound';
import { ComponentProps } from 'react';

type CardRootProps = ComponentProps<'div'>;
type CardHeaderProps = ComponentProps<'div'>;
type CardBodyProps = ComponentProps<'div'>;

const CardRoot = ({ children }: CardRootProps) => (
  <div
    style={{
      width: '300px',
      backgroundColor: '#ffffff',
      border: '1px solid #e2e8f0',
      borderRadius: '8px',
      overflow: 'hidden',
    }}
  >
    {children}
  </div>
);

const CardHeader = ({ children }: CardHeaderProps) => (
  <div
    style={{
      padding: '16px',
      backgroundColor: '#f8fafc',
      borderBottom: '1px solid #e2e8f0',
      fontWeight: '600',
    }}
  >
    {children}
  </div>
);

const CardBody = ({ children }: CardBodyProps) => (
  <div style={{ padding: '16px' }}>{children}</div>
);

const Card = createCompound(
  CardRoot,
  {
    Header: CardHeader,
    Body: CardBody,
  },
  { displayName: 'Card' },
);

const meta: Meta = {
  title: 'Utils/Compound',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Library for creating compound components with automatic TypeScript typing.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
  render: () => (
    <Card>
      <Card.Header>Card Title</Card.Header>
      <Card.Body>
        This is a simple card body content demonstrating the compound component
        pattern.
      </Card.Body>
    </Card>
  ),
};
