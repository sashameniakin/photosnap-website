import { Routes, Route } from "react-router-dom";
import Features from "../pages/features";
import Pricing from "../pages/pricing";
import Stories from "../pages/stories";
import Home from "../pages/home";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/features" element={<Features />}></Route>
      <Route path="/pricing" element={<Pricing />}></Route>
      <Route path="/stories" element={<Stories />}></Route>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  );
}
