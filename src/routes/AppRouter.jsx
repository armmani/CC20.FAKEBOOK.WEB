import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router";

const guestRouter = createBrowserRouter([
  { path: "/", element: <p>LogIN</p> },
  { path: "/ads", element: <p>Ads</p> },
  { path: "*", element: <p>NoWhere404</p> },
]);

const userRouter = createBrowserRouter([
  { path: "/", element: <p>userHome</p> },
  { path: "/friends", element: <p>friendPage</p> },
  { path: "/profile", element: <p>profilePage</p> },
  { path: "*", element: <p>404PageNotFoundUser</p> },
]);

function AppRouter() {
  return (
  // <RouterProvider router={guestRouter} />
  <RouterProvider router={userRouter} />
)
}
export default AppRouter;
