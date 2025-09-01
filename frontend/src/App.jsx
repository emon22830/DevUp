import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Feed from "./pages/Feed";
import Discover from "./pages/Discover";
import CreatePost from "./pages/CreatePost";
import Messages from "./pages/Messages";
import Connections from "./pages/Connections";
import Profile from "./pages/Profile";
import ChatBox from "./pages/ChatBox";
import {useUser} from '@clerk/clerk-react'
import Layout from "./pages/Layout";

const App = () => {
  const{user} = useUser()
  return (
    <>
      <Routes>
        <Route path="/" element={!user?<Login />:<Layout/>} />
        <Route path="feed" element={<Feed />} />
        <Route path="messages" element={<Messages />} />
        <Route path="messages/:userId" element={<ChatBox />} />
        <Route path="connections" element={<Connections />} />
        <Route path="discover" element={<Discover />} />
        <Route path="profile" element={<Profile />} />
        <Route path="profile/:profileId" element={<Profile />} />
        <Route path="create-post" element={<CreatePost />} />
      </Routes>
    </>
  );
};

export default App;
