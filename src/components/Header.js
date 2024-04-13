import React, { useEffect } from "react";
import { NETFLIX_LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchValue } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const gptSearch = useSelector((store) => store.gpt.showGptSearch);

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

  const handleGptSearch = () => {
    // Handling the toggle functionality of GPT Search Button
    dispatch(toggleGptSearchValue());
  };

  const handleLangChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img className="w-44 mx-auto  md:mx-0" src={NETFLIX_LOGO} alt="logo" />
      {user && (
        <div className="flex p-2 justify-between">
          {gptSearch && (
            <select
              className="py-2 px-4 m-2 text-white bg-gray-900"
              onChange={handleLangChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="py-2 px-4 mx-4 my-2 bg-green-800 text-white rounded-lg hover:opacity-80"
            onClick={handleGptSearch}
          >
            {gptSearch ? "Homepage" : "GPT Search"}
          </button>
          <img
            className="hidden md:block w-12 h-12"
            alt="usericon"
            src={user.photoURL}
          />
          <button onClick={handleSignOut} className="font-bold text-white mx-2">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
