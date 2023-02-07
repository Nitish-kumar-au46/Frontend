import "./single.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SideBar } from "../../components/sidebar/SideBar";
import { SinglePost } from "../../components/singlePost/SinglePost";

export const Single = () => {
  return (
    <div className="single">
      <BrowserRouter>
        <Routes>
          <Route exect path="/side" element={<SideBar />}></Route>
          <Route exect path="/singlePost" element={<SinglePost />}></Route>
        </Routes >
      </BrowserRouter>
    </div>
  );
}
