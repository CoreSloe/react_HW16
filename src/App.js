import React from "react";
import Post from "./components/Post"; // Шлях до компонента Post
import "./App.css";

const ANAKIN_IMAGE =
  "https://ssb.wiki.gallery/images/thumb/9/99/Anakin_SSBU.png/200px-Anakin_SSBU.png";

const RAY_IMAGE =
  "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";

const App = () => {
  return (
    <div className="app">
      <Post
        author={{
          name: "Anakin Skywalker",
          photo: ANAKIN_IMAGE,
          nickname: "@dart_vader",
        }}
        content="WTF? Who is Ray? Why she is Skywalker? Luke...?"
        image={RAY_IMAGE}
        date={"26 февр."}
      />
    </div>
  );
};

export default App;
