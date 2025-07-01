import { useState } from "react";
import { PhotoIcon2 } from "../icons";
import usePostStore from "../stores/postStore";
import useUserStore from "../stores/userStore";
import AddPicture from "./AddPicture";
import Avatar from "./Avatar";
import { toast } from "react-toastify";

function PostFormEdit() {
  const currentPost = usePostStore((state) => state.currentPost);
  const user = useUserStore((state) => state.user);
  // const token = useUserStore((state) => state.token);
  // const loading = usePostStore((state) => state.loading);
  const createPost = usePostStore((state) => state.createPost);
  const updatePost = usePostStore(state=> state.updatePost)

  const [message, setMessage] = useState(currentPost.message);
  const [loading, setLoading] = useState(false);
  const [addPic, setAddPic] = useState(false);
  const [file, setFile] = useState(null);
  const [removePic, setRemovePic] = useState(false);

  const hdlUpdatePost = async () => {
    try {
      setLoading(true);
      const body = new FormData();
      body.append("messager", message);
      if (file) {
        body.append("image", file);
      }
      if (removePic) {
        body.append("removePic", true);
      }
      // api call update
      await updatePost(currentPost.id, body)
      document.getElementById("editform-modal").close();
    } catch (err) {
      const errMsg = err.response?.data.error || err.message;
      toast.error(errMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-xl text-center">
        Editting Post
        {loading && <span className="loading loading-dots loading-sm"></span>}
      </h3>
      <div className="divider mt-1 mb-0"></div>
      <div className="flex gap-2">
        <Avatar className="w-11 rounded-full" imgSrc={user.profileImage} />
        <div className="flex flex-col">
          <div className="text-sm">
            {user.firstName} {user.lastName}
          </div>
          <select className="select bg-slate-700 select-xs max-w-xs">
            <option disabled>Who can see? </option>
            <option>Public</option>
            <option>Friends</option>
          </select>
        </div>
      </div>
      <textarea
        className="textarea textarea-ghost w-full"
        placeholder={`What do you think? ${user.firstName}`}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={message.split("\n").length}
      ></textarea>
      {currentPost.image && !removePic && (
        <div className="flex justify-evenly items-center">
          <img src={currentPost.image} className="h-[100px] object-contain" />
          <button className="btn btn-sm" onClick={() => setRemovePic(true)}>
            Remove
          </button>
        </div>
      )}

      {addPic && <AddPicture file={file} setFile={setFile} />}
      <div className="flex justify-between border rounded-lg p-2 items-center cursor-pointer">
        <p>Add With Your Post</p>
        <div
          className="flex justify-center items-center w-10 h-10 rounded-full bg-slate-600 hover:bg-slate-100 active:scale-110"
          onClick={() => setAddPic((prev) => !prev)}
        >
          <PhotoIcon2 className="w-7" />
        </div>
      </div>
      <button
        className="btn btn-primary"
        onClick={hdlUpdatePost}
        disabled={message.trim().length === 0 && !file}
      >
        Update POST
      </button>
    </div>
  );
}
export default PostFormEdit;
