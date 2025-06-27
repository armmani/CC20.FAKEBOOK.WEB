import { Outlet } from "react-router";
import Header from "../components/Header";

function UserLayout() {
  return (
    <div>
      <Header />
      <div className="relative flex gap-2 bg-gray-500 pt-14">
        <Outlet />
      </div>
    </div>
  );
}
export default UserLayout;
