import React from "react";
import ReactDOM from "react-dom/client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import BookCategoryList from "./components/BookCategoryList";
import BookList from "./components/BookList";
import { ReviewList } from "./components/Review";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<BookCategoryList />} />
        <Route path="/list/:encodedListName" element={<BookList />} />
        <Route path="/review/:isbn13" element={<ReviewList />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
