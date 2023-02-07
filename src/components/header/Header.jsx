import "./Header.css";

export const Header = () => {
  return (
        <div className="header">
              <div className="headerTitle">
                  <span className="headerTitleSmall">My Blogs</span>
                  <span className="headerTitleLarge"> Blog</span>
              </div>
              <img className="headerImg" src="/image/nature.jpg" alt="nature"/>
    </div>
  )
}
