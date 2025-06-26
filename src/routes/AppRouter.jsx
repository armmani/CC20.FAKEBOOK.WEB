import { useState, lazy, Suspense } from "react";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router";
// import Friends from "../pages/Friends";
// import Login from "../pages/Login";
// import Friend from "../pages/Friend";
// import Profile from "../pages/Profile";
// import Home from "../pages/Home"; // ใช้ lazy ไม่ต้อง import พวกนี้ lazy จะทำให้

// lazy ทำให้ดังนี้

const Login = lazy(() => import("../pages/Login"));
const Home = lazy(() => import("../pages/Home"));
const Friends = lazy(() => import("../pages/Friends"));
const Profile = lazy(() => import("../pages/Profile"));

const guestRouter = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/ads", element: <p>Ads</p> },
  { path: "*", element: <Navigate to="/" /> },
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
      { index: true, element: <Home /> },
      { path: "friends", element: <Friends /> },
      { path: "profile", element: <Profile /> },
      { path: "*", element: <Navigate to="/" /> },
    ],
  },
]);

function AppRouter() {
  let user = null; // ถ้ายังไม่ login จะเป็น null
  // const [user, setUser] = useState(false);
  const finalRouter = user ? userRouter : guestRouter; // ถ้ามี user ใช้ userRouter ถ้าไม่มี user เป็น guestRouter
  return (
    <Suspense fallback={<p>Loading</p>}>
      {/* <button className="btn btn-primary" onClick={() => setUser(!user)}>
        LOG IN
      </button> */}
      <RouterProvider router={finalRouter} />
    </Suspense>
  );
}
export default AppRouter;
