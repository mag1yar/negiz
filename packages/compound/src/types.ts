import type { ComponentType } from 'react';

/**
 * Configuration options for compound component creation
 */
export interface CompoundOptions {
  /** Custom display name for debugging */
  displayName?: string;
}

/**
 * Extracts props type from a React component
 */
export type ComponentProps<T> = T extends ComponentType<infer P> ? P : never;

/**
 * Represents a compound component with typed children
 * @template TRoot - Root component type
 * @template TChildren - Children components map type
 */
export type CompoundComponent<
  TRoot extends ComponentType<any>,
  TChildren extends Record<string, ComponentType<any>>,
> = TRoot & TChildren;
