import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";

const EditPost = ({ posts, setPosts }) => {
  const { postId } = useParams();
  const history = useHistory();

  const post = posts.find((post) => post.id === postId);

  const [title, setTitle] = useState(post ? post.title : "");
  const [content, setContent] = useState(post ? post.content : "");

  if (!post) {
    return (
      <main>
        <h2>Post not found</h2>
      </main>
    );
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const updatedPosts = posts.map((item) => {
      if (item.id === postId) {
        return {
          ...item,
          title: title,
          content: content
        };
      }

      return item;
    });

    setPosts(updatedPosts);
    history.push("/");
  };

  return (
    <main>
      <h2>Edit Post</h2>

      <form onSubmit={handleSubmit}>
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
          Save Changes
        </button>
      </form>
    </main>
  );
};

export default EditPost;