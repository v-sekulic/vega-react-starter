import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const Route = createRootRoute({
  component: () => (
    <div className="min-h-screen h-full flex flex-col bg-[#0B1120]">
      <div className="p-2 pt-10  flex  text-white border-b-0  w-full gap-10 justify-center z-10">
        <Link
          to="/"
          className="[&.active]:font-bold [&.active]:bg-[#FBAB7E] [&.active]:bg-gradient-to-r [&.active]:from-[#FBAB7E] [&.active]:to-[#F7CE68]
    [&.active]:bg-clip-text 
    [&.active]:text-transparent "
        >
          Home
        </Link>{' '}
        <Link
          to="/about"
          className="[&.active]:font-bold [&.active]:bg-[#FBAB7E] [&.active]:bg-gradient-to-r [&.active]:from-[#FBAB7E] [&.active]:to-[#F7CE68]
    [&.active]:bg-clip-text 
    [&.active]:text-transparent "
        >
          About
        </Link>
      </div>

      <Outlet />
      <TanStackRouterDevtools />
    </div>
  ),
});
