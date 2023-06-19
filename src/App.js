import React, { useEffect, useState } from "react";

import ListItem from "./components/listItem/ListItem";
import InputArea from "./components/inputArea/InputArea";
import Spinner from "./components/spinner/Spinner";

import CommentsService from "./services/CommentsService";
import useScroll from "./hooks/useScroll";

import "./style.scss";

function App() {
  const {scrollToDown, scrollToTop} = useScroll();
  const { getAllComments } = CommentsService();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = (id) => {
    setComments(comments.filter((item) => item.id !== id));
  };

  const handleAdd = (newComment) => {
    setComments((prevComments) => [
      ...prevComments,
      {
        id: comments.length + 100,
        body: newComment,
        postId: comments.length + 100,
        user: {
          id: comments.length + 100,
          username: "Unknown",
        },
      },
    ]);
  };

  const fetchData = async () => {
    const data = await getAllComments();
    setComments(data);
  };

  return (
    <div className="app">
      <div className="comments-list">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <ListItem
              item={comment}
              key={comment.id}
              handleDelete={handleDelete}
            />
          ))
        ) : (
          <Spinner />
        )}
        <InputArea handleAdd={handleAdd} />
      </div>

      <div className="scroll-btns">
        <button onClick={() => scrollToTop()}>🠕</button>
        <button onClick={() => scrollToDown()}>🠗</button>
      </div>
    </div>
  );
}

export default App;
