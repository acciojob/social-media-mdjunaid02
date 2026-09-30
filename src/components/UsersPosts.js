import React from "react";
import { useParams, Link } from "react-router-dom";

const UserPosts = ({ users, posts }) => {
  const { userId } = useParams();

  const user = users.find((user) => user.id === userId);

  const userPosts = posts.filter((post) => post.userId === userId);

  if (!user) {
    return (
      <main>
        <h2>User not found</h2>
        <Link to="/users" className="button">
          Back to Users
        </Link>
      </main>
    );
  }

  return (
    <main>
      <h2>{user.name}'s Posts</h2>

      <Link to="/users" className="button">
        Back to Users
      </Link>

      <div className="posts-list">
        {userPosts.length === 0 ? (
          <p>No posts found.</p>
        ) : (
          userPosts.map((post) => (
            <article className="post" key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.content}</p>

              <div className="reactions">
                <span>👍 {post.reactions.thumbsUp}</span>
                <span>🎉 {post.reactions.hooray}</span>
                <span>❤️ {post.reactions.heart}</span>
                <span>🚀 {post.reactions.rocket}</span>
                <span>👀 {post.reactions.eyes}</span>
              </div>
            </article>
          ))
        )}
      </div>
    </main>
  );
};

export default UserPosts;