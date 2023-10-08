import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "./features/Userslice";
import { auth } from "./firebase";
import { BsCaretDownFill } from "react-icons/bs";

const Navbar = () => {
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const [Show, HandleShow] = useState(false);
  const [showContent, SetshowContent] = useState(false);

  const Navtransition = () => {
    if (window.scrollY > 100) {
      HandleShow(true);
    } else {
      HandleShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", Navtransition);
    return () => {
      window.removeEventListener("scroll", Navtransition);
    };
  }, []);
  return (
    <div className={`Nav ${Show && "Navbg"}`}>
      <div className="Navbar">
        <img
          onClick={() => navigate("/")}
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
          alt=""
        />
        <div className="downarrow">
          {!user ? (
            <BsCaretDownFill className="UserIcon" />
          ) : (
            <h3
              className="UserIcon"
              onClick={() => SetshowContent((prev) => !prev)}
            >
              {user.email}
              <BsCaretDownFill className="UserIcon1" />
            </h3>
          )}
          {showContent && (
            <div className="content">
              <div className="home" onClick={() => navigate("/")}>
                <h3 className="home">Home</h3>
              </div>
              <div
                className="userprofile"
                onClick={() => navigate("/userprofile")}
              >
                <h3 className="userprofile">Profile</h3>
              </div>
              <div className="signout" onClick={() => auth.signOut()}>
                <h3>Signout</h3>
              </div>
            </div>
          )}
          <img
            className="avatar"
            src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
