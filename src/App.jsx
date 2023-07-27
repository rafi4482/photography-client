import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Homepage from "./components/Homepage/Homepage/Homepage";
import Navigation from "./components/Homepage/Navigation/Navigation";
import Classes from "./components/Classes/Classes";
import Instructors from "./components/Instructors/Instructors";
import Footer from "./components/Footer/Footer";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { onAuthStateChangedListener } from "./firebase.config";

function App() {
  const [user, setUser] = useState(null);

  // useEffect to listen for changes in the user's authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((authUser) => {
      setUser(authUser);
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, []);
  return (
    <>
      <Navigation user={user} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/instructors" element={<Instructors />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
