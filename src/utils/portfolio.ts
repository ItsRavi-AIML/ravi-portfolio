import { FEATURED_PROJECTS, TOOLKIT_GROUPS } from '../data/portfolioData';
import { ProjectItem } from '../types/portfolio';

/**
 * Validates whether an email string matches a valid email address format.
 */
export function isValidEmail(email: string): boolean {
  if (!email || typeof email !== 'string') return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}

/**
 * Finds a featured project by its unique id.
 */
export function getProjectById(id: string): ProjectItem | undefined {
  return FEATURED_PROJECTS.find((p) => p.id === id);
}

/**
 * Formats a list of technology names into a clean dot-separated string.
 */
export function formatTechList(technologies: string[], separator: string = ' · '): string {
  if (!technologies || !Array.isArray(technologies)) return '';
  return technologies.filter(Boolean).join(separator);
}

/**
 * Creates a pre-populated mailto URL for direct contact.
 */
export function generateMailtoUrl(
  email: string,
  subject: string = 'Portfolio Inquiry — Raja Ravi Varma',
  body?: string
): string {
  if (!email) return '';
  const trimmed = email.trim();
  const params: string[] = [];
  if (subject) {
    params.push(`subject=${encodeURIComponent(subject)}`);
  }
  if (body) {
    params.push(`body=${encodeURIComponent(body)}`);
  }
  const query = params.length > 0 ? `?${params.join('&')}` : '';
  return `mailto:${trimmed}${query}`;
}

/**
 * Counts total technologies listed across all toolkit groups without duplicates.
 */
export function getUniqueToolkitCount(): number {
  const allTools = TOOLKIT_GROUPS.flatMap((g) => g.items);
  return new Set(allTools).size;
}

/**
 * Sanitizes an anchor target name.
 */
export function sanitizeAnchor(hash: string): string {
  if (!hash || typeof hash !== 'string') return '';
  return hash.trim().replace(/^#/, '');
}
