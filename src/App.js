import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import ExerciseDetail from "./Pages/ExerciseDetail";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import "./App.css";

const App = () => {
  return (
    <div>
      <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise/.id" element={<ExerciseDetail />} />
        </Routes>
        <Footer />
      </Box>
    </div>
  );
};

export default App;
