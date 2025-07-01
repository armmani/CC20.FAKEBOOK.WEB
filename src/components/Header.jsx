import { Link } from "react-router";
import {
  FakebookLogo,
  FriendIcon,
  HomeIcon,
  MarketIcon,
  MenuIcon,
  MessengerIcon,
  NotiIcon,
  SearchIcon,
  VideoIcon2,
} from "../icons";
import useUserStore from "../stores/userStore";
import Avatar from "./Avatar";

function Header() {
  const user = useUserStore((state) => state.user)
  const logout = useUserStore((state) => state.logout);
  return (
    <div className="flex justify-between px-3 h-14 w-full shadow-lg bg-gray-900 fixed top-0 z-10">
      <div className="flex-1 flex gap-2 items-center pe-2">
        <FakebookLogo className="w-12" />
        <label className="input rounded-full">
          <input placeholder="Search" />
          <SearchIcon className="w-5 opacity-60" />
        </label>
      </div>
      <div className="flex-1 flex gap-2 justify-center items-center">
        <Link
          to="/"
          className="flex justify-center w-20 hover:outline-2 hover:outline-primary h-full py-2"
        >
          <HomeIcon />
        </Link>
        <Link
          to="/"
          className="flex justify-center w-20 hover:outline-2 hover:outline-primary h-full py-2"
        >
          <VideoIcon2 />
        </Link>
        <Link
          to="/"
          className="flex justify-center w-20 hover:outline-2 hover:outline-primary h-full py-2"
        >
          <MarketIcon />
        </Link>
        <Link
          to="/"
          className="flex justify-center w-20 hover:outline-2 hover:outline-primary h-full py-2"
        >
          <FriendIcon />
        </Link>
      </div>
      <div className="flex-1 flex gap-3 justify-end items-center">
        <div className="flex-1 flex gap-3 justify-end">
          <div className="avatar justify-center items-center">
            <div className="w-10 h-10 rounded-full !flex justify-center items-center  hover:bg-gray-400">
              <MenuIcon className="w-5" />
            </div>
          </div>
          <div className="avatar justify-center items-center">
            <div className="w-10 h-10 rounded-full !flex justify-center items-center  hover:bg-gray-400">
              <MessengerIcon className="w-5" />
            </div>
          </div>
          <div className="avatar justify-center items-center">
            <div className="w-10 h-10 rounded-full !flex justify-center items-center  hover:bg-gray-400">
              <NotiIcon className="w-5" />
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn m-1 btn-circle">
            <Avatar
              menu
              className="w-10"
              imgSrc={user.profileImage}
            />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <Link to="/profile">PROFILE</Link>
            </li>
            <li>
              <a onClick={logout}>LOG OUT</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Header;
