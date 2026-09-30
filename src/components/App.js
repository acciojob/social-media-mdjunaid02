import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./../styles/App.css";

import { users, initialPosts } from "../data/data";

import PostView from "./PostView";
import UserPosts from "./UsersPosts";
import Navbar from "./Navbar";
import Posts from "./Posts";
import Users from "./Users";
import Notifications from "./Notifications";
import AddPost from "./AddPost";
import EditPost from "./EditPost";

const App = () => {
  const [posts, setPosts] = useState(initialPosts);

  return (
    <BrowserRouter>
      <div id="main">

        <Navbar />

        <Switch>

  <Route exact path="/">
    <Posts posts={posts} setPosts={setPosts} users={users} />
  </Route>

  <Route exact path="/users">
    <Users users={users} />
  </Route>

  <Route path="/users/:userId">
    <UserPosts users={users} posts={posts} />
  </Route>

  <Route path="/notifications">
    <Notifications />
  </Route>

  <Route path="/add-post">
    <AddPost
      users={users}
      posts={posts}
      setPosts={setPosts}
    />
  </Route>

  <Route path="/post/:postId">
    <PostView posts={posts} users={users} />
  </Route>

  <Route path="/edit-post/:postId">
    <EditPost posts={posts} setPosts={setPosts} />
  </Route>

</Switch>

      </div>
    </BrowserRouter>
  );
};

export default App;
