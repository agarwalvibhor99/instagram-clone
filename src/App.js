import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Post from "./Components/Post/Post";

function App() {
  const [posts, setPosts] = useState([
    {
      username: "Abcd",
      caption: "This is React Logo",
      imageUrl:
        "https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png",
    },
    {
      username: "Abcd",
      caption: "This is React Logo",
      imageUrl:
        "https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png",
    },
  ]);

  return (
    <div className="app">
      <Header />
      {/* POSTS */}
      {posts.map((post, index) => (
        <Post
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      ))}
    </div>
  );
}

export default App;
