import { Outlet } from "react-router";
import Header from "../components/Header";

function UserLayout() {
  return (
    <div>
      <Header />
      <div className="relative flex gap-2 pt-14 bg-gray-800">
        <Outlet />
      </div>
    </div>
  );
}
export default UserLayout;
