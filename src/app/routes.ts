import { createBrowserRouter } from 'react-router';
import { HomePage } from './pages/HomePage';
import { WhySigra } from './pages/WhySigra';
import { Technology } from './pages/Technology';
import { Team } from './pages/Team';
import { SigraLegal } from './pages/SigraLegal';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: HomePage
  },
  {
    path: '/why-sigra',
    Component: WhySigra
  },
  {
    path: '/technology',
    Component: Technology
  },
  {
    path: '/team',
    Component: Team
  },
  {
    path: '/sigra-legal',
    Component: SigraLegal
  }
]);
