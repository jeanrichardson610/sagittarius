import React, { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";

const App = () => {
  const [recentPrompts, setRecentPrompts] = useState([]);

  return (
    <>
      <Sidebar recentPrompts={recentPrompts} />
      <Main setRecentPrompts={setRecentPrompts} />
    </>
  );
};

export default App;
