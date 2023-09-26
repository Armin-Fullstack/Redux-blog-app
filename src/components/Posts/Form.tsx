import { SyntheticEvent, useState } from "react";
import styles from "./Form.module.css";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { postAdded } from "../../features/posts/postsSlice";
import Button from "../Button/Button";

export default function Form(): JSX.Element {
  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const dispatch = useDispatch();
  const usersOptions = useSelector((store) =>
    store.users.map((user) => (
      <option value={user.id} key={user.id}>
        {user.name}
      </option>
    ))
  );

  function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
    const newPost = {
      id: nanoid(),
      title,
      content,
      userId: author,
      createdAt: new Date().toISOString(),
    };
    if (!title || !content || !author) return;
    dispatch(postAdded(newPost));
    setTitle("");
    setContent("");
    setAuthor("");
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.formTitle}>Add a New Post</h2>
      <div className="groupInput">
        <label>Post Title:</label>
        <input type="text" placeholder="What's in your mind?" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className="groupInput">
        <label>Author:</label>
        <select className={styles.authorSelect} value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option>-- Select an Author --</option>
          {usersOptions}
        </select>
      </div>
      <div className="groupInput">
        <label>Content:</label>
        <textarea value={content} onChange={(e) => setContent(e.target.value)} />
      </div>
      <Button bgColor="#a5d8ff" width="11rem" textColor="white" textSize="1.7rem">
        Save Post
      </Button>
    </form>
  );
}
