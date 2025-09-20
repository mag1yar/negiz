import { type ComponentProps, type ComponentType, createElement } from 'react';
import type { CompoundComponent, CompoundOptions } from './types';

/**
 * Creates a compound component by combining a root component with child components
 *
 * @template TRoot - Root component type
 * @template TChildren - Children components record type
 * @param rootComponent - Main component that serves as the base
 * @param childrenComponents - Object containing child components to attach
 * @param options - Configuration options
 * @returns Compound component with typed child components attached
 *
 * @example
 * ```tsx
 * const Card = createCompound(CardRoot, {
 *   Header: CardHeader,
 *   Body: CardBody,
 *   Footer: CardFooter
 * }, { displayName: 'Card' });
 *
 * // Usage
 * <Card>
 *   <Card.Header>Title</Card.Header>
 *   <Card.Body>Content</Card.Body>
 * </Card>
 * ```
 */
export function createCompound<
  TRoot extends ComponentType<any>,
  TChildren extends Record<string, ComponentType<any>>,
>(
  rootComponent: TRoot,
  childrenComponents: TChildren,
  options: CompoundOptions = {},
): CompoundComponent<TRoot, TChildren> {
  const { displayName } = options;

  const CompoundRoot = ((props: ComponentProps<TRoot>) =>
    createElement(rootComponent, props)) as CompoundComponent<TRoot, TChildren>;

  if (displayName) CompoundRoot.displayName = displayName;

  return Object.assign(CompoundRoot, childrenComponents);
}
