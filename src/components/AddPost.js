import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const AddPost = ({ users, posts, setPosts }) => {
  const history = useHistory();

  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!author || !title || !content) {
      alert("Please fill all fields");
      return;
    }

    const newPost = {
      id: String(posts.length + 1),
      title: title,
      content: content,
      userId: author,
      reactions: {
        thumbsUp: 0,
        hooray: 0,
        heart: 0,
        rocket: 0,
        eyes: 0
      }
    };

    setPosts([...posts, newPost]);

    setAuthor("");
    setTitle("");
    setContent("");

    history.push("/");
  };

  return (
    <main>
      <h2>Create a New Post</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="postAuthor">Author</label>

          <select
            id="postAuthor"
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
          >
            <option value="">Select an author</option>

            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="postTitle">Title</label>

          <input
            id="postTitle"
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="postContent">Content</label>

          <textarea
            id="postContent"
            value={content}
            onChange={(event) => setContent(event.target.value)}
          />
        </div>

        <button type="submit" className="button">
          Create Post
        </button>
      </form>
    </main>
  );
};

export default AddPost;