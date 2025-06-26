import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router";

const guestRouter = createBrowserRouter([
  { path: "/", element: <p>LogIN</p> },
  { path: "/ads", element: <p>Ads</p> },
  { path: "*", element: <Navigate to="/" replace /> },
]);

const userRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <div className="text-4xl py-4 border">Header</div>
        <Outlet />
      </div>
    ),
    children: [
      { path: "", element: <p>userHomePage</p> },
      { path: "friends", element: <p>friendPage</p> },
      { path: "profile", element: <p>profilePage</p> },
      { path: "*", element: <Navigate to="/" /> },
    ],
  },
]);

function AppRouter() {
  return (
    // <RouterProvider router={guestRouter} />
    <RouterProvider router={userRouter} />
  );
}
export default AppRouter;
