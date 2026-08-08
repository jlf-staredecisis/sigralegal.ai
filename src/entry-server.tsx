import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { Routes, Route } from 'react-router';
import { AppShell } from './app/AppShell';
import { routes } from './app/routes';

/**
 * Renders one route to static HTML at build time.
 *
 * Uses StaticRouter rather than the client's browser router, but walks the
 * same `routes` table and the same AppShell, so the emitted markup matches
 * what the client produces on hydration.
 */
export function render(url: string): string {
  return renderToString(
    <StaticRouter location={url}>
      <AppShell>
        <Routes>
          {routes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Routes>
      </AppShell>
    </StaticRouter>
  );
}

export { routes };
export { SEO, SITE_ORIGIN } from './app/seo';
