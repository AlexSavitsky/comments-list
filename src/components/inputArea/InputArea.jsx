import React, { useEffect, useState } from "react";
import {
  getFromStorage,
  putInStorage,
  updateStorage,
} from "../../tools/localStorage";

import "./style.scss";

const InputArea = ({ handleAdd }) => {
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    if (!getFromStorage("inputValue")) {
      putInStorage("inputValue", " ");
    } else {
      setNewComment(getFromStorage("inputValue"));
    }
  });

  const handleChange = (e) => {
    setNewComment(e.target.value);
    updateStorage("inputValue", e.target.value);
  };

  const handleSubmit = () => {
    handleAdd(newComment);
    setNewComment("");
    updateStorage("inputValue", "");
  };

  return (
    <div className="input-area">
      <textarea
        value={newComment}
        className="input-area__textarea"
        placeholder="Enter comment here..."
        onChange={(e) => {
          handleChange(e);
        }}
      />

      <button
        className="input-area__submit-btn"
        onClick={() => {
          handleSubmit();
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default InputArea;
