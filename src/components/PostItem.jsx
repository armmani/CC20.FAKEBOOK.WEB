import { CloseIcon, LikeIcon, ThreeDotIcon } from "../icons";
import Avatar from "./Avatar";
import reactLogo from "../assets/react.svg";
import useUserStore from "../stores/userStore";
import usePostStore from "../stores/postStore";
import TimeAgo from "react-timeago";

function PostItem({ post }) {
  // console.log(post)
  const user = useUserStore((state) => state.user);
  const token = useUserStore((state) => state.token);
  const getAllPosts = usePostStore((state) => state.getAllPosts);
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <div className="flex justify-between">
          <div className="flex gap-3">
            <Avatar className="w-11 rounded-full" imgSrc={post.user.profileImage} />
            <div className="flex flex-col">
              <p>{post.user.firstName} {post.user.lastName}</p>
              <p className="text-xs opacity-70">
                <TimeAgo date={post.createdAt} />
              </p>
            </div>
          </div>
          <div className="flex gap-2 items-center -mt-5">
            <div className="dropdown">
              <div tabIndex={0} role="button">
                <div className="avatar items-center cursor-pointer">
                  <div className="w-10 h-10 rounded-full !flex justify-center items-center hover:bg-gray-700">
                    <ThreeDotIcon className="w-6" />
                  </div>
                </div>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
              >
                <li>
                  {" "}
                  <a>Edit</a>
                </li>
                <li>
                  {" "}
                  <a>Delete</a>
                </li>
              </ul>
            </div>
            <div className="avatar items-center cursor-pointer">
              <div className="w-10 h-10 rounded-full !flex justify-center items-center hover:bg-gray-700">
                <CloseIcon className="w-6" />
              </div>
            </div>
          </div>
        </div>
        <p>{post.message}</p>
        {post.image && 
        <img src={post.image} className="p-4 max-h-[200px] object-contain" />
}
        {/* LIKE COMMENT NUMBER */}
        <div className="flex justify-between items-center pe-4">
          <div className="avatar item-end gap-1 cursor-pointer">
            <div className="w-7 h-7 rounded-full !flex justify-center items-center bg-blue-200">
              <LikeIcon className="w-5" />
            </div>
            <p>{post.likes?.length} Likes</p>
          </div>
          <div className="flex">
            <p className="opacity-60">{post.comments?.length} comments</p>
          </div>
        </div>
        <div className="divider h-0 my-0"></div>
        {/* LIKE COMMENT SHARE */}
        <div className="flex gap-3 justify-between">
          <div
            className={`flex gap-3 justify-center items-center cursor-pointer rounded-lg py-2 flex-1 hover:bg-gray-700 ${
              Math.random() > 0.5 ? "bg-blue-400" : ""
            }`}
          >
            Like
          </div>
          <div className="flex gap-3 justify-center items-center cursor-pointer rounded-lg py-2 flex-1 hover:bg-gray-700">
            Comment
          </div>
          <div className="flex gap-3 justify-center items-center cursor-pointer rounded-lg py-2 flex-1 hover:bg-gray-700">
            Share
          </div>
        </div>
        <div className="divider h-0 my-0"></div>
        {/* Comment Container */}
      </div>
    </div>
  );
}
export default PostItem;
