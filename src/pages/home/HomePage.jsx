import "./homePage.css";
import { Header } from "../../components/header/Header";
import { Posts } from "../../components/posts/Posts";
import { SideBar } from "../../components/sidebar/SideBar";

export const HomePage = () => {
  return (
    <>
              <Header />
      
      <div className="home">
        <Posts />
        <SideBar/> 
        
    </div>
  </>
      )
}
