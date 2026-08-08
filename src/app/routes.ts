import { HomePage } from './pages/HomePage';
import { WhySigra } from './pages/WhySigra';
import { Technology } from './pages/Technology';
import { Team } from './pages/Team';
import { SigraLegal } from './pages/SigraLegal';

/**
 * Single source of truth for the route table — pure data, no browser APIs, so
 * the build-time prerenderer can import it under Node. The client builds its
 * browser router from this list in App.tsx.
 */
export const routes = [
  { path: '/', Component: HomePage },
  { path: '/why-sigra', Component: WhySigra },
  { path: '/technology', Component: Technology },
  { path: '/team', Component: Team },
  { path: '/sigra-legal', Component: SigraLegal }
];
