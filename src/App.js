import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addPost, deletePost } from "./features/Posts";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  //useSelectorでstoreにアクセスする。stateは今の状態。postsはスライスの名前。valueはpostスライスの初期状態。
  const postList = useSelector((state) => state.posts.value);
  const dispatch = useDispatch();
  const handleClick = () => {
    //postSliceのアクションを通知する
    dispatch(
      addPost({
        //postListの配列の長さが新規投稿のIDの数字と同じになる
        id: postList.length + 1,
        //useStateの変数
        name: name,
        content: content,
      })
    );
    //入力欄を空欄にする(inputのvalueにステート関数を設定しておく)
    setName("");
    setContent("");
  };
  return (
    <div className="App">
      <div>
        <h1>React-Redux掲示板</h1>
      </div>
      <div className="addPost">
        <input
          type="text"
          placeholder="お名前"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          type="text"
          placeholder="投稿内容"
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />
        <button onClick={() => handleClick()}>投稿</button>
        <hr />
      </div>
      <div className="displayPosts">
        {postList.map((post) => (
          <div key={post.id} className="post">
            <h1 className="postName">{post.name}</h1>
            <h1 className="postContent">{post.content}</h1>
            <button onClick={() => dispatch(deletePost({ id: post.id }))}>
              削除
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
