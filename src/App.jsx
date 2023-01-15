import React from "react";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import { Stack } from "@mui/material";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Stack direction="row" spacing={2}>
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </>
  );
};

export default App;
