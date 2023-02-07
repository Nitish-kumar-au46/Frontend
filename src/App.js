import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TopBar } from "./components/topBar/TopBar";
import { Login } from "./pages/login/Login";
import { Register } from "./pages/register/Register";
import { Setting } from "./pages/settings/Setting";
import { HomePage } from "./pages/home/HomePage";
import { Single } from "./pages/single/Single";
import { Write } from "./pages/write/Write";
import SideBar from "./components/sidebar/SideBar";
import { SinglePost } from "./components/singlePost/SinglePost";

function App() {
  const user = false;

  return (
    <>
      <TopBar />
      <BrowserRouter>
        <Routes>
          <Route
            exect
            path="/setting"
            element={user ? <Setting /> : <Register />}
          ></Route>
          <Route exect path="/" element={<HomePage />}></Route>
          <Route exect path="/post/:postId" element={<Single />}></Route>
          <Route
            exect
            path="/write"
            element={user ? <Write /> : <Register />}
          ></Route>
          <Route
            exect
            path="/login"
            element={user ? <HomePage /> : <Login />}
          ></Route>
          <Route
            exect
            path="/register"
            element={user ? <HomePage /> : <Register />}
          ></Route>
          <Route exect path="/side" element={<SideBar />}></Route>
          <Route exect path="/singlePost" element={<SinglePost />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
