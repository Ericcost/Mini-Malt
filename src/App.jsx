import React from "react";
import { BrowserRouter, Routes, Route, Outlet, Navigate } from "react-router-dom";

//pages
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Profile from "./pages/Profile/Profile";

//components
import Navbar from "./components/Navbar/Navbar";
import Leftbar from "./components/Leftbar/Leftbar";
import Rightbar from "./components/Rightbar/Rightbar";

//SCSS
import "./styles/style.scss";

function App() {
  const currentUser = true;

  function Layout() {
    return (
      <div>
        <Navbar />
        <div style={{ display: "flex" }}>
          <Leftbar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          <Rightbar />
        </div>
      </div>
    );
  };

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    };

    return children;
  } 
  

  return (
    <>
      <BrowserRouter>
        <main>
          <Routes>
            <Route 
              path="/"
              element={ 
                <ProtectedRoute>
                  <Layout />
                </ProtectedRoute>
              } 
              children={
                [
                  <Route 
                    key="home"
                    path="/"
                    element={<Home />}/>,
                  <Route 
                    key="profile"
                    path="/profile/:id"
                    element={<Profile />}/>
                ] 
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
};

export default App;
