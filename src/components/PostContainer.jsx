import { useEffect, useState } from "react";
import usePostStore from "../stores/postStore";
import CreatePost from "./CreatePost";
import PostItem from "./PostItem";
import useUserStore from "../stores/userStore";
import PostFormEdit from "./PostFormEdit";

function PostContainer() {
  const posts = usePostStore((state) => state.posts);
  const getAllPosts = usePostStore((state) => state.getAllPosts);
  const setCurrentPost = usePostStore((state) => state.setCurrentPost);
  const currentPost = usePostStore((state) => state.currentPost);
  // const token = useUserStore((state) => state.token);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const run = async () => {
      setLoading(true);
      // await getAllPosts(token);
      await getAllPosts();
      setLoading(false);
    };
    run();
  }, []);
  // if (loading) {
  //   return <span className="loading loading-ball loading-xl"></span>;
  // }

  return (
    <>
      <div className="w-[650px] mx-auto min-h-screen my-3 flex flex-col gap-4 rounded-lg">
        <CreatePost />
        {loading ? (
          <span className="loading loading-bars loading-xl"></span>
        ) : (
          <>
            {posts.map((el) => (
              <PostItem key={el.id} post={el} />
            ))}
          </>
        )}
      </div>
      <dialog
        className="modal"
        id="editform-modal"
        onClose={() => setCurrentPost(null)}
      >
        <div className="modal-box">
          {currentPost && <PostFormEdit />}
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
}
export default PostContainer;
