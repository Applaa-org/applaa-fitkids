import * as React from 'react'
import { 
  createRouter, 
  RouterProvider, 
  createRootRoute, 
  createRoute as createTanStackRoute, 
  Outlet 
} from '@tanstack/react-router'
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from './components/Header';
import Index from './pages/Index';
import Movements from './pages/Movements';
import MovementDetail from './pages/MovementDetail';
import Rewards from './pages/Rewards';
import About from './pages/About';

const queryClient = new QueryClient();

// Create root route
const rootRoute = createRootRoute({
  component: () => (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Outlet />
          </main>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  ),
})

// Create index route
const indexRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Index,
})

// Create movements route
const movementsRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/movements',
  component: Movements,
})

// Create movement detail route
const movementDetailRoute = createTanStackRoute({
  getParentRoute: () => movementsRoute,
  path: '$id',
  component: MovementDetail,
})

// Create rewards route
const rewardsRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/rewards',
  component: Rewards,
})

// Create about route
const aboutRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: About,
})

// Create route tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  movementsRoute,
  movementDetailRoute,
  rewardsRoute,
  aboutRoute,
])

// Create router with proper TypeScript configuration
const router = createRouter({ 
  routeTree,
  defaultPreload: 'intent' as const,
  defaultPreloadStaleTime: 0,
})

// Register router for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const App = () => <RouterProvider router={router} />

export default App