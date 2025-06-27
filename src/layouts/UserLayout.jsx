import { Outlet } from "react-router";
import useUserStore from "../stores/userStore";

function UserLayout() {
  const logout = useUserStore((state) => state.logout);
  return (
    <div>
      <div className="text-4xl py-4 border">
        Header
        <button className="btn btn-primary" onClick={logout}>
          LOG OUT
        </button>
      </div>
      <Outlet />
    </div>
  );
}
export default UserLayout;
