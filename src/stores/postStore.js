import { create } from "zustand";

const usePostStore = create((set,get) => ({
  posts: [],
  currentPost: null, // for edit
  loading: false,
  createPost : async (body, token, user) => {
    set({ loading: true})
    const rs = await createPost(body, token)

  }
}))

export default usePostStore