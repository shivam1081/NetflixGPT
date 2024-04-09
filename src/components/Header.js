import React, { useEffect } from "react";
import { NETFLIX_LOGO } from "../utils/constants";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        navigate("/errorPage");
      });
  };

  // Moving this useEffect here because we want it inside the router and in a place that is accessible everywhere.
  useEffect(() => {
    // This will be triggered whenever there is sign in or sign up.
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // This is the Sign In/ Sign Up State
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // This is the Sign Out State
        dispatch(removeUser()); // No action is required
        navigate("/");
      }
    });
    // This code unsubscribe when the component is unmounts and this unscribe the auth listner
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={NETFLIX_LOGO} alt="logo" />
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
