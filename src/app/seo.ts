/**
 * Per-route <head> metadata, consumed by the build-time prerenderer.
 *
 * COPY FREEZE: every title and description below is assembled from wording
 * that already appears on that page (its section label, heading, and opening
 * sentence). No new marketing copy is introduced here.
 */

export const SITE_ORIGIN = 'https://www.sigralegal.ai';

export interface PageMeta {
  title: string;
  description: string;
}

export const SEO: Record<string, PageMeta> = {
  '/': {
    // Existing <title> and <meta description> from index.html, unchanged.
    title: 'SIGRA - Attested Intelligence',
    description:
      'Verification infrastructure for legal AI. Introducing the era of provable AI.'
  },
  '/why-sigra': {
    title: 'Why Sigra — The verification gap | SIGRA',
    description:
      'Modern analytical work produces conclusions faster than it preserves reasoning. As records grow larger and more technical, courts increasingly expect not just answers, but the ability to independently verify how those answers were reached.'
  },
  '/technology': {
    title: 'Technology — Verification infrastructure | SIGRA',
    description:
      'Sigra is not a single model or tool. It is an analytical verification system designed to preserve inputs, methods, decisions, and outputs as a unified, reviewable record.'
  },
  '/team': {
    title: 'Team — Scientific oversight | SIGRA',
    description:
      'Sigra is built at the intersection of law, technology, and evidentiary standards. The team includes legal practitioners, technical architects, and advisors experienced in discovery, expert testimony, and complex analytical systems.'
  },
  '/sigra-legal': {
    title: 'Sigra Legal — Litigation and discovery | SIGRA',
    description:
      'Sigra Legal applies the verification framework directly to litigation workflows. It supports discovery analysis, expert preparation, and evidentiary review by ensuring that analytical work remains accessible, reproducible, and explainable when challenged.'
  }
};
