import "./styles/App.css";
import { useState } from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JS 1", body: "Description" },
    { id: 2, title: "JS 2", body: "Description" },
    { id: 3, title: "JS 3", body: "Description" },
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: "15px 0" }} />
      <div>
        <select>
          <option value="value1">По названию</option>
          <option value="value1">По описанию</option>
        </select>
      </div>
      {posts.length ? (
        <PostList remove={removePost} posts={posts} title="Посты про js" />
      ) : (
        <h2 style={{ textAlign: "center" }}>Нет задач!</h2>
      )}
    </div>
  );
}

export default App;
