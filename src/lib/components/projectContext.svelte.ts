import type { Project } from './types';

/**
 * Global state for project-related functionality.
 * Do not mutate this directly; use the patterns shown in components.
 */
export const projectState = $state({
  /**
   * Currently selected project to display in the modal
   */
  selectedProject: null as Project | null
});

