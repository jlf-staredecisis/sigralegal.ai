import { createBrowserRouter, RouterProvider } from 'react-router';
import { routes } from './routes';
import { AppShell } from './AppShell';

// Created here rather than in routes.ts: createBrowserRouter touches `document`
// at call time, and routes.ts has to stay importable by the Node prerenderer.
const router = createBrowserRouter(routes);

export default function App() {
  return (
    <AppShell>
      <RouterProvider router={router} />
    </AppShell>
  );
}
