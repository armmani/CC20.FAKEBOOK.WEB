import { create } from "zustand";
import { createLike, createPost, deletePost, getAllPosts, updatePost, unLike, createComment } from "../api/postApi";
import useUserStore from "./userStore";

const usePostStore = create((set, get) => ({
  posts: [],
  currentPost: null, // for edit
  loading: false,
  createPost: async (body, token, user) => {
    set({ loading: true });
    const resp = await createPost(body, token);
    set({ loading: false });
    // get().getAllPosts()
    set((state) => ({
      loading: false,
      posts: [
        { ...resp.data.result, user, likes: [], comments: [] },
        ...state.posts,
      ],
    }));
    return resp;
  },
  getAllPosts: async () => {
    // await new Promise((rs) => setTimeout(rs, 1000));
    let token = useUserStore.getState().token;
    const resp = await getAllPosts(token);
    set({ posts: resp.data.posts });
    return resp;
  },
  deletePost: async (id) => {
    let token = useUserStore.getState().token;
    const resp = await deletePost(id, token);
    get().getAllPosts();
    return resp;
  },
  setCurrentPost: (post) => set({ currentPost: post }),
  updatePost : async (id,body)=> {
    const token = useUserStore.getState().token
    const resp = await updatePost(id,body,token)
    get().getAllPosts()
    return resp
  },
  createLike:async(body)=>{
    const token = useUserStore.getState().token
    const resp = await createLike(body, token)
    get().getAllPosts()
    return resp
  },
  unLike: async (body) => {
    const token = useUserStore.getState().token
    const resp = await unLike(body,token)
    get().getAllPosts()
    return resp
  },
  createComment : async (body) => {
const token = useUserStore.getState().token
const resp = await createComment(body, token)
get().getAllPosts()
return resp
  }
}));

export default usePostStore;
