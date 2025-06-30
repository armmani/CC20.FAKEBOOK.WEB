import { SearchIcon } from "../icons";
import Avatar from "./Avatar";
import MenuItem from "./MenuItem";

function SidebarContact() {
  return (
    <div className="fixed top-14 right-0 h-full w-[350px] overflow-auto flex flex-col gap-2 max-2xl:hidden">
      <div className="flex justify-between text-white">
        <span>Contact</span>
        <div className="flex gap-2">
          <SearchIcon />
          ...
        </div>
      </div>
      <MenuItem
        icon={Avatar}
        text="CC20"
        className="w-11 h-11 rounded-full bg-slate-200"
        imgSrc='https://www.svgrepo.com/show/303599/spider-man-4-logo.svg'
      />
      <MenuItem
        icon={Avatar}
        text="CC21"
        className="w-11 h-11 rounded-full bg-slate-200"
        imgSrc='https://www.svgrepo.com/show/107388/iron-man.svg'
      />
      <MenuItem
        icon={Avatar}
        text="CC22"
        className="w-11 h-11 rounded-full bg-slate-200"
        imgSrc='https://www.svgrepo.com/show/163518/catwoman.svg'
      />
    </div>
  );
}
export default SidebarContact;
