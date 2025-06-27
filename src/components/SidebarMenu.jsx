import { Link } from "react-router";
import {
  FriendIcon,
  GroupIcon,
  MemoryIcon,
  MoreIcon,
  SaveIcon,
  VideoIcon,
} from "../icons";
import useUserStore from "../stores/userStore";
import Avatar from "./Avatar";
import MenuItem from "./MenuItem";

function SidebarMenu() {
  const user = useUserStore((state) => state.user);
  return (
    <div className="fixed top-14 h-full w-[350px] pt-2 overflow-auto flex flex-col gap-2 min-w-[220px]">
      <Link to="/profile">
        <MenuItem
          icon={Avatar}
          text={`${user.firstName} ${user.lastName}`}
          className="w-10"
          imgSrc={user.profileImage}
        />
      </Link>
      <MenuItem icon={FriendIcon} text="Friends" className="w-10" />
      <MenuItem icon={MemoryIcon} text="Memories" className="w-10" />
      <MenuItem icon={SaveIcon} text="Save" className="w-10" />
      <MenuItem icon={GroupIcon} text="Group" className="w-10" />
      <MenuItem icon={VideoIcon} text="Video" className="w-10" />
      <MenuItem icon={MoreIcon} text="More" className="w-10" />
    </div>
  );
}
export default SidebarMenu;
