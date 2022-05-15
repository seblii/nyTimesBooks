import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListNames from "./routes/ListNames";
import TopBooks from "./routes/TopBooks";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListNames />} />
        <Route path="/bestsellers">
          <Route path=":listName" element={<TopBooks />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
