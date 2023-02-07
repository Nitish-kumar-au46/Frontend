import React from 'react'

import "./TopBar.css"
export const TopBar = () => {
      const user = false;
  return (
        <div className="top">
              <div className="topLeft">
              <i className="topIcon fab fa-facebook-square"></i>
              <i className="topIcon fab fa-twitter-square"></i>
              <i className="topIcon fab fa-pinterest-square"></i>
              <i className="topIcon fab fa-instagram-square"></i>
              </div>
              <div className="topCenter">
                    <ul className="topList">
                          <li className="topListItem">
                                <a href="/" style={{textDecoration:"none"}}>HOME</a>
                        </li>
                          <li className="topListItem">ABOUT</li>
                          <li className="topListItem">
                                <a href="/contact" style={{textDecoration:"none"}}>CONTACT</a>
                          </li>
                          <li className="topListItem">
                                <a href="/write" style={{textDecoration:"none"}}>WRITE</a>
                          </li>
                          <li className="topListItem">
                                {user && "LOGOUT"}
                          </li>
                    </ul>
              </div>
              <div className="topRight">
                    {
                          user ? (
                    <img className="topImg" src="/image/logo.jpg" alt="" />
                          ) : (
                                      <ul className="topList">
                                            <li className="topListItem">
                                                  
                                            <a href="/login">LOGIN</a>

                                            </li>
                                            <li className="topListItem">
                                                  
                                            <a href="/register">REGISTER</a>

</li>

                    </ul>
                        
                          )}
                    <i className="topSearchIcon fas fa-search"></i>
              </div>
    </div>
  )
}
