import { createSlice } from "@reduxjs/toolkit";
import { PostsData } from "../DummyData";

export const postSlice = createSlice({
  //スライスの名前
  name: "posts",
  //初期のステート
  initialState: { value: PostsData },
  //reducers
  reducers: {
    //addPostという名前のReducerとActionCreatorを生成
    addPost: (state, action) => {
      //PostsDataを初期値にしてデータをプッシュしていく
      state.value.push(action.payload);
    },
    deletePost: (state, action) => {
      state.value = state.value.filter((post) => post.id !== action.payload.id);
    },
  },
});

//postSliceのaddPostアクションをエクスポート
export const { addPost, deletePost } = postSlice.actions;
//postSliceのReducerをエクスポート
export default postSlice.reducer;
