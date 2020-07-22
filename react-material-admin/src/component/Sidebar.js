import React from "react";

const Sidebar = () => {
  return (
    <div
      className="sidebar"
      data-color="rose"
      data-background-color="black"
      data-image="./img/sidebar-1.jpg"
    >
      {/*
    Tip 1: You can change the color of the sidebar using: data-color="purple | azure | green | orange | danger"
  
    Tip 2: you can also add an image using data-image tag
*/}
      <div className="logo">
        <a href="/" className="simple-text logo-mini">
          SD
        </a>
        <a href="/" className="simple-text logo-normal">
          Sachins Design
        </a>
      </div>
      <div className="sidebar-wrapper ps ps--active-y">
        <div className="user">
          <div className="user-info">
            <a
              data-toggle="collapse"
              href="#collapseExample"
              className="username"
            >
              <span>
                Sachin
                <b className="caret" />
              </span>
            </a>
            <div className="collapse" id="collapseExample">
              <ul className="nav">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span className="sidebar-mini"> MP </span>
                    <span className="sidebar-normal"> My Profile </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span className="sidebar-mini"> EP </span>
                    <span className="sidebar-normal"> Edit Profile </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span className="sidebar-mini"> S </span>
                    <span className="sidebar-normal"> Settings </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <ul className="nav">
          <li className="nav-item active ">
            <a className="nav-link" href="/">
              <i className="material-icons">dashboard</i>
              <p> Dashboard </p>
            </a>
          </li>
        </ul>
        <div className="ps__rail-x" style={{ left: 0, top: 0 }}>
          <div
            className="ps__thumb-x"
            tabIndex={0}
            style={{ left: 0, width: 0 }}
          />
        </div>
        <div className="ps__rail-y" style={{ top: 0, left: 0 }}>
          <div
            className="ps__thumb-y"
            tabIndex={0}
            style={{ top: 0, height: 0 }}
          />
        </div>
      </div>
      <div className="ps__rail-x" style={{ left: 0, top: 0 }}>
        <div
          className="ps__thumb-x"
          tabIndex={0}
          style={{ left: 0, width: 0 }}
        />
      </div>
      <div className="ps__rail-y" style={{ top: 0, left: 0 }}>
        <div
          className="ps__thumb-y"
          tabIndex={0}
          style={{ top: 0, height: 0 }}
        />
      </div>
      <div
        className="sidebar-background"
        style={{ backgroundImage: "url(../assets/img/sidebar-1.jpg)" }}
      />
    </div>
  );
};

export default Sidebar;
