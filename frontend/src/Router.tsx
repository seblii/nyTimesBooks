import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListNames from "./routes/ListNames";
import Reviews from "./routes/Reviews";
import TopBooks from "./routes/TopBooks";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListNames />} />
        <Route path="/bestsellers">
          <Route path=":listName" element={<TopBooks />} />
        </Route>
        <Route path="/reviews">
          <Route path=":isbn" element={<Reviews />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
