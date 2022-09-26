import React from 'react';
import Home from './Pages/home/Home.jsx';
import Login from './Pages/login/Login.jsx';
import List from './Pages/list/List.jsx';
import Single from './Pages/single/Single.jsx';
import New from './Pages/new/New.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home/>}></Route>
            <Route path="login" element={<Login/>}></Route>
            <Route path="users">
              <Route index element={<List/>}></Route>
              <Route path=":userId" element={<Single/>}></Route>
              <Route path="new" element={<New/>}></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
