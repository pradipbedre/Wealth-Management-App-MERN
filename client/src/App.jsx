import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/Landingpage";
import Signup from "./pages/Signup/Signup";
import Signin from "./pages/Signin/Signin";
import Dashboard from "./pages/User/Dashboard";
import Profile from "./pages/UserProfile/Profile";
import AddAsset from "./pages/AddAsset/AddAsset";
import AddIncome from "./pages/AddIncome/AddIncome";
import AddExpense from "./pages/AddExpense/AddExpense";
import Breakdown from "./pages/Breakdown/Breakdown";

const App = () => {
  return (
    <div>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/profile" element={<Profile />} />
        <Route path="/dashboard/addAsset" element={<AddAsset />} />
        <Route path="/dashboard/addIncome" element={<AddIncome />} />
        <Route path="/dashboard/addExpense" element={<AddExpense />} />
        <Route path="/dashboard/breakdown" element={<Breakdown />} />
      </Routes>
    </div>
  );
};

export default App;
