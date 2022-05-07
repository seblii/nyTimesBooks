import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListNames from './routes/ListNames';
import TopBooks from './routes/TopBooks';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListNames />} />
        <Route path="/bestsellers" element={<TopBooks />}>
          <Route path=":listName" element={<TopBooks />} />
        </Route>
      </Routes>
  </BrowserRouter>
  );
}

export default App;
