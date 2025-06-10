import { createElement } from 'react';
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
 * ```
 */
export function createCompound<
  TRoot extends React.ComponentType<any>,
  TChildren extends Record<string, React.ComponentType<any>>,
>(
  rootComponent: TRoot,
  childrenComponents: TChildren,
  options: CompoundOptions = {},
): CompoundComponent<TRoot, TChildren> {
  const { displayName } = options;

  const CompoundRoot = ((props: React.ComponentProps<TRoot>) =>
    createElement(rootComponent, props)) as CompoundComponent<TRoot, TChildren>;

  if (displayName) CompoundRoot.displayName = displayName;

  Object.keys(childrenComponents).forEach((key) => {
    (CompoundRoot as any)[key] = childrenComponents[key];
  });

  return CompoundRoot;
}
