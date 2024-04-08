import React from "react";
import { NetflixLogo } from "../utils/constants";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        navigate("/errorPage");
      });
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={NetflixLogo} alt="logo" />
      {user && (
        <div className="flex p-2">
          <img className="w-12 h-12" alt="usericon" src={user.photoURL} />
          <button onClick={handleSignOut} className="font-bold text-white mx-2">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
