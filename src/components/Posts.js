import React from "react";
import { Link } from "react-router-dom";

const Posts = ({ posts, setPosts, users }) => {

  const getUserName = (userId) => {
    const user = users.find((user) => user.id === userId);
    return user ? user.name : "Unknown User";
  };

  const addReaction = (postId, reactionName) => {
    const updatedPosts = posts.map((post) => {
      if (post.id !== postId) {
        return post;
      }

      return {
        ...post,
        reactions: {
          ...post.reactions,
          [reactionName]: post.reactions[reactionName] + 1
        }
      };
    });

    setPosts(updatedPosts);
  };

  return (
    <main>

      <h2>Add a New Post</h2>

      <Link to="/add-post" className="button">
        Create Post
      </Link>

      <h2>Posts</h2>

      <div className="posts-list">

        {posts.map((post) => (

          <article className="post" key={post.id}>

            <h3>{post.title}</h3>

            <p>
              by {getUserName(post.userId)}
            </p>

            <p>{post.content}</p>

            <div className="reactions">

              <button
                onClick={() =>
                  addReaction(post.id, "thumbsUp")
                }
              >
                👍 {post.reactions.thumbsUp}
              </button>

              <button
                onClick={() =>
                  addReaction(post.id, "hooray")
                }
              >
                🎉 {post.reactions.hooray}
              </button>

              <button
                onClick={() =>
                  addReaction(post.id, "heart")
                }
              >
                ❤️ {post.reactions.heart}
              </button>

              <button
                onClick={() =>
                  addReaction(post.id, "rocket")
                }
              >
                🚀 {post.reactions.rocket}
              </button>

              <button
                onClick={() =>
                  addReaction(post.id, "eyes")
                }
              >
                👀 {post.reactions.eyes}
              </button>

            </div>

            <Link
              to={`/post/${post.id}`}
              className="button"
            >
              View Post
            </Link>

          </article>

        ))}

      </div>

    </main>
  );
};

export default Posts;