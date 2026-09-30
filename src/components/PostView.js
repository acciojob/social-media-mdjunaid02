import React from "react";
import { Link, useParams } from "react-router-dom";

const PostView = ({ posts, users }) => {
  const { postId } = useParams();

  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return (
      <main>
        <h2>Post not found</h2>

        <Link to="/" className="button">
          Back to Posts
        </Link>
      </main>
    );
  }

  const user = users.find((user) => user.id === post.userId);

  return (
    <main>
      <article className="post">
        <h2>{post.title}</h2>

        <p>
          by {user ? user.name : "Unknown User"}
        </p>

        <p>{post.content}</p>

        <div className="reactions">
          <span>👍 {post.reactions.thumbsUp}</span>
          <span>🎉 {post.reactions.hooray}</span>
          <span>❤️ {post.reactions.heart}</span>
          <span>🚀 {post.reactions.rocket}</span>
          <span>👀 {post.reactions.eyes}</span>
        </div>

        <Link
          to={`/edit-post/${post.id}`}
          className="button"
        >
          Edit Post
        </Link>

        <Link to="/" className="button">
          Back to Posts
        </Link>
      </article>
    </main>
  );
};

export default PostView;