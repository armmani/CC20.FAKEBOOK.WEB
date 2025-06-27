import DefaultProfile from "../assets/default-avatar.png";
import { DropDownIcon } from "../icons";

function Avatar(props) {
  const { imgSrc, menu, bottom, right, ...resProps } = props;
  return (
    <div className="avtar items-center cursor-pointer">
      <div {...resProps}>
        <img src={imgSrc ? imgSrc : DefaultProfile} alt="avatar" />
      </div>
      {menu && (
        <DropDownIcon
          className="absolute -bottom-2 -right-2 w-8"
          style={{ right: right, bottom: bottom }}
        />
      )}
    </div>
  );
}
export default Avatar;
